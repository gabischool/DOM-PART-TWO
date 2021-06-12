// Your code goes here
const navContainer = document.querySelector(".main-navigation");

const heroImg = document.querySelector(".intro img");

const bodyContent = document.querySelector("body");

const h2s = document.querySelectorAll("h2");

const toggleDark = document.querySelector("#toggleDark");

const images = document.querySelectorAll("img");

const button = document.querySelectorAll(".btn");

const buttonArr = Array.from(button);







// Events
navContainer.addEventListener("mouseover",(event) => {
	event.stopPropagation();
	event.target.style.backgroundColor = "gold";
	setTimeout(() => {
		event.target.style.backgroundColor = "";
	}, 4000);
	
}, false);

heroImg.addEventListener("mouseover", (event) => {
		event.target.style.filter = "blur(8px)";

		setTimeout(() => {
			event.target.style.filter = "";
		}, 400);
}, false);



const blurBackground = () => {
	bodyContent.style.filter = "blur(8px)";
	setTimeout(() => {
		bodyContent.style.filter = "";
	}, 1000);

};

window.addEventListener("resize", blurBackground);

const h2Color = () => {
	h2s.forEach((item) => {
		item.style.color = "gold";
		
		setTimeout(() => {
			item.style.color = "";
		}, 1000);
	})

}
const imgBlur = () => {
	images.forEach((item) => {
		item.style.filter = "blur(2px)";
		
		setTimeout(() => {
			item.style.filter = "";
		}, 1000);
	})

}

window.addEventListener("scroll", h2Color);
window.addEventListener("scroll", imgBlur);

toggleDark.addEventListener("click", () => {
	  if (bodyContent.style.backgroundColor === "black" ) {
		  bodyContent.style.backgroundColor = "white";
		  bodyContent.style.color = "black";
	  } else {
		  bodyContent.style.backgroundColor = "black"; 
		  bodyContent.style.color = "white";
	  }
});


//Double Dark Mode!!!
toggleDark.addEventListener("dblclick", () => {
		if (bodyContent.style.backgroundColor === "black") {
		  	bodyContent.style.backgroundColor = "white";
		  	bodyContent.style.color = "black";
		} else {
		  	bodyContent.style.backgroundColor = "black";
		  	bodyContent.style.color = "#202020";
		}
	});


//Button Questionnaire

var destination = "";
var activities = "";

buttonArr[0].addEventListener('click', () => {
	destination = prompt("What is your dream Island to visit?");
});

buttonArr[1].addEventListener('click', () => {
	activities = prompt("What activities would you like to do?");
});

buttonArr[2].addEventListener('click', () => {
	alert("We're going to book you a trip to " + destination + " where you'll do " + activities + ". Enjoy your trip!");
})
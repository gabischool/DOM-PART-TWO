// Your code goes here;




const mouseOver = document.querySelector(".intro img");



mouseOver.addEventListener("mouseover", function(){
mouseOver.style.transform = "scale(1.1)";
   mouseOver.style.transition = "all 0.9s"
})

mouseOver.addEventListener("mouseleave", () => {
    mouseOver.style.transform = "scale(0.9)"
  })
//   ends


let links = document.querySelector(".nav");



links.addEventListener("click", function(event) {
 
     event.preventDefault();
    
});

// ends

let txt= document.querySelector("h2");



console.log(txt);
txt.addEventListener("click", function(event) {
 
    txt.style.color="red"
   
    
});


txt.addEventListener("dblclick", function(event) {
 
    txt.style.color="blue"
   
    
});

// ends
let body= document.querySelector("body");

window.addEventListener("pageload", function(event) {
 
    body.style.backgroundColor="blue"
   
    
});

// Ends

let navs= document.querySelector(".main-navigation");
window.addEventListener("scroll", ()=>{
    navs.style.transition="all 0.9s"
navs.style.display="sticky"
navs.style.backgroundColor="lightblue"
});


let image= document.querySelector(".img-content img");
window.addEventListener("resize", ()=>{
   
image.style.transform = "scale(0.9)";
});








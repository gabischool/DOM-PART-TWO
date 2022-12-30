// Your code goes here
const mouseOver = document.querySelector(".intro img");
//mouseover
mouseOver.addEventListener("mouseover", function(){
mouseOver.style.transform = "scale(1.1)";
   mouseOver.style.transition = "all 0.9s"
})
//mouseleave
mouseOver.addEventListener("mouseleave", () => {
    mouseOver.style.transform = "scale(0.9)"
  })

// click  

let links = document.querySelector(".nav");

links.addEventListener("click", function(event) {
     event.preventDefault(); 
});

let txt= document.querySelector("h2");
console.log(txt);
txt.addEventListener("click", function(event) {
    txt.style.color="red"
});

//dblclick
txt.addEventListener("dblclick", function(event) {
    txt.style.color="blue"
});
// pageload
let body= document.querySelector("body");
window.addEventListener("pageload", function(event) {
    body.style.backgroundColor="blue"
});

// scroll
let navs= document.querySelector(".main-navigation");
window.addEventListener("scroll", ()=>{
    navs.style.transition="all 0.9s"
navs.style.display="sticky"
navs.style.backgroundColor="lightblue"
});

//resize

let image= document.querySelector(".img-content img");
window.addEventListener("resize", ()=>{
image.style.transform = "scale(0.9)";
});











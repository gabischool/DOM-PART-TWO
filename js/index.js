// Your code goes here
const earth=document.querySelector('.intro')
earth.addEventListener("mouseover",()=>{
earth. style.transform="scale(1)"
earth. style.transform="all o.3s"
})

const changeText=document.querySelector(".intro")
changeText.addEventListener("dblclick",()=>{
changeText.textContent="Welcome To the Fun Bus!"
})

const textdestination=document.querySelector(".footer")
textdestination.addeventListener("resize",()=>{
textdestination.textContent="Copyright Fun Bus 2022"

})
const contentdestination=document.querySelector(".content-destination")
contentdestination.addEventListener('focus', (event) => {
event.target.style.background = 'blue';
});

const mainnav=document.querySelctor(".main-navigation")
mainnav.addeventListener("keydown",function(){
mainnav.style.backgroundcolor="blue"
})
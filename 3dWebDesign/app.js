const card=document.querySelector(".card");
const container=document.querySelector(".container");
const title=document.querySelector(".title")
const pic=document.querySelector(".pic img")
const p=document.querySelector(".p button")
const description=document.querySelector(".info h3")
const shiv=document.querySelector(".shiv")
const circle=document.querySelector(".circle")
container.addEventListener("mousemove",(e)=>{
    console.log("shiv");
    let xAxis=(window.innerWidth/2-e.pageX)/10;
    let yAxis=(window.innerHeight/2-e.pageY)/10;
    card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
container.addEventListener("mouseenter",e=>{
    card.style.transition="none"
    title.style.transform="translateZ(150px)";
    pic.style.transform="translateZ(200px) ";
    p.style.transform="translateZ(150px)";
    circle.style.transform="translateZ(80px)";
    description.style.transform="translateZ(100px)";
    // description.style.transform="translateZ(100px) rotateZ(-15deg)";
    shiv.style.transform="translateZ(120px)"
})
container.addEventListener("mouseleave",(e)=>{
    card.style.transition="all 0.5s ease"
    card.style.transform=`rotateY(0deg) rotateX(0deg)`
    title.style.transform="translateZ(0px)";
    pic.style.transform="translateZ(0px) ";
    p.style.transform="translateZ(0px)";
    circle.style.transform="translateZ(0px)";
    description.style.transform="translateZ(0px)";
    // description.style.transform="translateZ(0px) rotateZ(0deg)";
    shiv.style.transform="translateZ(0px)";
})
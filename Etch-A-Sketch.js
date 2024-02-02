const input=document.querySelector("input");
const gridButton=document.querySelector("#gridButton");
gridButton.addEventListener('click',()=>{
    removeGrid();
    size=input.value;
    input.value='';
    makeGrid();
    coloredGrid();
});

const mainDiv=document.querySelector("#mainDiv");
let size=16;
function makeGrid(){
for(let i=1;i<=size;i++){
    const insideDiv=document.createElement("div");
    insideDiv.setAttribute("class","insideDiv");
    mainDiv.appendChild(insideDiv);
    for(let j=1;j<=size;j++){
        
        const deepDiv=document.createElement("div");
        //deepDiv.textContent=i+" "+j;
        deepDiv.setAttribute("class","deepDiv")
        
        insideDiv.appendChild(deepDiv);
    }
}
}
function removeGrid(){
    const insideDiv=document.querySelectorAll(".insideDiv");
    insideDiv.forEach((div)=>{
        mainDiv.removeChild(div);
    });
}
makeGrid();
coloredGrid();
var RGBColor1;
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
function coloredGrid(){
const allInsideDiv=document.querySelectorAll(".deepDiv");
allInsideDiv.forEach((div)=>{
    div.addEventListener("mouseover",()=>{
        //div.classList.add("colored");
        RGBColor1 = random_rgba();
        div.style.background=RGBColor1;
        //div.setAttribute("style","background:#RGBColor1;")
    })
});
}
/*
allInsideDiv.addEventListener("click",()=>{
    allInsideDiv.classList.add("colored");
    console.log("touched");
});
*/
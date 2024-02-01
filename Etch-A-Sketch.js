const mainDiv=document.querySelector("div");

for(let i=1;i<=16;i++){
    const insideDiv=document.createElement("div");
    insideDiv.setAttribute("class","insideDiv");
    mainDiv.appendChild(insideDiv);
    for(let j=1;j<=16;j++){
        
        const deepDiv=document.createElement("div");
        //deepDiv.textContent=i+" "+j;
        deepDiv.setAttribute("class","deepDiv")
        
        insideDiv.appendChild(deepDiv);
    }
    
}
var RGBColor1;
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
const allInsideDiv=document.querySelectorAll(".deepDiv");
allInsideDiv.forEach((div)=>{
    div.addEventListener("mouseover",()=>{
        //div.classList.add("colored");
        RGBColor1 = random_rgba();
        div.style.background=RGBColor1;
        //div.setAttribute("style","background:#RGBColor1;")
    })
});


/*
allInsideDiv.addEventListener("click",()=>{
    allInsideDiv.classList.add("colored");
    console.log("touched");
});
*/
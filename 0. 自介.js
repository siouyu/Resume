let AboutDiv=document.querySelector("#About");
let EdDiv=document.querySelector("#Ed");
let MineDiv=document.querySelector("#Mine");
let MiddleDiv=document.querySelector(".btnmiddle");

function over(elem){
    elem.style.backgroundColor="#009100";
}
function out(elem){
    elem.style.backgroundColor="MediumSeaGreen";
}
function down(elem){
    elem.style.fontWeight="bold";
}
function up(elem){
    elem.style.fontWeight="normal";
}

function changeToAbout(){
    AboutDiv.style.display="block";
    EdDiv.style.display="none";
    MineDiv.style.display="none";
    if(window.innerWidth<500){
        MiddleDiv.style.display="none";
    }
}
function changeToEd(){
    AboutDiv.style.display="none";
    EdDiv.style.display="block";
    MineDiv.style.display="none";
    if(window.innerWidth<500){
        MiddleDiv.style.display="none";
    }
}
function changeToMine(){
    AboutDiv.style.display="none";
    EdDiv.style.display="none";
    MineDiv.style.display="block";
    if(window.innerWidth<500){
        MiddleDiv.style.display="none";
    }
}
function changeToBtn(){
    AboutDiv.style.display="none";
    EdDiv.style.display="none";
    MineDiv.style.display="none";
    MiddleDiv.style.display="block";
}
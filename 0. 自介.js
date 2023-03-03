const AboutDiv=document.querySelector("#About");
// const是不能更改宣告（最嚴格的宣告，位階比let高）
const EdDiv=document.querySelector("#Ed");
const MineDiv=document.querySelector("#Mine");
const MiddleDiv=document.querySelector(".btnmiddle");

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
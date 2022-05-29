const navbtn = document.getElementById("nav-btn");
const content = document.getElementById("content");
const header = document.getElementById("header");
const headerPart = document.getElementById("header-part");

navbtn.onclick = function (e) {
    console.log(window.innerWidth);
    content.style.marginLeft = "260px";
    content.classList.add("cover");
    header.style.width = "260px";
    headerPart.style.display = "block"
    navbtn.classList.add("d-none");
    navbtn.classList.remove("d-lg-block");
    e.preventDefault();
}

document.getElementById("content").onclick = function () {
    console.log("body");
    document.getElementById("content").style.marginLeft = 0;
    header.style.width = "0%";
    content.classList.remove("cover");
    headerPart.style.display = "none";
    navbtn.classList.remove("d-none");
    navbtn.classList.add("d-lg-block");
}
const langbtn = document.getElementById("lang");
const langs = document.getElementById("langs");

function langslist(){
    langs.classList.toggle("langs");
    langs.classList.toggle("make-text-white");
    document.querySelector("#lang a").classList.toggle("dropdown");
}

langbtn.onclick = function(e){
   langslist();
}
document.getElementById("header").onclick = function(e){
   if(e.target.getAttribute("id")!=="xlang"){
    langs.classList.add("langs");
    langs.classList.remove("make-text-white");
   }
   
}
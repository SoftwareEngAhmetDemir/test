const navbtn = document.querySelector("#nav-btn>span");
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
const langs = document.getElementById("langs");

document.getElementById("header").onclick = function(e){
    console.log();
    let id = e.target.getAttribute("id");
    if(id==="tr"||id==="xlang"||id==="icon"){
    langs.classList.toggle("langs");
        langs.classList.toggle("make-text-white");
         document.querySelector("#lang a").classList.toggle("dropdown");
    }
    else{
        langs.classList.add("langs");
        langs.classList.remove("make-text-white");
        document.querySelector("#lang a").classList.add("dropdown");
    }
}
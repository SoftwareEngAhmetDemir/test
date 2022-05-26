 const navbtn = document.getElementById("nav-btn");
 const content =  document.getElementById("content");
 const header = document.getElementById("header");
 const headerPart = document.getElementById("header-part");
 navbtn.onclick = function(e){
     console.log("cliced");
    content.style.marginLeft = "40%";
     header.style.width = "40%";
     headerPart.style.display = "block"
    
     e.preventDefault();
 }

 document.getElementById("content").onclick = function(){
     console.log("body");
     document.getElementById("content").style.marginLeft = 0;
     header.style.width = "0%";
 headerPart.style.display = "none"

 }
 

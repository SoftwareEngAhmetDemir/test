function copyBoard() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText("ahmed");

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}


const clipboard = document.querySelector(".tab-content");


clipboard.addEventListener("click", function (e) {
    console.log(e.target.nodeName);

    if (e.target.nodeName === "IMG") {
        let parent = e.target.closest(".clip-board");
        let text = parent.querySelector(".text").textContent;
        let tooltipmsg = parent.querySelector(".tooltipc");

        navigator.clipboard.writeText(text);
        tooltipmsg.style.opacity = 1;
        
        setTimeout(() => {
            tooltipmsg.style.opacity = 0
        }, 1000);
    }
})
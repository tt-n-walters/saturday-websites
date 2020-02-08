console.log("This file has loaded!");

function whenClicked(event) {
    event.target.parentNode.classList.toggle("open");
}

let panels = document.querySelectorAll(".panel");
console.log(panels);

for (let i = 0; i < panels.length; i++) {
    panels[i].addEventListener("click", whenClicked);
}


// dark mode
let btnMode = document.querySelector(".mod-check");

btnMode.onclick = () => {
    if (btnMode.classList == "mod-check") {
        document.body.style = "background-color: #000";
        btnMode.style = "background-color: #000; border-color: #fff; justify-content: left";
        btnMode.children[0].style = "background-color: #fff;";
        btnMode.classList.add("X");
    }else {
        document.body.style = "";
        btnMode.style = "";
        btnMode.children[0].style = "";
        btnMode.classList.remove("X");
    }
}

// cards
let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        cards.forEach((card) => {
            card.classList.remove("active");
        });
        card.classList.add("active");
    });
});




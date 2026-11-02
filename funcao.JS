const card = document.querySelector(".card");

document.querySelector(".ir-cadastro").onclick = (e) => {
    e.preventDefault();
    card.classList.add("modo-cadastro");
};

document.querySelector(".ir-login").onclick = (e) => {
    e.preventDefault();
    card.classList.remove("modo-cadastro");
};
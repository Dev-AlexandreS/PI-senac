const cta = document.getElementById("cta");

cta.addEventListener("click", function () {
    console.log("Botão clicado!");
    document.getElementById("offers").scrollIntoView({
        behavior: "smooth"
    });
});
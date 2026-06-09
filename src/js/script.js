const cta = document.getElementById("cta");
const telefone = "5511913020257";

cta.addEventListener("click", function () {
    console.log("Botão clicado!");
    document.getElementById("offers").scrollIntoView({
        behavior: "smooth"
    });
});


document.querySelectorAll(".product").forEach((produto) => {
  produto.addEventListener("click", () => {
    const nomeProduto = produto
      .querySelector(".product-title")
      .textContent
      .trim();

    const mensagem = `Tenho interesse no produto ${nomeProduto}, está disponível?`;

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(url, "_blank");
  });
});
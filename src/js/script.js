const cta = document.getElementById("cta");
const telefone = "5511913020257";

cta.addEventListener("click", function () {
    console.log("Botão clicado!");
    document.getElementById("offers").scrollIntoView({
        behavior: "smooth"
    });
});


var carousel = document.getElementById("products-carousel");
var prevBtn = document.getElementById("carousel-prev");
var nextBtn = document.getElementById("carousel-next");

if (carousel && prevBtn && nextBtn) {
    var scrollAmount = 280;

    prevBtn.addEventListener("click", function () {
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", function () {
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
}


const filterBtns = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product[data-category]");
const categoryCards = document.querySelectorAll(".categorie-item[data-filter]");

filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
        const category = btn.getAttribute("data-category");

        
        filterBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");

        
        categoryCards.forEach(function (card) {
            const filter = card.getAttribute("data-filter");
            card.classList.toggle("active", category !== "todos" && filter === category);
        });

        
        productCards.forEach(function (card) {
            var cardCategory = card.getAttribute("data-category");
            if (category === "todos" || cardCategory === category) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });

        
        if (carousel) {
            carousel.scrollTo({ left: 0, behavior: "smooth" });
        }
    });
});

categoryCards.forEach(function (card) {
    card.addEventListener("click", function () {
        const filter = card.getAttribute("data-filter");
        const matchingBtn = document.querySelector(".filter-btn[data-category='" + filter + "']");
        if (matchingBtn) {
            matchingBtn.click();
            document.getElementById("offers").scrollIntoView({ behavior: "smooth" });
        }
    });
});
document.querySelectorAll(".product").forEach((produto) => {
  produto.addEventListener("click", (e) => {
    if (e.target.closest(".product-buy-btn")) return;

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


const hamburger = document.getElementById("hamburger");
const mainNav = document.getElementById("main-nav");

if (hamburger && mainNav) {
    hamburger.addEventListener("click", function () {
        const isOpen = mainNav.classList.toggle("is-open");
        hamburger.classList.toggle("is-open", isOpen);
        hamburger.setAttribute("aria-expanded", isOpen);
    });

   
    mainNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            mainNav.classList.remove("is-open");
            hamburger.classList.remove("is-open");
            hamburger.setAttribute("aria-expanded", "false");
        });
    });

    
    document.addEventListener("click", function (e) {
        if (!hamburger.contains(e.target) && !mainNav.contains(e.target)) {
            mainNav.classList.remove("is-open");
            hamburger.classList.remove("is-open");
            hamburger.setAttribute("aria-expanded", "false");
        }
    });
}

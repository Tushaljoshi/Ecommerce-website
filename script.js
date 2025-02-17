document.addEventListener("DOMContentLoaded", () => {
    // Shopping Cart Functionality
    const cart = [];
    const cartIcons = document.querySelectorAll(".btn");

    cartIcons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            const card = btn.closest(".card");
            const productName = card.querySelector("h2").innerText;
            const productPrice = card.querySelector("h3").innerText;
            const productImage = card.querySelector("img").src;

            const product = { name: productName, price: productPrice, image: productImage };
            cart.push(product);
            alert(`${productName} added to cart!`);
            updateCartUI();
        });
    });

    function updateCartUI() {
        const cartIcon = document.querySelector(".fa-cart-shopping");
        cartIcon.style.color = "#c72092"; // Change cart icon color when items are added
    }

    // Smooth Scroll for Navigation
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Heart and Share Button Animation
    document.querySelectorAll(".fa-heart, .fa-share").forEach(icon => {
        icon.addEventListener("click", function () {
            this.style.color = this.style.color === "red" ? "black" : "red";
        });
    });

    // Image Swap Functionality in About Section
    window.functio = function (small) {
        document.getElementById("imagebox").src = small.src;
    };

    // Login Form Validation
    const loginForm = document.querySelector(".login_form form");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.querySelector(".username").value.trim();
            const password = document.querySelector("input[name='password']").value.trim();

            if (username === "" || password === "") {
                alert("Please enter both username and password.");
            } else {
                alert(`Welcome, ${username}!`);
            }
        });
    }

    // Social Media Icon Hover Effect
    document.querySelectorAll(".social_icon i").forEach(icon => {
        icon.addEventListener("mouseover", () => icon.style.color = "#c72092");
        icon.addEventListener("mouseout", () => icon.style.color = "black");
    });

    // Subscribe Newsletter
    const subscribeBtn = document.querySelector(".search_bar button");
    if (subscribeBtn) {
        subscribeBtn.addEventListener("click", () => {
            const emailInput = document.querySelector(".search_bar input").value.trim();
            if (emailInput === "" || !emailInput.includes("@")) {
                alert("Please enter a valid email address.");
            } else {
                alert("Subscribed successfully!");
            }
        });
    }
});

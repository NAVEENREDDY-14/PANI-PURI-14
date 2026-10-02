/* =========================
   SHOPPING CART
========================= */

// Array to store cart items
let cart = [];


// Add an item to the cart
function addToCart(name, price) {

    // Create a food item
    let item = {
        name: name,
        price: price
    };

    // Add item to cart
    cart.push(item);

    // Update the cart on screen
    updateCart();

    // Show a small message
    alert(name + " added to cart!");
}


// Display cart items
function updateCart() {

    let cartItems = document.getElementById("cartItems");
    let cartCount = document.getElementById("cartCount");
    let cartTotal = document.getElementById("cartTotal");

    // Clear old cart display
    cartItems.innerHTML = "";

    // If cart is empty
    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

    } else {

        // Display every item
        for (let i = 0; i < cart.length; i++) {

            let item = cart[i];

            let itemElement = document.createElement("div");

            itemElement.className = "cart-item";

            itemElement.innerHTML =
                "<span>" +
                item.name +
                " - ₹" +
                item.price +
                "</span>" +

                "<button class='remove-button' onclick='removeFromCart(" +
                i +
                ")'>Remove</button>";

            cartItems.appendChild(itemElement);
        }
    }


    // Display number of items
    cartCount.textContent = cart.length;


    // Calculate total price
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        total = total + cart[i].price;
    }

    cartTotal.textContent = total;
}


// Remove item from cart
function removeFromCart(index) {

    // Remove one item using its index
    cart.splice(index, 1);

    // Update cart
    updateCart();
}


// =========================
// ORDER NOW BUTTON
// =========================

let orderNowButton =
    document.getElementById("orderNowButton");

orderNowButton.addEventListener("click", function () {

    alert(
        "Welcome to Pani Puri Corner! 🥣\n\n" +
        "Please add your favorite items to the cart."
    );

    // Scroll to menu
    document.getElementById("menu").scrollIntoView({
        behavior: "smooth"
    });
});


// =========================
// CHECKOUT BUTTON
// =========================

let checkoutButton =
    document.getElementById("checkoutButton");

checkoutButton.addEventListener("click", function () {

    if (cart.length === 0) {

        alert("Your cart is empty. Please add some items!");

    } else {

        alert(
            "Thank you for your order! 🎉\n\n" +
            "Your order has been received."
        );

        // Empty cart after ordering
        cart = [];

        updateCart();
    }
});


// =========================
// CONTACT FORM
// =========================

let contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    let name =
        document.getElementById("name").value;

    let successMessage =
        document.getElementById("successMessage");

    // Display success message
    successMessage.textContent =
        "Thank you, " + name +
        "! Your message has been sent successfully. ❤️";

    // Clear form
    contactForm.reset();
});


// =========================
// DARK / LIGHT MODE
// =========================

let themeButton =
    document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    // Add or remove dark mode
    document.body.classList.toggle("dark-mode");

    // Change button icon
    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";
    }
});


// =========================
// INITIAL CART DISPLAY
// =========================

updateCart();
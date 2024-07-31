let cart = [];

// Function to add items to the cart
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItemsDiv.innerHTML = ''; // Clear previous items
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        cartItemsDiv.innerHTML += `<p>${item.name}: $${item.price} x ${item.quantity}</p>`;
    });
    
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Handle the checkout form submission
document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    
    alert(`Order placed!\nName: ${name}\nAddress: ${address}\nPhone: ${phone}`);
    
    // Clear cart after order
    cart = [];
    updateCartDisplay();
});

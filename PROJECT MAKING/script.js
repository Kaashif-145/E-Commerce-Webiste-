document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const button = event.target;
        const product = button.parentElement;
        const productName = product.querySelector('h3').innerText;
        const productPrice = product.querySelector('p').innerText;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${product.querySelector('img').src}" alt="${productName}">
            <h3>${productName}</h3>
            <p>Quantity: 1</p>
            <p>Price: ${productPrice}</p>
        `;
        document.querySelector('.cart-items').appendChild(cartItem);
    }
});

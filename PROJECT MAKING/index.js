 document.addEventListener("DOMContentLoaded", function() {
        const products = document.querySelectorAll(".product");
        const today = new Date();
        const day = today.getDay();

        if (day === 6 || day === 0) { 
            const randomProduct = products[Math.floor(Math.random() * products.length)];
            const priceElement = randomProduct.querySelector("p");
            const currentPrice = parseFloat(priceElement.textContent.replace('₹', '').replace(',', ''));
            const newPrice = currentPrice * 0.9;
            const formattedNewPrice = `₹${newPrice.toLocaleString()}`;
            priceElement.innerHTML = `<span style="color: red; font-size: 20px;">Weekend Special: ${formattedNewPrice}</span> <del>${priceElement.querySelector("del").textContent}</del> <code>10% off!</code>`;
            randomProduct.classList.add("weekend-special");
        }
});


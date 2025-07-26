document.addEventListener('DOMContentLoaded', () => {
    const cartTable = document.querySelector('.cart-table tbody');
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');

    const updateTotals = () => {
        let subtotal = 0;
        cartTable.querySelectorAll('tr').forEach(row => {
            const priceElement = row.querySelector('.price');
            const quantityElement = row.querySelector('.quantity');
            const totalElement = row.querySelector('.total');
            
            const price = parseFloat(priceElement.textContent.replace('₹', '').replace(/,/g, ''));
            const quantity = parseInt(quantityElement.value);
            const total = price * quantity;
            
            totalElement.textContent = `₹${total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
            subtotal += total;
        });

        const taxRate = 0.18; // Assuming an 18% tax rate, adjust as needed
        const tax = subtotal * taxRate;
        const total = subtotal + tax;

        subtotalElement.textContent = `₹${subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
        taxElement.textContent = `₹${tax.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
        totalElement.textContent = `₹${total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
    };

    cartTable.addEventListener('change', event => {
        if (event.target.classList.contains('quantity')) {
            updateTotals();
        }
    });

    cartTable.addEventListener('click', event => {
        if (event.target.classList.contains('btn-remove')) {
            event.target.closest('tr').remove();
            updateTotals();
        }
    });

    updateTotals();
});
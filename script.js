
function calculateTotal() {
    let total = 0;
    document.querySelectorAll('.cart-item').forEach(item => {
        const price = parseInt(item.querySelector('.item-price').textContent.replace('$', ''));
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        total += price * quantity;
    });
    document.getElementById('total-price').textContent = total;
}


document.querySelectorAll('.cart-item').forEach(item => {
    const plusBtn = item.querySelector('.plus-btn');
    const minusBtn = item.querySelector('.minus-btn');
    const deleteBtn = item.querySelector('.delete-btn');
    const likeBtn = item.querySelector('.like-btn');
    let quantity = item.querySelector('.quantity');

    
    plusBtn.addEventListener('click', () => {
        quantity.textContent = parseInt(quantity.textContent) + 1;
        calculateTotal();
    });

    
    minusBtn.addEventListener('click', () => {
        if (parseInt(quantity.textContent) > 1) {
            quantity.textContent = parseInt(quantity.textContent) - 1;
            calculateTotal();
        }
    });

    
    deleteBtn.addEventListener('click', () => {
        item.remove();
        calculateTotal();
    });

    
    likeBtn.addEventListener('click', () => {
        likeBtn.classList.toggle('liked');
    });
});


calculateTotal();

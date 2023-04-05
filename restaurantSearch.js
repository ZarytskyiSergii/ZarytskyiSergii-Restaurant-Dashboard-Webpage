
const searchInput = document.querySelector('.searchField__mail');
const restaurantList = document.querySelectorAll('.header__item');



searchInput.addEventListener('input', (e) => {
    const inputValue = e.target.value.toLowerCase().trim();
    restaurantList.forEach(item => {
        if (item.textContent.toLowerCase().indexOf(inputValue) !== -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});



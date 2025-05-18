document.querySelectorAll('.dropdown').forEach(dr => {
    const drValue = document.querySelector('.dropdown__value');
    const drList = document.querySelector('.dropdown__list');

    drValue.addEventListener('click', () => {
        drList.classList.toggle('dropdown__list_active');
        })
    
    dr.querySelectorAll('.dropdown__item').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); 
            drValue.textContent = item.textContent; 
            drList.classList.remove('dropdown__list_active'); 
        });
    });

    document.addEventListener('click', (event) => {
        if (!dr.contains(event.target)) {
            drList.classList.remove('dropdown__list_active');
        }
    });
})



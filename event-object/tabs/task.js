document.querySelectorAll('.tabs').forEach(tabsContainer => {
    const tabs = tabsContainer.querySelectorAll('.tab');
    const tabContents = tabsContainer.querySelectorAll('.tab__content');

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            //alert(i);
            tabs.forEach(tabRemove => tabRemove.classList.remove('tab_active'));
            tab.classList.add('tab_active');

            tabContents.forEach(content => content.classList.remove('tab__content_active'));
            tabContents[i].classList.add('tab__content_active');
        });
    });
})
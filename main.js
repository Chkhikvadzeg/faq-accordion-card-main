const MainCardListTitle = document.querySelectorAll('.main-card-content-list-title');

MainCardListTitle.forEach(n => n.addEventListener('click', () => {
    MainCardListTitle.forEach(title => {
       n !== title ? title.parentElement.classList.remove('active') : n.parentElement.classList.toggle('active');
    })
}))
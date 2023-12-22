// Копирование и добавление элементов в бургер меню

const Menu = {
    baseEl: document.querySelector('.header'),
    copyAppendElement: function (parent, elementSelector) {
        const el = this.baseEl.querySelector(elementSelector).cloneNode(true);
        parent.appendChild(el);
    },
}
const menuBurger = document.querySelector('.burger__nav');
Menu.copyAppendElement(menuBurger, '.menu__list');
let socialText = document.createElement('span');
socialText.textContent = 'Связаться со мной:';
socialText.classList.add('header__social-text');
menuBurger.append(socialText);
Menu.copyAppendElement(menuBurger, '.header__social');


// Раскрытие бургер меню по клику на иконку

const menuBurgerIcon = document.querySelector('.burger__icon');

menuBurgerIcon.addEventListener('click', function () {
    menuBurger.style.right = '0';
});

/**Закрытие бургер меню */

const close = document.getElementById('burgerClose');
close.addEventListener('click', function () {
    menuBurger.style.right = '-150%';
});
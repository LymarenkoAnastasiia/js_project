/*Завдання
маємо div
маємо дві кнопки - на одній написано "зробити червоним", на іншій "зробити зеленим"
за натисненням кнопки колір div змінюється на колір, вказаний на кнопці
*/

// const div = document.querySelector('.box');
// const classList = div.classList;
// console.log(classList);

// const [red, green] = document.querySelectorAll('.btn2');
// red.addEventListener('click', () => {
//     classList.toggle('red-little');
// })

// green.addEventListener('click', () => {
//     classList.toggle('green-big');
// })

// const btn = document.querySelector("button");
// const div = document.querySelector('#root');

// const eventHandler = (event) => {
//     if(event.currentTarget === document.body) {
//         event.stopPropagation();
//         console.log('Ніяких тобі кнопок')
//     }
//   console.dir(event.currentTarget);
// };

// // console.group();
// btn.addEventListener("click", eventHandler, () => {
//     console.log('hello, button')
// });
// // div.addEventListener("click", eventHandler, {capture: true});
// document.body.addEventListener('click', eventHandler, {capture: true});
// // window.addEventListener("click", eventHandler, {capture: true});
// console.groupEnd();

// const event = new MouseEvent('click');
// btn.dispatchEvent(event);

/*
1. Фаза Занурення. Подія стається на рівні ОС.
ОС передає ії браузеру (Window), той передає document --> body --> ... --> елемент, на якому сталася подія
2. Фаза цілі. Подія досягла елемента, елемент - це таргет
3. Фаза сплиття. Подія починає вспливати у зворотньому напрямку
*/


/*
Створити інпут, який при втраті (подія blur) виводити в сусідньому квадрат числа який був введений у інпут
1. створити інпут у верстці
2. створити div у верстці
потім витягти на div та input посилання через querySelector (getElement...)
4. на інпут повісити подію, тип події - blur, коли станеться подія, треба в сусідньому діві вивести квадрат числа який був введений в інпут

проверка на value (input - число!)
пам'ятайте, value в input завжди будет рядком (перетворити типи)
*/

//Рішення
// const input = document.querySelector('input');

// function blurHandler(event) {
//     const value = event.target.value;
//     const number = Number(value);
//     const div = document.querySelector('#root1');

//     if(Number.isNaN(number)) {
//         div.textContent = 'Input must be a number';
//         return;
//     }
//     div.textContent = number * number;
// }


// input.addEventListener('blur', blurHandler);



// const button = document.querySelector('button');

// function clickHandler({target}) {
//     target.disabled = true;
// }

// button.addEventListener('click', clickHandler);


/*
маємо div
маємо 5 кнопок, на кожній написаний колір
за натисненням на кнопку фоновий колір цього div змінюється на відповідний колір вказаний на кнопці
*/

// const buttons = document.querySelectorAll('button');
// const div = document.querySelector('#root3');

// for (const btn of buttons) {
//     btn.addEventListener('click', clickHandler);
// }

// function clickHandler ({target: {dataset: {color}, parentNode}}) {
//     parentNode.style.backgroundColor = color;
// }


/*
маємо елемент img
маємо дві кнопки, які в атрибутах data- містять посилання на певну картинку (адреса картинки)
за натисненням на кнопку img має показати ту картинку адреса якої зберігалася у кнопці

Для того щоб дістатись картинки у обробнику події кліку можна використовувати :
event.target.parentNode.children (це буде масив)
*/

// //Рішення

// const [btn1, btn2] = document.querySelectorAll('button');
// btn1.addEventListener('click', clickHandler);
// btn2.addEventListener('click', clickHandler);

// function clickHandler({target}) {
//     const img = target.parentNode.children[0];
//     img.setAttribute('src', target.dataset.src);
// }



function createDiv() {
    const div = document.createElement('div');  //1. створюмо елемент у пам'яті
    div.classList.add('box1')
    div.append('Hello, text');
    document.body.append(div); // 2. приєднуємо елемент до батьківскього елементу
}

const btn = document.querySelector('button');
btn.addEventListener('click', createDiv);
/*Завдання
маємо div
маємо дві кнопки - на одній написано "зробити червоним", на іншій "зробити зеленим"
за натисненням кнопки колір div змін.ється на колір, вказаний на кнопці
*/

const div = document.querySelector('.box');
const [red, green] = document.querySelectorAll('.btn2');
red.addEventListener('click', () => {
    div.style.backgroundColor = 'red';
})

green.addEventListener('click', () => {
    div.style.backgroundColor = 'green';
})
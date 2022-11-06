// Контекст - this


'use strict';// строгий режим


function test() {   //function declaration
  console.log(this);   // this указує на функцію
}
test();


const test1 = function() {    //function expression
  console.log(this);     // this указує на функцію
} 
test1();


console.log(this);   // this указує на глобальний об'єкт window


const arrow = () => {   // Arrow function не мають власного контексту
  console.log(this);
}
arrow();

const newspaper = {
    title: 'Header',
    articles: [
        {
            author: '1 author',
            date: '04-11-22',
            text: 'lorem'
        },
        {
            author: '2 author',
            date: '04-11-22',
            text: 'lorem'
        },
        {
            author: '3 author',
            date: '04-11-22',
            text: 'lorem'
        }
    ],
    showArticles: function() {
        this.articles.forEach((article, index) => {
            console.log(`${this.title} ${index} - ${article.author}`);
        })
    }
}
newspaper.showArticles();



// Стрелочная функція може бути скорочена якщо функція состоит з однієї строки(виконує одну дію)
function sum(a,b) {
    return a + b;
}

const arrow1 = (a, b) => a + b;  // a + b === {return a+b}
console.log(sum(2,2));
console.log(arrow1(2,2));


//const pow = x => ** 2;  //якщо один аргумент, можна опустити (круглі скобочки)

// Стрелочная функція може бути використана у функції-конструкторі
const SuperFunc = () => {
    this.value = 'hello';
}


const tes1 = function() {
    console.log(arguments);
}
const t2 = () => {
    console.log(arguments);  //Arrow Function не має arguments
}


/*Arrow function
1. Не має свого контексту (свого this у неї не має, бере найближчий this і ворує його, і цей this
    буде вказувати на середовище її виконання)
2. Не може бути функцією-конструктором
3. Не має колекції arguments
*/


/*
Оператор rest - ...назва_масиву - троеточие это то как он записыватся и следом надо дать какое-то имя массиву
бере всі аргументи у остаткє і складає їх у масив
*/

function sum(a, b, ...arrayOfRestArguments) {
    console.log(arrayOfRestArguments);
    return a + b;
}
sum(3,4); // 7
sum(1,2,34,5); // 3
sum(1,2,3,3,4,5,5,2); // 3
//скласти всі числа після перших двух у масив

/*
const arrowSum = (...rest) => {
    let sum = 0;
    for(let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}
console.log(arrowSum(5,5,5,5));
 */

/*Завдання
переписати arrowSum щоб він використовував метод reduce
при виклику reduce передайте йому стрілковий callback
*/
const arrowSum = (...restArray) => {   
    return restArray.reduce((accum, currentItem) => {
        return accum + currentItem;
    })
}
//сокр.вариант const arrowSum = (...restArray) => restArray.reduce((accum, currentItem) => accum + currentItem)
console.log(arrowSum(5,5,5,5));



// Оператор spread - бере масив і розпаковує його
// [] -> ..., ..., ...,

const numbers = [1,2,3,4,5];
sum(numbers); //не спрацює, весь масив запишеться в аргумент а
//sum(numbers([0], numbers[1])) // теж не варінт, він спрацює, але займає багато часу
sum(...numbers); // вірний варіант

///// зклеїти два масива в один, без concat
const arr1 = [1,2,3,4,5];
const arr2 = [10,11,12,13,14,15];
const arrSum = [...arr1, ...arr2];
console.log(arrSum);


//Вложенные циклы

/*Завдання
вивести на консоль таблицю множення від 1 до 5 у вигляді:
1х1 = 1
1х2 = 2
....
2х1 = 2
2х2 = 4
...
5х1 = 5
5х2 = 10
5х3 = 15
5х4 = 20
5х5 = 25

*/
// for(let i = 1; i <= 5; i++) {
//     for(let j=1; j <= 5; j++) {  //for(let j=1; j <= 10; j++) { якщо треба числа перемножити на числа до 10 (5х6, 5х7 і т.д.)
//     console.log(`${i} x ${j} = ${i*j}`);
// }
// }


//tovary = [[...побутова_техніка...], [...садова_техніка...], [...алкоголь...]]



const number = [[1,2,3], [4,5,6], [7,8,9]];

function sumArray(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
        sum += array[i][j];
    }
}
return sum;
}
console.log(sumArray(number));


/*Завдання
Дано подвійний масив чисел
const number = [[1,2,3], [4,5,6], [7,8,9]];
Мова про вкладені у масив цикли
Треба: якщо парному масиві число парне - замінити елемент масиву рядком 'pp'
якщо у парному масиві число не парне - замінити елемент масиву рядком 'pn'
якщо у непарному масиві число парне - замінити елемент масиву рядком 'np'
якщо у непарному масиві число не парне - замінити елемент масиву рядком 'nn'

*/

// Array - const arr = [2, 4, 6, 7];
// вивести масив у консоль
const array = [7, 3, 5, 2];
for (let i = 0; i < array.length; i++) {
console.log(
    array[i])
}

'use strict';

/*
Set - множина
набір унікальних значень
*/

/*
Деструктурізація об'єкту
*/

const monitor = {
    sizes: {
        width: {
            value: 30,
            scale: 'cm'
        },
        height: {
            value: 60,
            scale: 'cm'
        }
    },
    brightness: 750,
    refresh: {
        value: 144,
        scale: 'Hnz'
    },
    color: 'black',
    resolution: '4K',
}

//звернення через крапку
monitor.color; // black => color
monitor.sizes.height; // height => object
monitor.sizes.height.value; // значення висоти


//const height = monitor.sizes.height.value;

//звернення з деструктуризацією
//const {resolution, color: monitorColor} = monitor; // color: monitorColor переименование поля в переменной
const {sizes: {height: {value: heightValue}, width: {value: widthValue}}} = monitor;
//heightValue, widthValue - звичайні змінні

const {color, brightness, resolution, ...restOfMonitor} = monitor; //вытащить что нужно и остальное засунуть в объект



/*Деструктурізація масивів */
const arr = [1, 2, 3, 4, 5, 6];
//const [firstElement] = arr; //положит перший елемент масиву
//const [firstElement, secondElement] = arr; //положит другий елемент масиву
//const [first, second, third, fourth] = arr;
const [first, second, ...restOfArr] = arr;


/*Деструктурізація вхідних параметрів */

function getFullName({firstName, lastName, ...rest}) {  //все інше окрім firstName, lastName ігнорується
    console.log(rest);
    return `${firstName} ${lastName}`;
}


/*Замикання */
let value = 10;


function wrapper() {
    let value = 20;
    console.log('WRAPPER function', value);

    return function log() {
        console.log('LOG function', value);
    }
}


// function counter() {
//     let i = 0;
//     i++;
//     return i;
// }

function makeCounter() {
    let i = 0;
    return function() {
        return i++;
    }
}
const fn = makeCounter();

function makeCounter2() {
    let counter = 0;
    return {
        increment() {
            return ++counter;
        },
        decrement() {
            return --counter;
        }
    }
}

const fnObj = makeCounter2();

function rememberParametr(arg) {
    return function() {
        return arg;
    }
}
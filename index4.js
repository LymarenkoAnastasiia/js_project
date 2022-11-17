'use strict';

//Методи примітивних типів

const a = 5;
const b = a;
console.log(
    'hello'
    .length
    );

/*const str = 'Привіт!';
console.log(
    str.toUpperCase() //ПРИВІТ!
    );
*/

const bool = true; //bool - примитив логичексого типа
bool.toString();
/*
1. Створюється об'єкт-обгортка Boolen: bool = new Boolean(true);
2. bool.toString();
3. Отримуємо результат і об'єкт-обгортка знищується
*/

const str = 'abracadabra';



//Date

const time1 = new Date();

let sum = 0;
for(let i = 0; i < 50000; i++) {
    sum += i;
}
console.log(sum);

const time2 = new Date();
console.log(time2.getTime() - time1.getTime());


//Рекурсія

//Ітераційний підхід (ітераційне мишлення)

// pow(x, n);
function pow(x, n)  {       //x возводится в степень n () === x умножается на х n-ное кол-во раз 
//pow(2, 3); === 2*2*2=8
let result = 1;
for(let i = 0; i < n; i++) {
    result *= x;
}
return result;
}
console.log(pow(3,4)); // 81



//Рекурсивний підхід (рекурсивне мишлення)
function pow1(x, n) {
    if(n === 1) {
        return x;
    } else {
        return x * pow1(x, n - 1);
    }
}
console.log(pow1(3,4)); // 81

/*

       if n===1 = x
      /
pow(x, n) = 
      \
       else  = x * pow(x, n -1)
*/



//JSDoc

/**
 * повертає х у n-ній степені
 * @param {number} x число, що треба піднести до степеня     //в {} указуємо тип даних
 * @param {number} n степінь, повинна бути натуральним числом
 * @return {number} x піднесене у n-ну степінь
 */

function pow2(x, n) {
    //тут буде код
}
pow2();



/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number} Sum of a and b
 * @throws {RangeError} If a or b is not a positive number
 * @throws {TypeError} If a or b is not a number
 */

//Exceptions
function sumOfPositiveNumbers(a, b) {
    if(a < 0 || b < 0) {
        //треба сповістити користувача, що число не підходить
        const error = RangeError('Число менше 0');
        //throw <об'єкт ошибки>
        throw error; // return, тільки для помилок
    }
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('a i b мають бути числом')
    }
    return a+b;
}
try {
    sumOfPositiveNumbers(2, -2)
    // щось робимо, очікуючи що тут може виникнути помилка
} catch(error) {
    console.log(error);
}
console.log('Usual code flow');




//Класи
//Old syntax

function OldUser(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
}

function OldUserProto() {
    this.getFullName = function() {
        return `${this.name} ${this.lastName}`
    }
}
OldUser.prototype = new OldUserProto();

const obj1 = new OldUser('John', 'Doe', 56);



//New syntax
//Базовий синтаксис класу
/*
class MyClass {
    //поля і методи класу
    constructor() {...}
    method1() {...}
    method2() {...}
    methood3() {...}
    ...
}
*/

class NewUser {
    constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    }
    getFullName() {
        return `${this.name} ${this.lastName}`
    }
}
const newObj = new NewUser('John', 'Doe', 56);


//Параметри за замовчуванням
/*
function sum(a = 10, b = 5) {       //якщо нічого не буде передано у функції для a i b, за замовчуванням візьмуться 10 і 5
    console.log(a, b);
}
sum(3, 2); // 3, 2
sum(); // 10, 5
*/


//Set and Get
// _ - поля, які починаються с нижнього підкреслення не можна вручну змінювати
//Сеттер - метод для встановлення значення
//Геттре - метод для отримання значення

const MIN_SALARY = 6700;
const WORK_DAYS = 21;
const MIN_RATE = MIN_SALARY / WORK_DAYS;

class Worker {
    constructor(name, lastName, rate = MIN_RATE, days= WORK_DAYS) {
        this.name = name;
        this.lastName = lastName;
        // if(typeof rate !== 'number' || typeof days !== 'number') {
        //     throw new TypeError('rate and days must be number');
        // }
        // if(days < 0 || days > 31) {
        //     throw new RangeError('Days must be from 0 to 31');
        // }
        // if(rate < 0) {
        //     throw new RangeError('rate must be a positive number');
        // }
        this._rate = rate;
        this.days = days;
    }
    countMonthSalary() {
        return this.rate * this.days;
    }
    set rate(value) {
        if(value < 0) {
            throw new RangeError('Rate must be a positive number');
        }
        this._rate = value;
    }
    get rate() {
        return this._rate;
    }
    //}
    // setRate(value) {
    //     if(typeof value !== 'number') {
    //         throw new TypeError('Rate must be a nubmer');
    //     }
    //     if(value < 0) {
    //         throw new RangeError('Rate must be a positive number');
    //     }
    //     this._rate = value;
    // }
    // getRate() {
    //     return this._rate;
    }

const newWorker = new Worker('Nick', 'Pott', 20, 4);
const newWorker2 = new Worker('Lia', 'Pugh');
/*
newWorker.rate = 100; //setter
newWorker.rate; //getter
 */



//Статичні методи

class Test {
    constructor(value1, value2) {
        //creates {} ---> this
        this.key1 = value1;
        this.key2 = value2;
    }
    unstaticMethod() {
        console.log('Нестатичний метод, буду робити для ексземплярів класу');
    }
    static staticMethod(value) {
        console.log('Статичний метод всередені класа, буду робити для всього класу незалежно від екземпляру');
    }
}

Test.newMethod = function() {        //другой способ объявить метод для класса
    console.log('Статичний метод поза класом');
}

const obj2 = new Test();  //создаем новую сущность
//obj2.method();   //получать доступ к методу через точку
//Test.newMethod(value);




//Наслідування
class Animal {
    constructor(color, name, tail) {
        this.color = color;
        this.name = name;
        this.tail = tail;
    }
    eat() {
        return `${this.name} is eating`
    }
}

// class Dog extends Animal - класс Dog расширяет класс Animal (Наследует класс)
class Dog extends Animal {
    constructor(color, name, tail) {  //якщо треба додаткове поле, допусуємо, але в super передаємо все, що в Animal, прописуємо як завжди
        super(color, name, tail);
        //можно удалить, потому что все есть в классе Animal
        // this.color = color;
        // this.name = name;
        // this.tail = tail;
    }
    //метод eat можно удалить, потому что он есть в классе Animal
    // eat() {
    //     return `${this.name} is eating`
    // }
    barking() {
        return `${this.name} is barking`
    }
}



class User {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Moderator extends User {
    constructor(name, surname, age) {
        super(name, surname, age);
    }
    createPost(header, text) {
        console.log('Create post');
    }
    deletePost(index) {
        console.log('Delete post');
    }
}

class Admin extends Moderator {
    constructor(name, surname, isAdmin) {
        super(name, surname, null);
        this.isAdmin = isAdmin;
    }
    setModerator() {
        console.log('Set moderator');
    }
    deleteModerator() {
        console.log('Delete moderator');
    }
}



// Тип даних Symbol
const mySymbol = Symbol(); //без new!!!
//const symb2 = Symbol('my second symbol'); //label for human
const obj = {
    test: 1,
    [mySymbol]: 123,
    abracadabra: '2123',
}

//Алгоритми
const arr = [2, 4, 1, 3, 2, 4, 5, 5, 6, 6];
function linearSearch(arr, value) {      //лінійна складність
    for(let i = 0; i < arr.length; i++)
    if(arr[i] === value) {
        return i;
    }
    return -1;
}

function multyTable(limit) {      //квадратична складність (парабола)
    const table = [];
    for(let i = 1; i <= limit; i++) {   
        for(let j = 1; j <= limit; j++) {
            table.push(`${i} * ${j} = ${i*j}`)
        }
    }
    return table;
}


const arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
function binarySearch(array, whatToFind) {    //бінарна складність
    if(whatToFind > array(array.length - 1)) {
        return -Infinity;
    }
    let start = 0;
    let end = array.length - 1;
    let middle = Math.round(start + end / 2);
    while(true) {
        if(array[middle] === whatToFind) {
            return middle;
        }
        if(array[middle] < whatToFind) {
            start = middle;
            middle = Math.ceil(start + end / 2);
        } else {
            end = middle;
            middle = Math.ceil(start + end / 2);
        }
    }
}


//Stack

class Stack {
    constructor(maxSize) {
        this._maxSize = maxSize;
        this._size = 0;
    }
    get isEmpty() {
        return this.size === 0;
    }
    get size() {
        return this._size;
    }
    get maxSize() {
        return this._maxSize;
    }
    set size(value) {
        throw new Error('Access denied');
    }
    set maxSize(value) {
        throw new Error('Access denied');
    }
    push(value) {
        if(this.size >= this.maxSize) {
            throw new Error('Stack overflow');
        }
        this[`_${this.size}`] = value;
        this._size++;
        return this.size;
    }
    pop() {
        if(this.size > 0) {
            const lastItem = this[`_${this.size}`];
            delete this[`_${this.size - 1}`];
            this._size--;
            return lastItem;
        }
    }
    pick() {
        return this[`_${this.size - 1}`];
    }
}



//Deck

class Queue {
    constructor(...args) {
        this._head = 0;
        this._tail = 0;
        for(const item of args) {
            this.enqueue(item);
        }
    }
    get size() {
        return this._tail - this._head;
    }
    enqueue(value) {  //вставляє елемент в кінець черги
        this[this._tail] = value;
        this._tail++;
        return this.size;
    }
    dequeue() {  //видаляє елемент з початку черги
        if(this.size > 0) {
        const lastItem = this[this._head];
        delete this[this._head++];
        return lastItem;
    }
    }
}


/*(мапа, карта) зберігає пари ключ-зачення
має розмір(size)
Відмінності від звичайного об'єкта:
1. Запам'ятовує елементи в тому порядку, в якому ми їх додаємо
2. Ключем може бути будь-який тип даних: string, number, boolean, bigint, function, object
(Об'єкти і функція передаються за посиланням)
Ключ має бути унікальним
*/


const vocabulary = new Map();
vocabulary.set('cat', 'кіт');
vocabulary.set('dog', 'пес');
vocabulary.set('eat', 'їсти');

function translator(str2, options) {
    const vocabulary = options.vocabulary;
    const separator = options.separator;
    const arrayWords = str.toLowerCase().trim().split('separator');
    // const translatedArray = arrayWords.map((word) => {
    //     if(vocabulary.has(word)) {
    //         return vocabulary.get(word);
    //     }
    //     return word;
    // })
    const translatedArray = arrayWords.map((word) => vocabulary.has(word) ? vocabulary.get(word) : word);
    return translatedArray.join(separator);
}

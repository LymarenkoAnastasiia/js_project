// JS умеет складывать числа

let newline1 = 5 + 5;
//JS умеет склеивать строки

let newline = 5 + "you";
newline = 1 + "1";
console.log(newline);

// Перетвореня (приведення) типу даних

//неявне перетворення типу даних, string перетворився в number
let num5 = 6 - "1";
console.log(num5);
let thisIsNumber2 = "45" - 0;

//явне перетворення типу даних, наказали JS перетворити string в number
let thisIsNumber = Number("45");
console.log(thisIsNumber2);

//boolean автоматично приводиться до типу даних number, де true = 1, false = 0
let booleanNumber = true + 1;
console.log(booleanNumber);

//явне перетворення типу даних, наказали JS перетворити number в string
let str = String(45);
console.log(str);

let str2 = null + "";
console.log(str2);

let notAnumber = 2 * "Hello";
console.log(notAnumber);
Number("Hello");

//typeof - дозволяє попросити показати який тип даних

let box = true;
console.log(typeof thisIsNumber2);

let box1 = null;
console.log(box1);

let box2 = 5;
console.log(box2);

let box3 = "2";
console.log(box3);

let box3AndBox2 = 5 + "2";
console.log(box3AndBox2);
console.log(typeof box3AndBox2);

let box3MinusBox2 = "2" - 5;
console.log(box3MinusBox2);
console.log(typeof box3MinusBox2);

let box1AndBox2 = null + 5;
console.log(box1AndBox2);
console.log(typeof box1AndBox2);

let box4 = 10 + undefined;
console.log(box4);
console.log(typeof box4);

console.log(); // () - оператор виклику функції;

// группировка
const sum = (2 + 2) * 6;
console.log(sum);

//const hello = "Masha told "Hello""; //Hello сприймається як оператор/команда, яку JS не знає і не працюватиме, подальший код теж не працюватиме
const hello2 = 'Masha told "Hello"'; // різні типи лапок
const hello3 = 'Masha told "Hello"'; //екрановані символи
const hello4 = 'Masha told \n"Hello"'; // перенос строки
console.log(hello4);

// % - залишок від цілочиселного поділу
let div = 5 / 3; //div - divide, 1.6
let rest = 5 % 3; // потому что 5/3 = 1.6

let pair = 4 % 2; // 0
let unpair = 5 % 2; // 1

// оператор возведения в степень
const x3 = 3 ** 3; //3 - то, что нужно возвести в степень, ** - оператор, вторая 3 - то, в какую степень надо возвести

// Increment , decrement

// Increment
let i = 1;
i = i + 1; // 2
i++; // то же самое что и i = i + 1;
i += 1; // то же самое что и i = i + 1;

// Decrement
//let i = 1;
i++; // 2
i--; // 1

// Prefix
++i; // Increment буде виконано першим ділом, а потім всі інші операції
--i;// Decrement буде виконано першим ділом, а потім всі інші операції

// Postfix
i++; // Спочатку буде використано значення змінної, а після завершення операції вона інкрементується
i--; // Спочатку буде використано значення змінної, а після завершення операції вона декрементується

let j = 0;
console.log(++j);

//
let k = 0;
k = k + 2; // 2
k = k - 1 // 1

k += 2; // k = k + 2;
k -= 3 // k = k - 3;
k *=4 // k = k * 4;
k /= 5 // k = k / 5;

/* Унарні оператори */
let o = 1;
o = -o; // +1 - як унарний оператор може явно привести текстовий тип до числа
console.log(o);

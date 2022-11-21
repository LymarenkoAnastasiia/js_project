'use strict';

/*Завдання
написати функцію, яка приймає два рядка і перевіряє чи є воно анаграмами одне до одногою
Зробити це за допомогою Map.
'рама' - 'мара'.
'test' - 'sett'
1. Обидва рядки привести до одного регістру.
2. Перевірити щоб в обох словах була однакова кількість літер.
3. Порівняти розмір словників і їх  зміст. (скільки разів зустрілась та чи інша літера)
*/

//Рішення

function checkAnagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }
    const lowStr1 = str1.toLowerCase();
    const lowStr2 = str2.toLowerCase();
    const map1 = new Map();
    const map2 = new Map();
    for(const letter of lowStr1) {
        if(map1.has(letter)) {
            const letterCount = map1.get(letter);
            map1.set(letter, letterCount + 1);
        } else {
            map1.set(letter, 1);
        }
    } 
    for(const letter of lowStr2) {
        if(map2.has(letter)) {
            const letterCount = map2.get(letter);
            map2.set(letter, letterCount + 1);
        } else {
            map2.set(letter, 1);
        }
    } 
    for(const key of map1.keys()) {
        if(map1.get(key) !== map2.get(key)) {
            return false;
        }
    }
    return true;
}


/*Завдання
Дан масив [2,3,3,4,6,6,6,6,7,7,7,7,2,2,2,2,1,1,1]
повернути масив без повторень
*/

//Рішення
function arrayWithoutDoubles(arr) {
    const set = new Set(arr);
    const arrFromSet = [...set.values()];
    return arrFromSet;
}

/*Завдання
витягти з об'єкта ім'я юзера і перейменувати його на firstName.
витягти улююлений напій і перейменувати його на favoriteDrink
витягти логин і перейменувати в email
*/
const userObj = {
    name: {
        first: 'John',
        last: 'Doe'
    },
    adress: {
        city: 'Dnipro',
        street: 'Frunze'
    },
    auth: {
        login: 'johndoe@gmail.com',
        pass: '#hash'
    },
    favorites: {
        dish: {
            eat: 'sandwich',
            drink: 'black tea with lemon'
        }
    }
}

//Рішення
const {
    name: {
        first: firstName
    },
    auth: {
        login: email
    },
    favorites: {
        dish:  {
            drink: favoriteDrink
        }
    }
} = userObj;


/*Завдання
написати функцію, яка приймає об'єкт монітору, виймає з нього розміри висоти і ширини і на їх основі
повертає розмір діагоналі.
Math.sqrt(a**2 + b**2)
*/

//Рішення
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

//Рішення
function diagonalSize({sizes: {width: {value: b}, height: {value: a}}}) {
    return Math.sqrt(a**2 + b**2);
}


/*Завдання
написати функцію, яка приймає параметр і повертає інкременцію, що очікує другий параметр і повертає
суму двох параметрів
*/

//Рішення
function createAdder(n) {
    return function(m) {
        return m + n;
        }
}


/*Завдання
створіть функцію isCorrectPassword, яка буде приймати правильний пароль і яка повертає внутрішню функцію, яка приймає
введену строку і повертає логічне значення true, якщо введена строка співпадає з паролем, false, якщо ні
*/


//Рішення
function isCorrectPassword(password) {
    return function(checkedPassword) {
        return password === checkedPassword;
    }
}
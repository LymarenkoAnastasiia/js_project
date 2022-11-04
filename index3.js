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
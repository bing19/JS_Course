// Контекст вызова и замыкания


// document.addEventListener("DOMContentLoaded", function(){
//
//     var button = document.querySelector('.button');
//
//     button.addEventListener('click', function(){
//         getName.call(button);
//     });
//
//     function getName() {
//         this.innerHTML = 'Новая Кнопка';
//         console.log(this.innerHTML);
//
//     };
//
// });

// !!!!!СПРОСИТЬ НАСЧЕТ КОНТЕКСТА ВЫЗОВА

var obj = {
    name: 'John',
    getName: function() {
        console.log(this);
    }
}

$(document).ready(function(){

    $('.button').click(function(){
        obj.getName();
    });

});

// var value = 0;
//
// function f() {
//     if (1) {
//       var value = true; // !!!! Здесь вопрос про var и что будет с LET
//     } else {
//         value = false;
//     }
//
//     alert( value );
// }
//
// f();


// function test() {
//
//     alert( window );
//
//     var window = 5; // Я так понял что при объявлении или при вызове функции
//     // сначала создастся эта переменная, потому что есть var
//
//
//     alert( window );
// }
//
// test();

// var a = 5;
//
// (function() {
//     alert(a)
// })();

// var currentCount = 1;
//
// function makeCounter() {
//     return function() {
//         return currentCount++;
//     };
// }
//
// var counter = makeCounter();
// alert( counter() ); // ?
// alert( counter() ); // ?




// Задачи по замыканиям

function sum(a) {
    var result;

    return function (b) {
        return result = a + b;
    }
}

console.log( sum(1)(4) );


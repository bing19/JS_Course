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

// function sum(a) {
//     var result;
//
//     return function (b) {
//         return result = a + b;
//     }
// }
//
// console.log( sum(1)(4) );

// function makeBuffer() {
//     var bufferString = '';
//
//     function buffer(value) {
//
//         if(arguments.length == 0) {
//             return bufferString;
//         }
//
//         bufferString += value;
//     };
//
//     buffer.clear = function() {
//         bufferString = '';
//     };
//
//     return buffer;
//
// };
//
// var buffer = makeBuffer();
//
// // добавить значения к буферу
// buffer('Замыкания');
// buffer(' Использовать');
// buffer(' Нужно!');
// buffer.clear();
// console.log (buffer());


// var users = [{
//     name: "Вася",
//     surname: 'Иванов',
//     age: 20
// }, {
//     name: "Петя",
//     surname: 'Чапаев',
//     age: 25
// }, {
//     name: "Маша",
//     surname: 'Медведева',
//     age: 18
// }];
//
// function byField(field) {
//
//     return function (a, b) {
//         return a[field] > b[field] ? 1 : -1;
//     }
// }
//
// users.sort( byField('age') );
//
// users.forEach(function(user){
//     alert( user.age );
// });




// Фильтрация через функцию

var arr = [1, 2, 3, 4, 5, 6, 7];

// function filter (arr, func) {
//
//    var result = [];
//
//     for(var i = 0; i < arr.length; i++) {
//         var val = arr[i];
//         if(func(val)) {
//             result.push(val);
//         }
//     }
//
//     return result;
// }
//
// function inArray(arr) {
//     return function(x) {
//         return arr.indexOf(x) != -1;
//     }
// }
//
// function inBetween (a, b) {
//     return function(x) {
//         return x >=a && x <= b;
//     }
// }
// console.log(filter(arr, inBetween(2, 6)));


// Переписал функцию с исспользование цикла Фильтер

// function filter (arr, func) {
//
//     var result = arr.filter(function(item) {
//         return func(item);
//     });
//
//     return result;
// }
//
// function inArray(arr) {
//     return function(x) {
//         return arr.indexOf(x) != -1;
//     }
// }
//
// function inBetween (a, b) {
//     return function(x) {
//         return x >=a && x <= b;
//     }
// }
//
// console.log(filter(arr, inBetween(3, 6)));
// console.log(filter(arr, inArray([1,2,3])));


// Армия функций - сложная задача. Не догадался бы. Нужно пояснение.

// function makeArmy() {
//
//     var shooters = [];
//
//     for (var i = 0; i < 10; i++) {
//
//         // var shooter = function me() { // функция-стрелок
//         //
//         //     console.log(me.i);
//         //
//         // };
//         //
//         // shooter.i = i;
//
//         var shooter = (function(i) { // функция-стрелок
//
//             return function() {
//
//                 console.log(i);
//             }
//
//         }(i));
//
//
//         shooters.push(shooter);
//     }
//
//     return shooters;
// }
//
// var army = makeArmy();
//
// console.log(army);
// army[0](); // стрелок выводит 10, а должен 0
// army[5](); // стрелок выводит 10...

// var value = "Сюрприз";
//
// function f() {
//     var value = Math.random();
//
//     function g() {
//         debugger; // выполните в консоли alert( value ); Нет такой переменной!
//     }
//
//     return g;
// }
//
// var g = f();
// g();
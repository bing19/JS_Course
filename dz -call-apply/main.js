// var calculator = {
//     num1: '',
//     num2: '',
//
//     read: function() {
//         this.num1 = +prompt('Введите число 1', 0);
//         this.num2 = +prompt('Введите число 2', 0);
//     },
//
//     sum: function() {
//         return this.num1 + this.num2;
//     },
//
//     mul: function() {
//         return this.num1 *this.num2;
//     }
//
// };
//
// calculator.read();
// console.log( calculator.sum() );
// console.log( calculator.mul() );



// var ladder = {
//     step: 0,
//     up: function() { // вверх по лестнице
//         this.step++;
//         return this;
//     },
//     down: function() { // вниз по лестнице
//         this.step--;
//         return this;
//     },
//     showStep: function() { // вывести текущую ступеньку
//         console.log( this.step );
//     }
// };
//
// ladder.up().up().up().down().up().down().showStep();

// function sum(i) {
//     var resultSum = i;
//
//     function sum2(j) {
//         resultSum += j;
//         return sum2;    // Тут почти тот же принчип что и возвращение объекта через this???
//     }
//
//     sum2.valueOf = function() { // Почему функция обращается к данному методу?
//         return resultSum + ' сработал метод valueOf';
//     };
//     sum2.toString = function() { // Почему функция обращается к данному методу?
//         return resultSum + ' сработал метод toString';
//     };
//
//     return sum2;
// }
//
// console.log( sum('1')('2') );
// console.log( sum(1)(2)(5) );




// ГЕТТЕРЫ - СЕТТЕРЫ


// function User(fullName) {
//     this.fullName = fullName;
//
//     Object.defineProperties(this, {
//
//         firstName: {
//             get: function() {
//                 return splitName(fullName)[0];
//             },
//             set: function(value) {
//                 var buffer = splitName(fullName);
//                 buffer[0] = value;
//                 this.fullName = buffer.join(' ');
//             }
//
//         },
//
//         lastName: {
//             get: function() {
//                 return splitName(fullName)[1];
//             },
//             set: function(value) {
//                 var buffer = splitName(fullName);
//                 buffer[1] = value;
//                 this.fullName = buffer.join(' ');
//             }
//         }
//
//     });
//
//     function splitName(fullName) {
//         var result = fullName.split(' ');
//         return result;
//     }
// }



// function User(fullName) {
//     this.fullName = fullName;
//
//     Object.defineProperties(this, {
//
//         firstName: {
//             get: function() {
//                 return this.fullName.split(' ')[0];
//             },
//             set: function(value) {
//                 this.fullName = value + ' ' + this.lastName;
//             }
//
//         },
//
//         lastName: {
//             get: function() {
//                 return this.fullName.split(' ')[1];
//             },
//             set: function(value) {
//                 this.fullName = this.firstName + ' ' + value;
//             }
//         }
//
//     });
//
// }
//
//
//
// var vasya = new User("Василий Попкин");
//
// console.log( vasya.firstName );
// console.log( vasya.lastName );
// vasya.firstName = 'Леша';
// vasya.lastName = 'Сидоров';
// console.log( vasya.fullName );
//
// console.log(vasya);


// ФАБРИЧНЫЕ МЕТОДЫ


// function Article() {
//     this.created = new Date();
//
//     Article.count++;
//     Article.last = this.created;
//
//
// }
//
// Article.count = 0;
//
// Article.showStats = function() {
//   console.log('Всего ' + this.count +
//       ' дата создания последнего ' + this.last);
// };
//
// new Article();
// new Article();
//
// Article.showStats();
//
// new Article();
//
// Article.showStats();




// CALL, APPLY

// function sumArgs() {
//     var reduce = [].reduce;
//
//     var sum = reduce.call(arguments, function(a, b) { return a + b});
//
//     return sum;
// }
//
// alert( sumArgs(1, 2, 3) );


// function applyAll(func) {
//
//     return func.apply(this, [].splice.call(arguments, 1));
// }
//
// alert( applyAll(Math.max, 2, -2, 3) );
//
// function sum() { // суммирует аргументы: sum(1,2,3) = 6
//     return [].reduce.call(arguments, function(a, b) {
//         return a + b;
//     });
// }
//
// alert( applyAll(sum, 1, 2, 3) );


// BIND


// function f() {
//     console.log(arguments);
//     alert( this );
// }
//
// var user = {
//     g: f.bind("Hello")
// }
//
// user.g();


// function f() {
//     alert(this.name);
// }
//
// f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );
//
// f();


// function sayHi() {
//     alert( this.name );
// }
// sayHi.test = 5;
// alert( sayHi.test ); // 5
//
// var bound = sayHi.bind({
//     name: "Вася"
// });
//
// console.log(bound.test);


// "use strict";
//
// function ask(question, answer, ok, fail) {
//     var result = prompt(question, '');
//     if (result.toLowerCase() == answer.toLowerCase()) ok();
//     else fail();
// }
//
// var user = {
//     login: 'Василий',
//     password: '12345',
//
//     loginOk: function() {
//         alert( this.login + ' вошёл в сайт' );
//     },
//
//     loginFail: function() {
//         alert( this.login + ': ошибка входа' );
//     },
//
//     checkPassword: function() {
//         var self = this;
//         ask("Ваш пароль?", this.password, function() {self.loginOk()}, this.loginFail.bind(this));
//     }
// };
//
// user.checkPassword();
//
// var vasya = user;
// user = null;
// vasya.checkPassword();

//
// "use strict";
//
// function ask(question, answer, ok, fail) {
//     var result = prompt(question, '');
//     if (result.toLowerCase() == answer.toLowerCase()) ok();
//     else fail();
// }
//
// var user = {
//     login: 'Василий',
//     password: '12345',
//
//
//     // метод для вызова из ask
//     loginDone: function(result) {
//         alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
//     },
//
//     checkPassword: function() {
//         var self = this;
//         ask("Ваш пароль?", this.password,
//             function() {
//                 self.loginDone(true);
//             }, this.loginDone.bind(this, false)
//         );
//     }
// };
//
// var vasya = user;
// user = null;
// vasya.checkPassword();

// var data = '{ "age": 30 }'; // данные неполны
//
// try {
//
//     var user = JSON.parse(data); // <-- выполнится без ошибок
//
//     if (!user.name) {
//         throw new SyntaxError("Данные некорректны");
//     }
//
//     console.log( user.name );
//
// } catch (e) {
//     console.log( "Извините, в данных ошибка - " + e );
// }
// function getClass(obj) {
//     return {}.toString.call(obj).slice(8, -1);
// }
//
// var arrs = [1, 2];
// let objs = {};
// let func = function () {};
// console.log( getClass(arrs) );
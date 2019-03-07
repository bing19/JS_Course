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
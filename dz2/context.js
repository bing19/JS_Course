function c(a) {
    console.log(a);
}



// *********************************
// ДЗ ИЗ 06FunctionsES6HomeWork
// ********************************


// var obj = [
//     {name: 'CCC', age: 10},
//     {name: 'BBB', age: 30},
//     {name: 'AAA', age: 5}
// ];
//
//
// let sortPublic = (obj, nameParam, boolParam = true) => {
//     function sortAscending(paramA, paramB){
//         return (paramA[nameParam] < paramB[nameParam]) ? -1 : 1;
//     };
//
//     function sortDescending(paramA, paramB){
//         return (paramA[nameParam] > paramB[nameParam]) ? -1 : 1;
//     };
//
//     if(boolParam){
//         obj.sort(sortAscending);
//     }
//     else {
//         obj.sort(sortDescending);
//     }
//
// };
//
// sortPublic(obj, 'age');
// console.log(obj);


// function printNumbersInterval() {
//     var num = 1;
//     var timer = setInterval(function(){
//         c(num);
//         if(num == 20) clearInterval(timer);
//         num++
//     }, 100)
//
// }
//
// printNumbersInterval();

// function printNumbersInterval() {
//     var num = 1;
//     var timerId = setTimeout(function tick(){
//         console.log(num);
//         if(num != 20){
//             timerId = setTimeout(tick, 100);
//             num++;
//         }
//     }, 100)
// }
//
// printNumbersInterval();


// setTimeout(function() {
//     alert( i );
// }, 100);
//
// var i;
//
// function hardWork() {
//     // время выполнения этого кода >100 мс, сам код неважен
//     for (i = 0; i < 1e8; i++) hardWork[i % 2] = i;
// }
//
// hardWork();


// var i;
// var timer = setInterval(function() { // планируем setInterval каждые 10 мс
//     i++;
//     c(i);
// }, 10);
//
// setTimeout(function() { // через 50 мс - отмена setInterval
//     clearInterval(timer);
//     alert( i ); // (*)
// }, 50);
//
// // и запускаем тяжёлую функцию
// function f() {
//     // точное время выполнения не играет роли
//     // здесь оно заведомо больше 100 мс
//     for (i = 0; i < 1e8; i++) f[i % 2] = i;
// }
//
// f();


// // первый?
// setInterval(function() {
//     runner1.step();
// }, 15);
//
// // или второй?
// setTimeout(function go() {
//     runner2.step();
//     setTimeout(go, 15);
// }, 15);
//
// setTimeout(function() {
//     alert( runner1.steps );
//     alert( runner2.steps );
// }, 5000);

// function delay(f, ms) {
//
//     return function(arguments) {
//         return setTimeout(f.bind(this, arguments), ms);
//     };
// }

function delay(f, ms) {

    return function() {
        var me = this;
        var args = arguments;
        return setTimeout(function(){
            f.apply(me, args);
        }, ms);
    };
}

function f(x) {
    c( x );
}

var f1000 = delay(f, 1000);
f1000('test');

//
// a('Hello');
// d('Hello');

function a(b) {
    alert(b);
}

function d(c) {
    console.log(c);
}

// ## cube
//
// Напишите функцию `cube`, которая возвращает число в третьей степени:

// function cube (a, b) {
//
//     if(b != 1) {
//
//         return (a * cube(a, b-1));
//
//     } else ;
//
//     return a;
//
// }
//
// function cube2(a) {
//
//     var count = 3;
//     var result = 1;
//
//     while (count) {
//         result *= a;
//         count--;
//     }
//
//     console.log(result);
// }
//
// cube2(4);

// d( cube(4, 3) );


// ## avg2
//
// Напишите функцию  `avg2`, которая рассчитывает среднюю для двух чисел:

// function avg(a, b) {
//
//     return (a + b) / 2;
// }
//
// d( avg(1, 2) );
// d( avg(10, 5) );



// ## sum3
//
// Напишите функцию `sum3` для суммирования 3 чисел:

function sum3(a, b, c) {
    c = c || 0;
    return a + b + c;
}

d( sum3(1, 2, 3) );
d( sum3(5, 10) );
// Задание 1

// if("0") { alert ('Hello') }

// Задание 2

// let answer =  prompt ('Каково «официальное» название JavaScript?', '').toLowerCase();
// (answer === 'ecmascript') ? alert('Right') : alert ('Wrong! EcmaScript');

// Задание 3

// let num = +prompt ('Send a number', '');
// (num > 0) ? alert (1) : (num < 0) ? alert (-1) : alert(0);

// Задание 4

// let userLogin = prompt('Login', '');
// console.log(userLogin);
// if (userLogin === 'admin') {
//     let pass = prompt ('password', '');
//     if(pass === 'Black') {
//         alert ('Wellcome');
//     }
// } else if (userLogin == null || userLogin == '') {
//     alert('I dont now you');
// } else {
//     alert ('Login disallow');
// }

// Задание 5

// let result = (a + b < 4) ? 'Мало' : 'Много';
//
// let message;
//
// message = (login == 'Вася') ? 'Привет' :
//         (login == 'Директор') ? 'Здравствуйте' :
//             (login == '') ? 'Нет логина' : '';






// Цикл Рекурсией Асинхронно

// var f = function loop(start, end) {
//
//     setTimeout(function() {
//
//         console.log(start);
//
//         if (start === end) {
//             return;
//         }
//
//         loop(start+1, end);
//
//     }, 1000);
//
// };
//
// f(1, 10);





// Задания Объекты: перебор свойств

// function isEmpty(obj) {
//
//     if(Object.keys(obj).length) {
//         return true;
//     }
//
//     return false;
// }
//
// var schedule = {};
//
// alert( isEmpty(schedule) );
//
// schedule.name = 'John';
//
// alert( isEmpty(schedule) );



// "use strict";
//
// var salaries = {
//
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };
//
// function sum(obj) {
//
//     var sum = 0;
//
//     for (var key in obj) {
//         sum += obj[key];
//     }
//
//     return sum;
//
// }
//
// alert( sum(salaries) );



// "use strict";
//
// var salaries = {
//     "Вася": 100,
//     "Петя": 300,
//     "Даша": 250
// };
//
//
// function maxRevenu(obj) {
//
//     var numArr = [];
//
//     var max = 0;
//     var maxName = "";
//
//     for(var name in obj) {
//
//         if (max < obj[name]) {
//             max = obj[name];
//             maxName = name;
//         }
//
//         // numArr.push( obj[key] );
//     }
//
//     return maxName;
//     // console.log( Math.max.apply(null, numArr) );
//
// }
//
// alert ( maxRevenu(salaries) );


// var menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// multiplyNumeric(menu);

// function multiplyNumeric(obj) {
//
//     for (var key in obj) {
//
//         if ( isNumeric(obj[key]) ) {
//             obj[key] *= 2;
//         }
//     }
//
//     console.log(obj);
// }

// function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
// }



// var goods = ['Jacket', 'Shirt', 'Shoes', 'glasses'];
//
// var lastProduct = goods[goods.length-1];
//
// goods[goods.length] = 'bags';
//
// alert(goods);
// alert(lastProduct);


// var styles = ['Джаз', 'Блюз'];
//
// styles[styles.length] = 'Рок-н-Ролл';
//
// styles[styles.length-2] = 'Классика';
//
// alert( styles.shift() );
//
// var newArr = ['Рэп', 'Регги'];
//
// styles = newArr.concat(styles);
//
// console.log(styles);



// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
//
// var rand = Math.floor(Math.random() * (arr.length));
//
// alert( arr[rand] );


// var nums = [],
//     sum = 0;
//
// while (true) {
//
//     var num = prompt ('Введите число', '');
//
//     if(num === '' || num === null || isNaN(num)) {
//         break;
//     }
//
//     nums[nums.length] = +num;
// }
//
// for (var i = 0; i < nums.length; i++) {
//
//     sum += nums[i];
//
// }
// console.log(sum);


// arr = ["test", 2, 1.5, false];
//
// console.log( find(arr, 3) );
//
//
// function find(arr, value) {
//
//     var result;
//
//     for (var i = 0; i < arr.length; i++) {
//
//         if (arr[i] === value) {
//             return i;
//         }
//
//     }
//
//     return -1;
// }


// # Домашнее задание: Ассоциативные массивы

// ## 3 persons
// Сделать три ассоциативных массива `a`, `b`, `c`, в каждом из которых должны быть поля `name` и `surname`.


var a = {
    name: 'Sam',
    surname: 'Smith'
};

var b = {
    name: 'Phil',
    surname: 'Colins'
};

var c = {
    name: 'Robert',
    surname: 'Plant'
};

// ## different fields
// Добавьте некоторые другие поля (например `age`, `fathername`, `sex` (пол)) так,
// что бы набор полей отличался у разных объектов

a.sex = 'male';
b.age = 50;
c.fathername = 'Mike';

// ## fields check
// Проверьте наличие необязательных полей у каждого из этих массивов.
// Если поле найдено, выведите его с помощью `alert`. Проверку делайте по `typeof` или `in` в `if`.

// fieldCheck(b, 'age');
//
// function fieldCheck (obj, field) {
//
//     for( key in obj ) {
//         if(key == field) {
//
//             alert (obj[key]);
//
//             return true;
//         }
//
//     }
//
//     alert ('Поле не найдено');
// }

// ## array of persons
// Добавьте несколько ассоциативных массивов с персонами в *обычный* массив `persons`, например `a`,`b`,`c`.
// Так же добавьте персону *литерально* (`{...}`).
//     Получится обычный массив с элементами-ассоциативными массивами с персонами.

var persons = [];

persons[persons.length] = a;
persons[persons.length] = b;
persons[persons.length] = c;
persons[persons.length] = 'Wiliam';

// ## loop of persons
// Сделайте цикл, который выводит весь массив `persons` в форме объектов `console.log(persons[i])`

// for (var i = 0; i < persons.length; i++) {
//     if(typeof persons[i] == 'object')
//         console.log(persons[i]);
// }

// ## loop of fields loop of persons
// Сделайте цикл, который выводит весь массив `persons`, но только Имя и Фамилию каждой персоны.
// Используйте вложенный `for` для вывода полей персоны, и проверку на то, что ключ - имя или фамилия, а не что-то другое.

var keyFind = ['name', 'surname'];

// for (var i = 0; i < persons.length; i++) {
//
//     if (typeof persons[i] == 'object') {
//         console.log(Object.keys(persons[i]));
//         for(var key in persons[i]) {
//             if (keyFind.indexOf(key) !== -1) console.log (persons[i][key]);
//         }
//     }
//
// }

// ## loop of loop of keys
// Сделайте цикл, который выводит весь массив `persons`, но только Имя и Фамилию каждой персоны.
//     Используйте `Object.keys` и вложенный `for` для вывода полей персоны

// for (var i = 0; i < persons.length; i++) {
//
//     if (typeof persons[i] == 'object') {
//
//         var keys = Object.keys(persons[i]);
//
//         for (var j = 0; j < keys.length; j++) {
//
//             if (keyFind.indexOf(keys[j]) !== -1) console.log (persons[i][keys[j]]);
//         }
//     }
//
// }

// ## loop of loop with optional fields
// Сделайте цикл, который выводит весь массив `persons`, при этом проверяет наличие
// других полей (кроме `name` и `surname`), и выводит дополнительные сообщения с этими полями.
//     Первые два выводимых поля - `name` и `surname`

// for (var i = 0; i < persons.length; i++) {
//
//     var output = '';
//
//     if(typeof persons[i] == 'object') {
//
//         for (var key in persons[i]) {
//
//             if(keyFind.indexOf(key) !== -1) {
//                 output += key + ' - ' + persons[i][key] + '\n';
//
//             }
//
//         }
//         output += findMoreField(persons[i]);
//     }
//
//
//     console.log(output);
// }
//
// function findMoreField (obj) {
//
//     var field = '';
//     for (var key in obj) {
//         if(keyFind.indexOf(key) !== -1) continue;
//
//         field += key + ' - ' + obj[key] + '\n';
//     }
//
//     return field;
// }


// ## fullName
// Сделайте цикл, которых добавляет поле `fullName` в каждый объект, содержащий ФИО.
//     Учтите, что поле `fathername` не является обязательным.

// for (var i = 0; i < persons.length; i++) {
//
//     if(typeof persons[i] == 'object') {
//         persons[i].fullName = persons[i].name + ' ' + persons[i].surname;
//     }
// }
//
// console.log(persons);

// ## serialize
// Создайте `JSON`-строку из `persons`

// ## HTML
// Сделайте цикл, который выводит весь массив `persons`, в форме HTML-таблицы.
//     Имя и Фамилия - колонки.


// var html = '';
//
// for (var i = 0; i < persons.length; i++) {
//
//     if(typeof persons[i] == 'object') {
//
//         var keys = Object.keys(persons[i]);
//         var trStyle = ()
//
//         html += '<tr><td>Персона ' + (i+1) + '</td></tr><tr>';
//
//         for(var j = 0; j < keys.length; j++) {
//
//             if(keyFind.indexOf(keys[j]) !== -1) {
//
//                 html +='<td>' + persons[i][keys[j]] + '</td>';
//
//             }
//
//         }
//
//         html += '</tr>';
//
//
//     }
// }
//
//
// document.addEventListener("DOMContentLoaded", function(){
//     var table = document.querySelector('#table');
//
//     table.insertAdjacentHTML('beforeEnd', html);
//
// });



// Добавить класс в строку

// var obj = {
//     className: 'open menu'
// }
//
// console.log( addClass(obj, 'title') );
// console.log( addClass(obj, 'menu') );
// console.log( addClass(obj, 'me') );
//
// function addClass(obj, cls) {
//
//     var arr = obj.className.split(' ');
//
//     if(arr.indexOf(cls) === -1) {
//         arr[arr.length] = cls;
//     } else {
//         console.log('Такой класс уже есть - ' + cls);
//     }
//
//     return arr.join(' ');
// }

// Перевести текст вида border-left-width в borderLeftWidth

// camelize("background-color");
// camelize("list-style-image");
//
// function camelize(str) {
//
//     var arr = str.split('-');
//     var output = '';
//
//     for(var i = 0; i < arr.length; i++) {
//         if(i == 0) {
//             output += arr[i];
//         } else {
//             output += arr[i][0].toUpperCase() + arr[i].substring(1);
//         }
//
//     }
//
//     console.log(output);
// }

// var obj = {
//     className: 'open menu menu'
// }
//
// console.log( removeClass(obj, 'menu') );
//
// function removeClass(obj, cls) {
//
//     var arr = obj.className.split(' ');
//     var newArr = [];
//
//     arr.forEach(function(item, i, arr) {
//
//         if(arr[i] !== cls) {
//             newArr[newArr.length] = item;
//         }
//     });
//
//
//     return obj.className = newArr.join(' ');
//
// }

// var arr = [5, 3, 8, 1, 2];
//
// filterRangeInPlace(arr, 1, 4);
//
// console.log(arr);
//
// function filterRangeInPlace(arr, a, b) {
//
//     arr.forEach(function(item, i, arr) {
//
//         if(!(a <= arr[i] && b >= arr[i])) {
//             arr.splice(i, 1);
//             i--;
//         }
//
//     });
//
// }

// var arr = [5, 2, 1, -10, 8];
//
// console.log(arr.sort(sortArr));
//
// function sortArr (a, b) {
//
//     return (a < b) ? 1 : -1;
//
// }
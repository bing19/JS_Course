// var leader = {
//     name: "Василий Иванович",
//     age: 35
// };
//
// var json = JSON.stringify(leader);
// json = JSON.parse(json);
// console.log(json);


// Задача по JSON - Разобрать на уроке!!!!!!!!!!!!!!!

// var leader = {
//     name: "Василий Иванович"
//
// };
//
// //
// var soldier = {
//     name: "Петька"
// };
// //
// // // эти объекты ссылаются друг на друга!
// leader.soldier = soldier;
// leader.toJSON = function() {
//     var str = '';
//     for(key in this) {
//         if(key == 'leader') return undefined;
//         str += key + ':' + this[key] + ', ';
//     }
//     return str;
// }
// Object.defineProperty(leader, "toJSON", {enumerable: false});
// // soldier.leader = leader;
// //
// // var team = [leader, soldier];
// //
// // var newTeam = [];
//
// // team.forEach(function(item, i, arr){
// //     newTeam.push(JSON.stringify(item, function(key, value){
// //         if(i == 0 && key == 'leader') return undefined;
// //         if(i == 1 && key == 'soldier') return undefined;
// //         return value;
// //     }));
// // });
// //
// console.log(JSON.stringify(leader));




// function formatDate(date) {
//     var options = {
//         year: '2-digit',
//         month: 'numeric',
//         day: 'numeric',
//         timezone: 'UTC'
//     };
//
//     if (typeof date == 'string') {
//         return new Date(date).toLocaleString('ru', options);
//     }
//
//     if (typeof date == 'number') {
//         return new Date().toLocaleString('ru', options);
//     }
//
//     if(Array.isArray(date)) {
//         return new Date(date[0], date[1], date[2]).toLocaleString('ru', options);
//     }
//
//     if(date.getFullYear()) {
//         return date.toLocaleString('ru', options);
//     }
//
//
// }
//
// // console.log( formatDate('2011-8-02') );
// // console.log( formatDate([2014, 0, 1]) );
// console.log( formatDate(new Date(2014, 0, 1)) );




// let group = {
//     title: "Наш курс",
//     students: ["Вася", "Петя", "Даша"],
//
//     showList: function() {
//         this.students.forEach(
//             student => console.log(this.title + ': ' + student)
//         )
//     }
// }


// let group = {
//     title: "Наш курс",
//     students: ["Вася", "Петя", "Даша"],
//
//     showList: function() {
//         this.students.forEach(
//             function(item) {
//                 console.log(this.title + ': ' + item);
//             }.bind(this)
//         )
//     }
// };
//
// group.showList();




// let arr = ["1", {}, null, undefined, "500", 700];
//
// let newArr = arr.map(name => {
//     if(typeof name == 'string') name = +name;
//
//     return name;
// });
//
// console.log(newArr);




// let arr = ["0", 5, 3, "string", null, 2];
// let result = arr.reduce((previousValue, currentItem) => {
//
//     if(typeof currentItem != 'number') {
//         currentItem = 1;
//     }
//     if(typeof previousValue != 'number') {
//         previousValue = 1;
//     }
//     return previousValue * currentItem;
//
// });
//
// console.log(result);



// var phone = {
//     brand: "meizu",
//     model: "m2",
//     ram: 2,
//     color: "black",
// };
//
//
// function filter(obj, callback){
//     let arr = {};
//     for(key in obj) {
//         if(callback(key, obj[key])){
//             arr[key] = obj[key];
//         }
//     }
//     return arr;
// };
//
// let phone2 = filter(phone,(key,value) => key == "color" || value == 2);
// console.log(phone2);


// function map(obj, callback) {
//
//     let newObj = {};
//
//     for (key in obj) {
//
//         let result = callback(key, obj[key]);
//         let keyBuff = Object.keys(result)[0];
//
//         newObj[keyBuff] = result[keyBuff];
//     }
//
//     return newObj;
// }
//
//
// let arr = map({name: "Иван", age: 17}, function(key,value){
//     var result = {};
//     result[key+"_"] = value + "$";
//     return result;
// });
//
// console.log(arr);

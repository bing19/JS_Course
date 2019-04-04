function c(a) {
    console.log(a);
}

// function Person(name, surname, age, sex, salary, married) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.sex = sex;
//     this.salary = salary;
//     this.married = married;
// }
//
// let person = new Person('John', 'Smith', 20, 'male', 10000, true);
//
// c(person);


// function Person(name, surname, age, sex, salary, married) {
//
//     var name = name,
//         surname = surname,
//         age = age,
//         sex = sex;
//
//     this.getName = function() {
//         return name;
//     };
// }
//
// Person.prototype.isString = function (a) {
//         if(typeof a == 'string') {
//             return true;
//         }
//
//
// };
//
// Person.prototype.getName = function() {
//        return name;
// };

// Person.prototype.getSex = function() {
//         return sex;
// };
// Person.prototype.setName = function(b) {
//         if(isString(b)) {
//             name = b;
//             return name;
//         }
//         alert('Неверный тип данных ' + b);
//         return false;
// };
// Person.prototype.setFather = function(parent) {
//         if(parent.getSex() == 'male') {
//             this.father = parent;
//         } else {
//             this.mother = parent;
//         }
// Person.prototype.getFatherName = function() {
//
//     var parentName = this.father.getName();
//
//     if(sex == 'male') {
//         return parentName +'ovich';
//     }
//     return parentName +'ovna';
// };


// var son = new Person('John', 'Smith', 16, 'male');
// var father = new Person("Ivan", "Petrov", 50, "male", 100500, true);
// var dauther = new Person("Maria", "Petrova", 25, "female", 500, false);
//
// c(son.getName());
// son.setFather(father);
// dauther.setFather(father);
// c( son.getFatherName() );
// c( dauther.getFatherName() );
// c( son.father.getName() );




// ############# ЗАДАЧИ ИЗ ЛЕКЦИЙ ПО ООП ############

// function CoffeeMachine(power) {
//     this.waterAmount = 0;
//
//     var WATER_HEAT_CAPACITY = 4200;
//     var timerId;
//
//     var self = this;
//
//     function getBoilTime() {
//         return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//     }
//
//     function onReady() {
//         alert( 'Кофе готово!' );
//     }
//
//     this.run = function() {
//         timerId = setTimeout(onReady, getBoilTime());
//     };
//
//     this.stop = function() {
//         clearTimeout(timerId);
//     }
//
// }
//
// var coffeeMachine = new CoffeeMachine(50000);
// coffeeMachine.waterAmount = 200;
//
// coffeeMachine.run();
// coffeeMachine.stop();






// function CoffeeMachine(power, capacity) {
//     var waterAmount = 0;
//     var timerId;
//     var WATER_HEAT_CAPACITY = 4200;
//
//     Mashine.apply(this, arguments);
//
//     function getTimeToBoil() {
//         return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//     }
//
//     this.setWaterAmount = function(amount) {
//         if (amount < 0) {
//             throw new Error("Значение должно быть положительным");
//         }
//         if (amount > capacity) {
//             throw new Error("Нельзя залить больше, чем " + capacity);
//         }
//
//         waterAmount = amount;
//     };
//
//     var onReady = function () {
//         alert( 'Кофе готов!' );
//     }
//
//     this.run = function() {
//         if(!this._enabled) throw new Error("Кофеварка выключена");
//         timerId = setTimeout(function(){
//             timerId = null;
//             onReady();
//         }, getTimeToBoil());
//     };
//
//     this.addWater = function(amount) {
//         this.setWaterAmount(amount + waterAmount);
//
//     }
//     this.setOnReady = function (f) {
//         onReady = f;
//     }
//     this.getWaterAmount = function() {
//         return waterAmount;
//     }
//     this.isRunning = function() {
//         return (!timerId) ? false : true;
//     }
//
// }
//
// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.enable();
// coffeeMachine.run(); // ошибка, кофеварка выключена!







// function Machine(power) {
//     this._power = power;
//     this._enabled = false;
//
//     var self = this;
//
//     this.enable = function() {
//         self._enabled = true;
//     }
//
//     this.disable = function() {
//         self._enabled = false;
//     }
// }
//
// function Fridge(power) {
//     Machine.apply(this, arguments);
//
//     var food = [];
//
//     this.addFood = function() {
//         if (!this._enabled) throw new Error ('Холодильник выключен');
//         if(food.length + arguments.length > this._power / 100) {
//             throw new Error('Холодильник полн');
//         }
//         for (var i = 0; i < arguments.length; i++) {
//             food.push(arguments[i]);
//         }
//     };
//
//     this.getFood = function() {
//         return food.slice();
//     };
//     this.filterFood = function(func) {
//         return food.filter(func);
//     };
//     this.removeFood = function(item) {
//
//         var idx = food.indexOf(item);
//         if (idx != -1) food.splice(idx, 1);
//     }
//     var parentDisable = this.disable;
//     this.disable = function() {
//
//         if(food.length) throw new Error('Есть продукты, нельзя отключать');
//
//         parentDisable();
//
//
//     }
//
// }
//
// var fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood({
//     title: "котлета",
//     calories: 100
// });
// fridge.addFood({
//     title: "сок",
//     calories: 30
// });
// fridge.addFood({
//     title: "зелень",
//     calories: 10
// });
// fridge.addFood({
//     title: "варенье",
//     calories: 150
// });
//
// fridge.removeFood("rere"); // без эффекта
// c( fridge.getFood().length ); // 4
//
// var dietItems = fridge.filterFood(function(item) {
//     return item.calories < 50;
// });
//
// dietItems.forEach(function(item) {
//     c( item.title ); // сок, зелень
//     fridge.removeFood(item);
// });
// fridge.disable();
// c( fridge.getFood() );





// var animal = {
//     jumps: null
// };
// var rabbit = {
//     jumps: true
// };
//
// rabbit.__proto__ = animal;
//
// c( rabbit.jumps ); // ? (1)
//
// delete rabbit.jumps;
//
// c( rabbit.jumps ); // ? (2)
//
// delete animal.jumps;
//
// c( rabbit.jumps ); // ? (3)





// var animal = {
//     eat: function() {
//         this.full = true;
//     }
// };
//
// var rabbit = {
//     __proto__: animal
// };
//
// rabbit.eat();
// c(rabbit.full);





// var head = {
//     glasses: 1
// };
//
// var table = {
//     pen: 3,
//     __proto__ : head
// };
//
// var bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__ : table
// };
//
// var pockets = {
//     money: 2000,
//     __proto__ : bed
// };
// function Human() {
//     this.sex = 'male';
// }
// function Men() {
//     this.name = 'Jim';
// }
// // var human = new Human();
//
// Men.prototype = new Human;
//
// var men = new Men;
//
//
//
// for(var key in pockets) {
//     if(!pockets.hasOwnProperty(key)) continue;
//     c(key + ' --- ' + pockets[key]);
// }
//
// c(men);


// function Rabbit() {}
// Rabbit.prototype = {
//     eats: true
// };
//
// var rabbit = new Rabbit();
//
// delete Rabbit.prototype.eats;
//
// c( rabbit.eats );




// function Menu(options) {
//     options = Object.create(options);
//     options.width = 300;
//
//     this.getOptions = function() {
//         return options;
//     }
// }
//
// var options = {
//     width: 100,
//     height: 200
// };
//
// var menu = new Menu(options);
// c(options);
// c(menu.getOptions());



// function Rabbit(name) {
//     this.name = name;
// }
// Rabbit.prototype.sayHi = function() {
//     c( this.name );
// };
//
// var rabbit = new Rabbit("Rabbit");
//
//
// rabbit.sayHi();
// Rabbit.prototype.sayHi();
// Object.getPrototypeOf(rabbit).sayHi();
// rabbit.__proto__.sayHi();


// function f() {
//     c( "привет" );
// }
// Function.prototype.defer = function (time) {
//     setTimeout(this, time);
// };
//
// f.defer(3000); // выведет "привет" через 1 секунду





// function f(a, b) {
//     c( a + b );
// }

// Function.prototype.defer = function(time) {
//     function wait(a, b) {
//         setTimeout(f.bind(null, a, b), time);
//     }
//     return wait;
// }

// Function.prototype.defer = function(time) {
//     var me = this;
//     return function() {
//         var args = arguments;
//         setTimeout(function(){
//             f.apply(me, args);
//         }, time);
//     }
// };


// f.defer(2000)(1, 5);





// function CoffeeMachine(power) {
//     this._waterAmount = 0;
//     this._power = power;
// }
// CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;
//
// CoffeeMachine.prototype.getTimeToBoil = function () {
//     return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
// };
//
// CoffeeMachine.prototype.run = function() {
//     setTimeout(function() {
//         alert( 'Кофе готов!' );
//     }, this.getTimeToBoil());
// };
//
// CoffeeMachine.prototype.setWaterAmount = function(amount) {
//     this._waterAmount = amount;
// };
//
// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.setWaterAmount(50);
// coffeeMachine.run();


// function Hamster() {
//     this.food = [];
// }
//
// Hamster.prototype.found = function(something) {
//     this.food.push(something);
// };
//
// // Создаём двух хомяков и кормим первого
// var speedy = new Hamster();
// var lazy = new Hamster();
//
// speedy.found("яблоко");
// speedy.found("орех");
//
// alert( speedy.food.length ); // 2
// alert( lazy.food.length ); // 2 (!??)


// function Animal(name) {
//     this.name = name;
// }
//
// Animal.prototype.walk = function() {
//     alert( "ходит " + this.name );
// };
//
// function Rabbit(name) {
//     Animal.apply(this, arguments);
// }
//
// Rabbit.prototype = Object.create(Animal.prototype);
//
// Rabbit.prototype.walk = function() {
//     alert( "прыгает! и ходит: " + this.name );
// };
//
// var rabbit = new Rabbit('Pig');
// var rabbit2 = new Rabbit('Pig2');
// rabbit.walk();
// rabbit2.walk();





// function Clock(options) {
//     this._template = options.template;
// }
//
// Clock.prototype._render = function() {
//     var date = new Date();
//
//     var hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;
//
//     var min = date.getMinutes();
//     if (min < 10) min = '0' + min;
//
//     var sec = date.getSeconds();
//     if (sec < 10) sec = '0' + sec;
//
//     var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);
//
//     console.log(output);
// };
//
// Clock.prototype.stop = function() {
//     clearInterval(this._timer);
// };
//
// Clock.prototype.start = function() {
//     this._render();
//     var self = this;
//     this._timer = setInterval(function() {
//         self._render();
//     }, 1000);
// };
//
// function AdvancedClock(options) {
//     Clock.apply(this, arguments);
//
//     this._precision = options.precision || 1000;
// }
//
// AdvancedClock.prototype = Object.create(Clock.prototype);
// AdvancedClock.prototype.constructor = AdvancedClock;
//
// AdvancedClock.prototype.start = function() {
//     this._render();
//     var self = this;
//     this._timer = setInterval(function() {
//         self._render();
//     }, this._precision);
// };
//
//
// var clock = new AdvancedClock({template:'h:m:s', precision: 2000});
// clock.start();


function Animal() {}

function Rabbit() {}
Rabbit.prototype = Object.create(Animal.prototype);

var rabbit = new Rabbit();

alert( rabbit.constructor == Rabbit ); // что выведет?
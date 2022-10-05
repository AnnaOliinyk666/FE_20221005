// переменные

let box = 5;
console.log(box);
box = 3 + 2;
console.log(box);
box = 7 + 8;
console.log(box);
let string = "Hello worlld";
console.log(string);
let string1 = "Hello worlld";
console.log(string1);

let user = "john",
  age = 25,
  married = "yes";

const myBirthday = "18.04.1982"; //константа, изменить нельзя
console.log(myBirthday);

// 1) number для любых чисе: целочисленных и с плавающей точкой
const number1 = 55;
const number2 = 55.5;

let firstNumber = 50;
let secondNumber = 10;
let sum = firstNumber + secondNumber;

console.log(sum);

// 2) bigInt для целых чисел огромной длинны
// символ 'n' в конце означает, что это bigInt
const bigInt = 45452545244354354354445453454n;

// 3) string для строк. Строка может содержать ноль или больше символов.
// ''- длинна строки 0 символов
// 'abc' - длинна строки 3 символа
let str = "";
let str2 = "abc";

// 4) Boolean для true/false
let isLoginUser = false;
isLoginUser = true;

// 5) null для неизвестных значений - отдельный тип, имеющий одно значение null.

// 6) undefined для неприсвоенных значений - отдельный тип, имеющий одно значение undefined

// 7) symbol для уникальных идентификаторов

// 8) object для более сложных структур данных

// старый вариант той же переменной
var oldVar = 123;

// let sum = 2+2;
// let userName = 'Anna';
// называем переменные осмысленно

// оператор typeof
// позволяет увидеть нам какой тип данных сохранен в переменной
console.log(typeof sum);
console.log(typeof isLoginUser);

// конвертация типов
//1) строковая - происходит когда нам нужно что-то вывести.
// может быть вызвано с помощью

const pi = 3.14;
const piString = String(pi);
console.log(piString);

const isTrue = true;
const isTrueString = String(isTrue);
console.log(isTrue, isTrueString);

let hello = "Hello";
let world = "World";
console.log(hello + " " + world + "!");

//2) Численное - Происходит в математических операциях.
// Может быть вызванно с помощью Number(value)

const piString2 = "3.14";
const piNumber = Number(piString2);
console.log(piString2, piNumber);

//3) Логическое - происходит в логических операциях. Может быть вызвано с помощью

console.log(Boolean(""));

// Нужно обьявить 2 переменных админ и нейм

let admin;
let name2;
name2 = "john";
admin = name2;
console.log(admin);

let myPlanet;
let activeUser;

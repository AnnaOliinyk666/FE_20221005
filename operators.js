// операторы сравнения зезультат их выполнения булеан
console.log("1<2", 1 < 2);
//"==" "!=" "<" ">" "==="

// оператор присвоения '='

//условный оператор if else
let userA;
let inputAge = 18;
userA = inputAge;
if (userA === 18) {
  console.log("Wellcome, user. You winn");
} else if (userA > 18) {
  console.log("Wellcome");
} else {
  console.log("Sorry,user");
}

// Logic operators
// || - or
// && - and
// ! - not

// 	- У нас есть новый дом на 1000 квартир
// 	- 100 квартир купили в кредит
// 	- 100 квартир купили за наличные
// 	- 200 квартир арендовали
// 	- Оставшиеся квартиры стоят пустые

let house = 1000;
let kredit = 100;
let rent = 200;
let kesh = 100;
let houseBusy = kredit + rent + kesh;
let empty = house - houseBusy;

if (houseBusy < empty) {
  console.log("Free houses = " + empty);
} else {
  console.log("Busy houses = " + houseBusy);
}

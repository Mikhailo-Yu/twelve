// 1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const myArray = [1, 2,  'fr3', 4, "gt5", 6, true, 7, false, 43, 9, 55, undefined, 11, 14, 12, 13];
const myArray1 = [1, 'rgr', 2, 3];

function arithmeticAverage(array) {
    let sumAvarage = 0;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            count = count + 1;
            sumAvarage = sumAvarage + array[i];
            } 
    } return sumAvarage/count;
    
}
console.log(arithmeticAverage(myArray));
console.log(arithmeticAverage(myArray1));

// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

let firstNumber = prompt('Enter first number');
let secondNumber = prompt('Enter second number');
let mathematicalOperation = prompt('Enter Mathematical operation');

function doMath(x, znak, y) {
    let result;
   if (znak === '+') { 
    result = +x + +y;
   } else if (znak === '-') {
    result = x - y;
   } else if (znak === '*') {
    result = x * y;
   } else if (znak === '/') {
    result = x / y;
   } else if (znak === '%') {
    result = +x % +y;
   } else if (znak === '^') {
    result = x ** y;
   } return result;
}

let result = doMath(firstNumber, mathematicalOperation, secondNumber);
console.log(`Result your math operation ${firstNumber + mathematicalOperation + secondNumber} = ` + result);

// 3. Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function doMatrix(lengtBigArr, lengthLittleArr) {
    let bigArr = [];
   for (let i = 0; i < lengtBigArr; i++) {
    let littleArr = [];
    for (let j = 0; j < lengthLittleArr; j++) {
        littleArr.push(prompt(`Введіть елемент ${i + 1}-го масиву, номер елемента ${j + 1}`))
    } 
    bigArr.push(littleArr);
   } return bigArr;
}

let heightMatrix = prompt('Введіть кількість масивів які ви хочите створити(число):');
let lengthMatrix = prompt('Введіть кількість елементів вкладених масивів(число):');

let matrix = doMatrix(heightMatrix, lengthMatrix);

console.log('Ну такий собі масив, можна було і краще: ' + matrix);

// 4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

let userStr = prompt('Введіть вашу фразу');
let delateLtr = prompt('Введіть символи які ви хочите видалити');
function corrector(startString, corLetr) {
    let corStr = '';
    for (let i = 0; i <= startString.length; i++) {
        
        if (corLetr.search(startString.charAt(i)) == -1 ) {
            corStr = corStr + userStr.charAt(i);
        }
    } return corStr;
}

console.log('Ваша відкоригована фраза: ' + corrector(userStr, delateLtr));




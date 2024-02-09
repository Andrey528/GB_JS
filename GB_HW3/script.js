// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function calculateCube(num) {
  console.log(Math.pow(num, 3) + Math.pow(++num, 3));
}

const num = prompt('Введите число');
calculateCube(num);

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать функцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
function calculateSalary() {
  var input = prompt('Введите число:');
  var number = parseFloat(input);
  if (isNaN(number)) {
    console.log('Значение задано неверно');
  } else {
    var salary = number * 0.13;
    console.log('Размер заработной платы за вычетом налогов равен ' + salary);
  }
}

calculateSalary();

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

function findMaxNumber() {
  var input1 = prompt('Введите первое число:');
  var number1 = parseFloat(input1);
  var input2 = prompt('Введите второе число:');
  var number2 = parseFloat(input2);
  var input3 = prompt('Введите третье число:');
  var number3 = parseFloat(input3);

  var maxNumber = Math.max(number1, number2, number3);
  console.log('Максимальное значение: ' + maxNumber);
}

findMaxNumber();

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

function sum(a, b) {
  return a + b;
}

function difference(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return 0;
  } else {
    return a / b;
  }
}

console.log(sum(2, 6));
console.log(difference(8, 3));
console.log(multiply(4, 5));
console.log(divide(10, 2));
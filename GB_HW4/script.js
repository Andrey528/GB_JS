// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i <= 10; i++) {
  if (i === 0) {
    console.log(i + ' - это ноль');
  } else if (i % 2 === 0) {
    console.log(i + ' - четное число');
  } else {
    console.log(i + ' - нечетное число');
  }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const numbers = [1, 2, 3, 4, 5, 6, 7];
const newArray = numbers.slice(0, 3).concat(numbers.slice(5));
console.log(newArray);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const array = [];
for (let i = 0; i < 5; i++) {
  const number = Math.floor(Math.random() * 10);
  array.push(number);
}
console.log(array);

// 1. Сумма элементов массива
const sum = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log('Сумма элементов массива:', sum);

// 2. Минимальное число
const min = Math.min(...array);
console.log('Минимальное число:', min);

// 3. Проверка наличия числа 3
const includesThree = array.includes(3);
console.log('В массиве есть число 3:', includesThree);

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

for (let i = 1; i <= 20; i++) {
  console.log('x'.repeat(i));
}

const numbers = [1, 2, 3, 4, 5];

// forEach()
// Описание действия, которое должно происходить при каждой итерации элементов массива
numbers.forEach((e) => {
  console.log(e * 2);
});

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}

// for ... in (Итерация ключей object (массива или объекта))
for (const i in numbers) {
  console.log(i);
}

// for ... of (Итерация элементов object (массива или объекта))
for (const item of numbers) {
  console.log(item * 2);
}

// map() не меняет оригинал, возвращает копию с результатом
// Итерирует элементы и при каждой итерации возвращает новое значение итерируемого элемента
// const doubled = numbers.map(e => e * 2);

const doubled = numbers.map((e) => {
  if (e > 2) {
    return e * 2;
  }
  return e;
});

console.log(doubled);
console.log(numbers);

// reduce() не меняет оригинал, возвращает накопленный результат
// Итерирует элементы и при каждой итерации делает промежуточное действие и передаёт результат дальше
// В конце возвращает итоговый результат
// const sum = numbers.reduce((acc, item) => acc + item, 0);

const sum = numbers.reduce((acc, item) => {
  return acc + item;
}, 0);
console.log(sum);
console.log(numbers);

// 1. У вас есть массив температур в градусах Цельсия. Необходимо написать функцию, которая конвертирует
// эти температуры в градусы Фаренгейта и выводит их в новом массиве;

// (32 °F − 32) × 5/9 = 0 °C
    function convertToFahrenheit(arrCelsius) {
        return arrCelsius.map(e => 1.8 * e + 32)
    }

// 2. У вас есть массив чисел. Необходимо написать программу, которая удваивает каждое число и возвращает
// сумму всех положительных чисел после этого преобразования.

    function mathOperation(numbers) {
        // Готовое решение в одно действие с помощью метода reduce
        return numbers.reduce((acc, item) => item > 0 ? acc + item * 2 : acc, 0)

        // Получили промежуточный результат: массив элементов с удвоенным значением
        const doubled = numbers.map(e => e * 2);

        // сумма всех положительных чисел
        const sum = doubled.reduce((acc, item) => item > 0 ? acc + item : acc, 0);

        // наполнили массив только положительными числами
        // const positiveNumbers = [];
        // for (const num of doubled) {
        //     if (num > 0) {
        //         positiveNumbers.push(num);
        //     }
        // }

        // Получили промежуточный результат: массив элементов, подходящих по условию (больше 0)
        const positiveNumbers = doubled.filter(e => e > 0);

        // Итог, основанный на промежуточном значении в виде массива положительных и удвоенных чисел
        const sum1 = positiveNumbers.reduce((acc, item) => acc + item);

        // Готовое решение в три действия с помощью методов filter, map, reduce
        const sum2 = numbers.filter(e => e > 0).map(e => e * 2).reduce((acc, item) => acc + item);
    }

    console.log(mathOperation([10, 15, 8, 5, -1, 0, 24]));

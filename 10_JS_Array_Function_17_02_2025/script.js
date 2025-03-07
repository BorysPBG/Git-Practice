let x = 10;
let y = x;

y = 20;

console.log(x);
console.log(y);

// Поверхностная копия (пригодна только для чтения информации)
let array = [1, 2, 3];
let arrayCopy = array;

// Глубокая копия
let newArray = [...array];

// let newArray = [];
// for (let i = 0; i < array.length; i++) {
//     newArray[i] = array[i]
// }

console.log(typeof array); // object

arrayCopy[0] = 1000;

console.log(array);
console.log(arrayCopy);

console.log(multiply(3, 4));

// Регулярная функция
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 5));

// Стрелочная функция

// console.log(multiplyArrow1(5, 6));     ReferenceError

const multiplyArrow1 = (a, b) => a * b;

const multiplyArrow2 = (a, b) => {
  a += 10;
  b += 5;
  return a * b;
};

// const username = prompt('Enter your name'); // string || null
// console.log(username);

x = "     Beer or not to beer     ";
console.log(typeof x);

x = x.trim(); // удаляет лишние пробелы в начале и в конце строки
console.log(x);

let arr = x.split(" ");
console.log(arr);

let string = arr.join(", ");
console.log(string);

// HOMEWORK

const library = [
  {
    ISBN: "123456789",
    TITLE: "Harry Potter",
    AUTHOR: "J.K. Rowling",
    YEAR: "2000",
  },
];

// Пример вводимой в модальное окно информации
// 987654321;Крутой маршрут;Е.С. Гинзбург;1989

let modalData = prompt('Enter book data separate by ";"'); // string || null

function findIndexBook(isbn) {
  return library.findIndex((e) => isbn === e.ISBN);

  for (let i = 0; i < library.length; i++) {
    if (isbn === library[i].ISBN) {
      return i;
    }
  }
  return -1; // -1 - недопустимое значение для индекс (следовательно искомой книги в библиотеке нет)
}

function displayBookData(isbn) {
  const index = findIndexBook(isbn);
  if (index !== -1) {
    console.log(`
            ISBN искомой книги равен ${library[index].ISBN}
            TITLE искомой книги равен ${library[index].TITLE}
            AUTHOR искомой книги равен ${library[index].AUTHOR}
            YEAR издания искомой книги равен ${library[index].YEAR}
        `);
  }
}

function deleteBook(isbn) {
  const index = findIndexBook(isbn);
  if (index !== -1) {
    library.splice(index, 1);
  }
}

console.log(findIndexBook("123456789"));

while (modalData) {
//   const book = modalData.split(";");
  const [ISBN, TITLE, AUTHOR, YEAR] = modalData.split(";"); // Деструктуризация

  if (ISBN && TITLE && AUTHOR && YEAR) {
    if (findIndexBook(ISBN) === -1) {
      library.push({ ISBN, TITLE, AUTHOR, YEAR });
    } else {
      console.log(`Данная книга (ISBN: ${ISBN}) уже добавлена в библиотеку`);
    }
  } else {
    console.log("Проверьте вводимую информацию");
  }

  modalData = prompt('Enter book data separate by ";"');
}

console.log(library);

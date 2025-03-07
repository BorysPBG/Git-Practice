const bank = [];

const bankAccount = {
  accountNumber: "123456789",
  accountHolderName: "Alice",
  balance: 0,
  deposit(sum) {
    sum >= 5 && sum <= 10000
      ? (this.balance += sum)
      : alert("Вводимая сумма для пополнения некорректна");
  },
  withdraw(sum) {
    // Дебетовая карта
    sum <= this.balance && sum >= 5
      ? (this.balance -= sum)
      : alert("Вводимая сумма для списания некорректна");
  },
  checkBalance() {
    alert(`Баланс равен: ${this.balance}`);
  },
};

// 0. Получить ссылки на элементы, с которыми планируем работать (HTMLElement | null)
const nameInput = document.getElementById("name");
const accountsList = document.getElementById("accountsList");
const showSection = document.getElementById("show");
const withdrawBtn = document.getElementById("withdrawBtn");
const depositBtn = document.getElementById("depositBtn");

const date = new Date();
console.log(date.getTime());

console.log(1739965394101 / 1000 / 60 / 60 / 24 / 365.25);

function createAccount() {
  // 1. С помощью ссылки на input получаем значение, написанное в input
  if (nameInput.value.trim()) {
    // 2. Действие по изменению данных, хранимых в bank
    // 2.1 Получаем информацию об актуальной дате
    const date = new Date();
    // 2.2. На основании даты и введённого имени добавляем новый аккаунт в bank
    bank.push({
      // копируем и вставляем содержимое объекта bankAccount (оператор spread)
      ...bankAccount,
      // храним номер аккаунта в формате строки, так как не работаем с данным значением как с числом
      // в отличие от баланса
      accountNumber: date.getTime() + "",
      accountHolderName: nameInput.value.trim()
    });
    // 3. С помощью ссылки на input очищаем его
    nameInput.value = "";
    // HW
    // 4. Поиск аккаунта в bank по accountNumber
    // const existAccount = bank.find((e) => e.accountNumber === date.getTime() + '');
    const existAccount = bank[bank.length - 1];

    // 5. Создание элемента
    const li = document.createElement('li');
    // 6.1 Настройка элемента
    // Добавление каждому элементу списка id, равное accountNumber
    li.id = existAccount.accountNumber;
    li.classList.add('list-group-item', 'mb-3', 'border', 'text-center');
    // li.class = 'list-group-item mb-3 border text-center'
    // 6.2 Настройка элемента
    function deleteAccount(accountNumber) {
        const existIndex = bank.findIndex((e) => e.accountNumber === accountNumber);
        if (existIndex >= 0) {
            bank.splice(existIndex, 1);
        }
    }
    li.innerHTML = `
        <h1 class="blockquote">Account number: ${existAccount.accountNumber}</h1>
        <h2 class="blockquote">Account Holder Name: ${existAccount.accountHolderName}</h2>
        <p class="blockquote">Balance: ${existAccount.balance}</p>
        <button class="btn btn-danger" onclick="deleteAccount(${existAccount.accountNumber})">Delete</button>
    `;
    showSection.style.display = 'block';
    // 7. Добавление элемента на страницу
    accountsList.appendChild(li);
    butt
    // accountsList.innerHTML = '';
    // for (let i = 0; i < bank.length; i++) {
    //   const li = document.createElement("li");
    //   li.innerHTML = `
    //         <h1>Account number: ${bank[i].accountNumber}</h1>
    //         <h2>Account Holder Name: ${bank[i].accountHolderName}</h2>
    //         <p>Balance: ${bank[i].balance}</p>
    //     `;
    //   accountsList.appendChild(li);
    // }
  }
}

// Функция, которая отработает при нажатии на кнопку удалить
function deleteAccount(accountNumber) {
    // console.log(accountNumber);
    // Поиск index удаляемого аккаунта в bank
    const existIndex = bank.findIndex((e) => e.accountNumber === accountNumber);
    // Если удаляемый аккаунт найден
    if (existIndex >= 0) {
      // Удаляем аккаунт из bank
      bank.splice(existIndex, 1);
      // Находим элемент списка, где отображалась информация об удаляемом аккаунте
      const li = document.getElementById(accountNumber);
      // Удаление данного элемента списка (со всем содержимым)
      accountsList.removeChild(li);
      // Если bank пустой, то
      if (!bank.length) {
        // секция show становится невидимой (со всем содержимым)
        showSection.style.display = 'none';
      }
    }
  }

const accountId = document.getElementById('accountId');
const amount = document.getElementById('amount');

function accountAction(action) {
  const id = accountId.value.trim();
  // Number (в том числе NaN)
  const sum = +amount.value.trim(); // Number()  parseInt() / parseFloat() eval('10*10+5')

  // return: element | undefined
  const existAccount = bank.find((element) => id === element.accountNumber);

  if (existAccount && sum > 0) {
    action ? existAccount.deposit(sum) : existAccount.withdraw(sum);
    existAccount.checkBalance();
    // Получение ссылки на элемент списка, где записана информация о данном аккаунте
    const li = document.getElementById(existAccount.accountNumber);
    // Замена вложенного html для данного элемента
    li.innerHTML = `
        <h1 class="blockquote">Account number: ${existAccount.accountNumber}</h1>
        <h2 class="blockquote">Account Holder Name: ${existAccount.accountHolderName}</h2>
        <p class="blockquote">Balance: ${existAccount.balance}</p>
    `;
  }

  accountId.value = amount.value = '';

}

// DRY - Don't repeat yourself
// CRUD - Create Read Update Delete
depositBtn.onclick = function () {
  accountAction(true);
    // TODO
    // 1. Считать информацию из input (accountId, amount)
    // 2. Найти аккаунт по введённому Id в bank
    // 3. Совершить соответствующую операцию (deposit) с банковским аккаунтом
 
    // isNaN()
    // 4. Изменить список, отображаемый на странице
}

withdrawBtn.onclick = function () {
  accountAction(false);
    // TODO
    // 1. Считать информацию из input (accountId, amount)
    // 2. Найти аккаунт по введённому Id в bank
    // 3. Совершить соответствующую операцию (withdraw) с банковским аккаунтом

    // 4. Изменить список, отображаемый на странице
}


// HOMEWORK

// Необходимо добавить в элемент списка кнопку, нажатие на которую:

// 1. Обновляет информацию в bank;

// 2. Удаляет соответствующий элемент из списка в html (Метод removeChild() у списка)

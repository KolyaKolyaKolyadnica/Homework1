/* *** Task 1 *** */
// Объявить и присвоить валидные значение двум константным переменным (productName (строка) и pricePerItem (число))
// Вывести их имена и значения в консоль
{
  // Пиши код ниже этой строки
  const productName = 'string ';
  const pricePerItem = 69;
  console.log('Task 1: '+productName+pricePerItem);
  //
}

/* *** Task 2 *** */
// Объявить и присвоить валидные значение двум let переменным (productName (строка) и pricePerItem (число))
// Переприсвоить их значения. Вывести в консоль.
{
  // Пиши код ниже этой строки
  let productName = 'string ';
  let pricePerItem = 69;
  productName = 'new string ';
  pricePerItem = 101;
  console.log('Task 2: '+productName+pricePerItem );
  //
}

/* *** Task 3 *** */
// Вместо undefined присвоить валидные значения let переменным (тип переменной указан в комментарии)
{
  // Пиши код ниже этой строки
  let topSpeed = 101; // Number integer
  let distance = 10.1; // Number float
  let login = 'undefined'; // String
  let isOnline = true; // Boolean
  console.log('Task 3: ', topSpeed, distance, login, isOnline);
  //
}

/* *** Task 4 *** */
// Записать в переменную total результат умножения pricePerItem и orderedQuantity
{
  const pricePerItem = 3500;
  const orderedQuantity = 4;
  // Пиши код ниже этой строки
  let result = pricePerItem * orderedQuantity;
  console.log('Task 4: '+result);
  //
}

/* *** Task 5 *** */
// При помощи синтаксиса шаблонной строки `${}` и данных переменных вывести в консоль следующую строку
// 'Вы выбрали Дрон, цена за штуку 3500 кредитов'
{
  const productName = 'Дрон';
  const pricePerItem = 3500;
  // Пиши код ниже этой строки

  console.log('Task 5: '+`Вы выбрали ${productName}, цена за штуку ${pricePerItem} кредитов`);
  //
}

/* *** Task 6 *** */
// Рассчитать totalPrice с учетом стоимости доставки deliveryFee.
// При помощи синтаксиса шаблонной строки `${}` и переменных отредактировать message (вставить данные вместо ...)
{
  const orderedQuantity = 6;
  const pricePerDrone = 800;
  const deliveryFee = 50;
  // Пиши код ниже этой строки
  const totalPrice = orderedQuantity * pricePerDrone + deliveryFee;
  const message = `Вы заказали ${orderedQuantity} дронов на сумму ${pricePerDrone} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;
  //
  console.log('Task 6: ', message);  
  console.log('Task 6: ', 'totalPrice = ', totalPrice);
  //
}

/* *** Task 7 *** */
// Создать и вызвать функцию sayHi, которая выводит в консоль текст "Привет, это моя первая функция!".
// Функция ничего не возвращает.
{
  // Пиши код ниже этой строки
  const sayHi = function () {
    console.log('Task 7: ' + 'Привет, это моя первая функция!');
  };
  sayHi();
  //
}


/* *** Task 8 *** */
// Отредактировать функцию add так, чтобы она принимала 3 параметра (a, b, c).
// При помощи шаблонной строки ${} выводить результат сложения всех 3 аргументов функции вместо ...
// Функция ничего не возвращает.
{
  // Пиши код ниже этой строки
  function add(a, b, c) {
    let sum = a + b + c;
    console.log('Task 8: ', `Результат сложения равен ${sum}`);
    // Пиши код выше этой строки
  }

  add(15, 27, 10);
  add(10, 20, 30);
  add(5, 10, 15);
}

/* *** Task 9 *** */
// Отредактировать функцию makeMessage.
// Функция должна возвращать message.
{
  function makeMessage(name, price) {
    // Пиши код ниже этой строки
    const message = `Вы выбрали ${name}, цена за штуку ${price} кредитов`;
    return message;
    // Пиши код выше этой строки
  }

  console.log('Task 9: ', makeMessage('Пельмени', 5));
  console.log('Task 9: ', makeMessage('Кулемет', 255));
  console.log('Task 9: ', makeMessage('Тесла', 2280));
}

/* *** Task 10 *** */
// Отредактировать функцию calculateTotalPrice, чтобы в ней была объявлена и инициализирована переменная totalPrice.
// Функция должна возвращать totalPrice.
{
  function calculateTotalPrice(orderedQuantity, pricePerItem) {
    // Пиши код ниже этой строки
    let totalPrice = orderedQuantity * pricePerItem;
    // Пиши код выше этой строки
    return totalPrice;
  }

  console.log('Task 10: ', calculateTotalPrice(2, 5));
  console.log('Task 10: ', calculateTotalPrice(11, 255));
  console.log('Task 10: ', calculateTotalPrice(3, 2000));
}

/* *** Task 11 *** */
// Отредактировать функцию makeOrderMessage.
// При помощи синтаксиса шаблонной строки `${}` и переменных отредактировать message (вставить вычисления вместо ...)
// Функция должна возвращать message.
{
  function makeOrderMessage(orderedQuantity, pricePerDrone, deliveryFee) {
    // Пиши код ниже этой строки
    const message = `Вы заказали ${orderedQuantity} дронов на сумму ${pricePerDrone} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;
    return message;
    // Пиши код выше этой строки
  }

  console.log('Task 11: ', makeOrderMessage(2, 5, 30));
  console.log('Task 11: ', makeOrderMessage(11, 255, 11));
  console.log('Task 11: ', makeOrderMessage(3, 2000, 3));
}

/* *** Task 12 *** */
// Отредактировать функцию isAdult при помощи операторов сравнения так,
// чтобы при age большем или равно 18 переменной passed присваивалось значение true.
// Функция должна возвращать passed.
{
  function isAdult(age) {
    // Пиши код ниже этой строки
    let passed

    if (age >= 18) {      
      passed = true;
    } else {
      passed = false;
    };
    // Пиши код выше этой строки
    return passed;
  };

  console.log('Task 12: ', isAdult(14));
  console.log('Task 12: ', isAdult(25));
}


// ============CodeWars==============

{
  
  const arr = [9991, 2, -100, 0.5];
  // const arr = [];

  function sum (numbers) {
    "use strict";
    let result = 0;
      if (numbers.length > 0){
        for (let i = 0; i < numbers.length; i += 1){
          result += numbers[i];
        };
      };
    console.log(result);
  };
  
  // sum(arr);
}

{
  // const arr = [6, 2, 1, 8, 10];
  // const arr = [1, 3, 3];
  // const arr = [];
  // const arr = null;
  // const arr = NaN;
  const arr = undefined;

  if (arr !== undefined) {
    console.log('dasda')
  }

  function sumArray(array) { 
    let result = 0;
    if (array !== null && array !== NaN && array !== undefined && array.length > 1) {
      for (let i = 0; i < array.length; i += 1) {
        result += array[i];
      };
      result = result - Math.min(...array) - Math.max(...array);            
    };
    console.log(result);
  };
  
  sumArray(arr);
  // console.log(Math.min(...arr));
  // console.log(Math.max(...arr));
}
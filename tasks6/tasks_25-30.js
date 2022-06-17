/* *** Task 25 *** */
// Реализуйте функцию sortByDescendingFriendCount используя метод массива sort.
// Функция сортирует users по количеству друзей в порядке убывания

{
  const users = [
    { name: 'Ivan Best', friends: ['Vasya', 'Taras', 'Ilya', 'Kolya', 'Oleg'] },
    { name: 'Thimothy First', friends: ['Sergey', 'Lena', 'Ira'] },
    { name: 'Mango Tasty', friends: ['Zina', 'Kristina', 'Dima', 'Sasha'] },
    { name: 'Dan Balan', friends: ['Igor', 'Vova'] },
  ];
  // Пиши код ниже этой строки

  const sortByDescendingFriendCount = (arr) => {
    // Решил передавать users как аргумент
    return arr.sort((a, b) => b.friends.length - a.friends.length);
  };

  console.log('Task 25: ', sortByDescendingFriendCount(users));
}

/* *** Task 26 *** */
// Реализуйте функцию sortByAscendingTotalOrders.
// Функция сортирует users по сумме всех заказов в порядке возрастания
// Используйте reduce!

{
  const users = [
    { name: 'Манго', orders: [120, 100, 50, 30] },
    { name: 'Поли', orders: [50, 70, 110, 20] },
    { name: 'Аякс', orders: [70, 130, 200, 80] },
    { name: 'Киви', orders: [30, 20, 40] },
  ];
  // Пиши код ниже этой строки

  console.log(users[0].orders.length);
  const sortByAscendingTotalOrders = (arr) => {
    // Решил передавать users как аргумент
    return arr.sort(
      (a, b) =>
        b.orders.reduce((acc, next) => acc + next, 0) -
        a.orders.reduce((acc, next) => acc + next, 0)
    );
  };

  console.log('Task 26: ', sortByAscendingTotalOrders(users));
}

/* *** Task 27 *** */
// Запишите в переменную names массив авторов книг с рейтингом выше MIN_BOOK_RATING. Авторы должны быть отсортированны в алфавитном порядке.

{
  const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      rating: 7.38,
    },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Заповіт', author: 'Тарас Шевченко', rating: 8.25 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.14 },
    { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 },
  ];
  const MIN_BOOK_RATING = 8;
  // Пиши код ниже этой строки

  const names = books
    .filter((book) => book.rating > MIN_BOOK_RATING)
    .map((book) => book.author)
    .sort();

  console.log('Task 27: ', names);
}

/* *** Task 28 *** */
// Реализуйте функцию getNamesSortedByFriendCount, которая выводит массив имен пользователей
// отсортированный по количеству друзей в порядке убывания.

{
  const users = [
    { name: 'Ivan Best', friends: ['Vasya', 'Taras', 'Ilya', 'Kolya', 'Oleg'] },
    { name: 'Thimothy First', friends: ['Sergey', 'Lena', 'Ira'] },
    { name: 'Mango Tasty', friends: ['Zina', 'Kristina', 'Dima', 'Sasha'] },
    { name: 'Dan Balan', friends: ['Igor', 'Vova'] },
  ];
  // Пиши код ниже этой строки

  const getNamesSortedByFriendCount = (arr) => {
    // return arr.map((user) => user.friends).sort((a, b) => b.length - a.length);
    return [...arr]
      .sort((a, b) => b.friends.length - a.friends.length)
      .map((user) => user.name);
  };

  console.log('Task 28: ', getNamesSortedByFriendCount(users));
}

/* *** Task 29 *** */
// Реализуйте функцию getAverageAgeByGender, которая принимает пол в качестве параметра
// и возвращает среднеарифметическое значение возраста пользователей с указанным полом.
// Округлите результат до ближайшего целого числа
// Используйте reduce!
{
  const users = [
    { name: 'Ivan Best', age: 35, gender: 'male' },
    { name: 'Thimothy First', age: 20, gender: 'male' },
    { name: 'Mango Tasty', age: 16, gender: 'female' },
    { name: 'Dan Balan', age: 18, gender: 'male' },
    { name: 'Poly Third', age: 31, gender: 'female' },
    { name: 'Lena Forest', age: 26, gender: 'female' },
    { name: 'Cucumber Green', age: 42, gender: 'male' },
    { name: 'Ann Last', age: 14, gender: 'female' },
  ];
  // Пиши код ниже этой строки

  // Пиши код ниже этой строки
  const getAverageAgeByGender = (arr, sex) => {
    const fliteredArr = arr.filter((book) => book.gender === sex);

    return fliteredArr.reduce(
      (acc, item, index, array) =>
        index === array.length - 1
          ? Math.round((acc + item.age) / fliteredArr.length)
          : acc + item.age,
      0
    );
  };
  // Пиши код выше этой строки

  console.log('Task 29: ', getAverageAgeByGender(users, 'female')); // 22
  console.log('Task 29: ', getAverageAgeByGender(users, 'male')); // 29
}

/* *** Task 30 *** */
// Реализуйте функцию getTransactionsSummary, которая
// считает результирующее значение всех транзакций.
// Причем калькуляция идет по принципу: если транзакция income то +,
// если expense то -.
// Также эта функция должна находить maxIncome & maxExpense, то есть максимальный доход и максимальный расход.
// Используйте reduce!!!
// Функция должна вернуть объект с полями total, maxIncome, maxExpense
{
  const transactions = [
    { id: 1, type: 'income', amount: 2000 },
    { id: 2, type: 'expense', amount: 1500 },
    { id: 3, type: 'expense', amount: 1200 },
    { id: 4, type: 'expense', amount: 700 },
    { id: 5, type: 'income', amount: 2400 },
    { id: 6, type: 'expense', amount: 400 },
    { id: 7, type: 'income', amount: 1000 },
    { id: 8, type: 'expense', amount: 1700 },
    { id: 9, type: 'expense', amount: 200 },
    { id: 10, type: 'income', amount: 1900 },
  ];
  // Пиши код ниже этой строки

  // Пиши код ниже этой строки

  const getTransactionsSummary = (transactions) => {
    return transactions.reduce(
      (acc, item, index, array) => {
        if (item.type === 'income') {
          acc.total += item.amount;
          if (acc.maxIncome < item.amount) {
            acc.maxIncome = item.amount;
          }
          return acc;
        }
        if (item.type === 'expense') {
          acc.total -= item.amount;
          if (acc.maxExpense < item.amount) {
            acc.maxExpense = item.amount;
          }
          return acc;
        }
      },
      { total: 0, maxIncome: 0, maxExpense: 0 }
    );
  };

  /*
  const getTransactionsSummary = (transactions) => {
    const sumIncome = transactions
      .filter((transaction) => transaction.type === 'income')
      .reduce((acc, next) => acc + next.amount, 0);

    const sumExpense = transactions
      .filter((transaction) => transaction.type === 'expense')
      .reduce((acc, next) => acc + next.amount, 0);

    const total = sumIncome - sumExpense;

    console.log('sumIncome ', sumIncome);
    console.log('sumExpense ', sumExpense);
    console.log('total ', total);

    let maxIncome = 0;
    transactions.forEach((transaction) => {
      if (transaction.type === 'income' && transaction.amount > maxIncome) {
        maxIncome = transaction.amount;
      }
    });

    let maxExpense = 0;
    transactions.forEach((transaction) => {
      if (transaction.type === 'expense' && transaction.amount > maxExpense) {
        maxExpense = transaction.amount;
      }
    });

    return {
      total,
      maxIncome,
      maxExpense,
    };
  };
  */
  // Пиши код выше этой строки

  console.log('Task 30: ', getTransactionsSummary(transactions)); // { total: 1600, maxIncome: 2400, maxExpense: 1700 }
}

/* CoseWars */

// {
//   function nbYear(p0, percent, aug, p) {
//     let years = 0;
//     while (p0 < p) {
//       years += 1;
//       p0 = p0 + (p0 * percent) / 100 + aug;
//     }
//     return years;
//   }

//   console.log(nbYear(1500, 5, 100, 5000));
//   console.log(nbYear(1500000, 2.5, 10000, 2000000));
//   console.log(nbYear(1500000, 0.25, 1000, 2000000));
// }
// {
//   function grow(x) {
//     return x.reduce((acc, next) => acc * next);
//   }
//   // grow([4, 1, 1, 1, 4]);
//   console.log(grow([4, 1, 1, 1, 4]));
// }
// {
//   function oddOrEven(array) {
//     return array.length === 0
//       ? 'even'
//       : array.reduce((acc, cur) => acc + cur) % 2 === 0 || array.length === 0
//       ? 'even'
//       : 'odd';
//   }
//   console.log(oddOrEven([]));
// }

/* *** Task 1 *** */
// При помощи forEach посчитать сумму заказов в массиве orderedItems.
// !!! ВНИМАНИЕ БЛЕТ !!!
// !!! Добавьте проверку для orderedItems (массив ли это?)
// !!! Добавьте проверку для каждого элемента (число?)
{
  function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Пиши код ниже этой строки
    if (Array.isArray(orderedItems)) {
      orderedItems.forEach((element) => {
        Number.isFinite(element)
          ? (totalPrice += element)
          : console.log('some error message');
      });
    }
    if (totalPrice === 0) {
      return 'some error message';
    }
    // Пиши код выше этой строки
    return totalPrice;
  }
  console.log('Task 1: ', calculateTotalPrice([22, 80, 40, 35, 2])); // return 179
  console.log('Task 1: ', calculateTotalPrice([undefined, 80, null, 35, 'a'])); // return 115 and console some error message
  console.log(
    'Task 1: ',
    calculateTotalPrice('It`s a f**king string, not array!')
  ); // return some error message
  console.log('Task 1: ', calculateTotalPrice(null)); // return some error message

  //
}

/* *** Task 2 *** */
// Используя forEach записать в filteredNumbers только те значения, которые больше value
{
  function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки
    if (Array.isArray(numbers) && Number.isFinite(value)) {
      numbers.forEach((number) => {
        if (number > value) {
          filteredNumbers.push(number);
        }
      });
    }

    // Пиши код выше этой строки
    return filteredNumbers;
  }
  console.log('Task 2: ', filterArray([22, 80, 40, 35, 2], 36)); // [80, 40]
}

/* *** Task 3 *** */
// Используя forEach записать в новый массив commonElements общие элементы двух переданных массивов.
{
  // Пиши код ниже этой строки
  function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки

    // Проверка на массив
    if (Array.isArray(firstArray) && Array.isArray(secondArray)) {
      // Проверка, является ли элемент числом
      if (
        firstArray.every((element) => Number.isFinite(element)) &&
        secondArray.every((element) => Number.isFinite(element))
      ) {
        firstArray.forEach((firstArrayElement) => {
          if (
            secondArray.some(
              (secondArrayElement) => secondArrayElement === firstArrayElement
            )
          ) {
            commonElements.push(firstArrayElement);
          }
        });
      }
    }
    // Пиши код выше этой строки
    return commonElements;
  }
  console.log(
    'Task 3: ',
    getCommonElements(
      [1, 2, 3, 22, 30, 50, 72, 80],
      [2, 4, 11, 30, 42, 51, 74, 80]
    )
  ); // [2, 30, 80]
  //
}

/* *** Task 4 *** */
// Реализуйте функцию extractAndCalculateNumbers, которая извлекает из строки с целыми числами и словами ЧИСЛА,
// считает и возвращает их общую сумму. extractAndCalculateNumbers - это функциональное выражение с синтаксисом стрелочной функции.
{
  // Пиши код ниже этой строки
  const extractAndCalculateNumbers = (string) => {
    let sumNumbers = 0;
    string.split(' ').forEach((element) => {
      if (Number(element)) {
        sumNumbers += Number(element);
      }
    });
    return sumNumbers;
  };

  // Пиши код выше этой строки
  console.log(
    'Task 4: ',
    extractAndCalculateNumbers('10 eggs, 7 apples, 3 potatoes, 5 peaches')
  ); // 22 -> 10+7+3+5=25 -> 22 !== 25
  console.log(
    'Task 4: ',
    extractAndCalculateNumbers(
      '- 1 latte; - 2 black tea; - 5 green tea; - 5 beers'
    )
  ); // 13
  //
}

/* *** Task 5 *** */
// Реализуйте функцию getWordsWithSelectedLength, которая извлекает из строки слова, длина которых равна переданному значению,
// !!! Обязательно используем метод массива filter.
// getWordsWithSelectedLength - это функциональное выражение с синтаксисом стрелочной функции.
{
  // Пиши код ниже этой строки
  const getWordsWithSelectedLength = (string, letters) => {
    if (typeof string === 'string' && typeof letters === 'number') {
      return string.split(' ').filter((word) => word.length === letters);
    }
  };

  // Пиши код выше этой строки
  console.log(
    'Task 5: ',
    getWordsWithSelectedLength('This pig is really big', 3)
  ); // ['pig', 'big']
  console.log(
    'Task 5: ',
    getWordsWithSelectedLength('Four seasons, one life, last resort', 4)
  ); //  ['Four', 'life', 'last']
  //
}

/* *** Task 6 *** */
// Реализуйте функцию changeEven, которая принимает массив чисел numbers и значение value.
// Используя метод map и тернарный оператор, функция проверяет каждый элемент, и если элемент - это четное число, то прибавляет к нему value,
// если нечетное, оставляет его как есть.
// changeEven - это функциональное выражение с синтаксисом стрелочной функции.
// !!! Записать функцию нужно максимально коротко !!!
{
  // Пиши код ниже этой строки
  const changeEven = (numbers, value) => {
    if (Array.isArray(numbers) && typeof value === 'number') {
      return numbers.map((element) =>
        element % 2 === 0 ? element + value : element
      );
    }
  };

  // Пиши код выше этой строки

  console.log('Task 6: ', changeEven([1, 2, 3, 4, 5], 3)); // [1,5,3,7,5]
  console.log('Task 6: ', changeEven([12, 13, 15, 17, 18], 10)); // [22,13,15,17,28]
  //
}

/* *** Task 7 *** */
// Запишите все заглавия книг в массив titles.
// Используем map
{
  const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      rating: 8.38,
    },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Заповіт', author: 'Тарас Шевченко', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
  ];
  // Пиши код ниже этой строки
  const titles = books.map((obj) => obj.title);
  // Пиши код ниже этой строки
  console.log('Task 7: ', titles);
  //
}

/* *** Task 8 *** */
// Запишите инициалы (первые буквы имени и фамилии) авторов книг в массив authorsInitials.
// Используем map
{
  const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      rating: 8.38,
    },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Заповіт', author: 'Тарас Шевченко', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
  ];
  // Пиши код ниже этой строки

  const authorsInitials = books.map((obj) =>
    obj.author
      .split('')
      .filter((letter) => letter === letter.toUpperCase() && letter !== ' ')
      .join('')
  );
  // Пиши код выше этой строки
  console.log('Task 8: ', authorsInitials); // ['БК', "РШ", "ТШ", "ЛТ", "БК"]
}

/* *** Task 9 *** */
// Используя flatMap запишите в массив genres все жанры книг books
{
  const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое'],
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика'],
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика'],
    },
  ];
  // Пиши код ниже этой строки

  const genres = books.flatMap((book) => book.genres);
  // Пиши код выше этой строки
  console.log('Task 9: ', genres); // ['приключения', 'историческое', 'фантастика', 'ужасы', 'мистика']
}

/* *** Task 10 *** */
// Используя flatMap и filter нужно получить жанры книг без дубликатов.
// Используйте чейнинг (chaining)
{
  const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое'],
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика', 'мистика'],
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика', 'приключения'],
    },
  ];
  // Пиши код ниже этой строки
  const uniqueGenres = books
    .flatMap((book) => book.genres)
    .filter((genre, index, genresArr) => genresArr.indexOf(genre) === index);

  console.log('Task 10: ', uniqueGenres); //['приключения', 'историческое', 'фантастика', 'мистика', 'ужасы']
}

/* *** Task 11 *** */
// Нужно получить (записать в массив topBooks) все книги с рейтингом более MIN_RATING и отсортировать их по рейтингу в порядке убывания.
{
  const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      rating: 8.38,
    },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.58 },
    { title: 'Заповіт', author: 'Тарас Шевченко', rating: 8.51 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
    { title: 'Гибель титанов', author: 'Теодор Драйзер', rating: 8.54 },
    { title: 'Война и мир', author: 'Лев Толстой', rating: 6.0 },
    { title: 'Хоббит: туда и обратно', author: 'Дж. Толкиен', rating: 9.01 },
  ];

  const MIN_RATING = 8.5;
  // Пиши код ниже этой строки
  const topBooksNotSorted = books.filter((book) => book.rating > MIN_RATING);
  const topBooks = topBooksNotSorted.sort(
    (firstBook, secondBook) => firstBook.rating - secondBook.rating
  );
  const topBooksTitle = topBooks.map((book) => book.title);

  console.log('Task 11: ', topBooks);
  console.log('Task 11. Only titles: ', topBooksTitle);
}

/* *** Task 12 *** */
// Реализуйте функцию getUsersWithFriend, которая возвращает всех пользователей, у которых есть друг с указанным именем.
{
  const users = [
    { name: 'Ivan Best', friends: ['Vasya', 'Taras', 'Ilya', 'Kolya', 'Oleg'] },
    { name: 'Thimothy First', friends: ['Sergey', 'Taras', 'Lena', 'Ira'] },
    {
      name: 'Mango Tasty',
      friends: ['Zina', 'Taras', 'Kristina', 'Dima', 'Sasha'],
    },
    { name: 'Dan Balan', friends: ['Igor', 'Vova', 'Kolya'] },
  ];
  // Пиши код ниже этой строки
  const getUsersWithFriend = (users, friendName) => {
    const allUsersWithSomeFriend = users
      .filter((user) => {
        return user.friends.some((friend) => friend === friendName);
      })
      .map((user) => user.name);

    //Если нужно вернуть null при отсутствии такого друга
    return allUsersWithSomeFriend.length > 0 ? allUsersWithSomeFriend : null;

    //Если нужно вернуть [] при отсутствии такого друга
    return allUsersWithSomeFriend;
  };
  // Пиши код выше этой строки

  console.log('Task 12: ', getUsersWithFriend(users, 'Taras')); // тут перечислены 3 юзера Ivan, Thimothy, Mango
  console.log('Task 12: ', getUsersWithFriend(users, 'Kolya')); // тут перечислены 2 юзера Ivan, Mango, Dan
  console.log('Task 12: ', getUsersWithFriend(users, 'Sergey')); // перечислен 1 юзер Thimothy
  console.log('Task 12: ', getUsersWithFriend(users, 'Alexey')); // null
}

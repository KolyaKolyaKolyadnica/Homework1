/* *** Task 13 *** */
// Отредактировать функцию countProps
// Функция возвращает количество ключей переданного объекта.
// Функция должна быть реализована в ОДНУ СТРОКУ максимально коротко !!!
{
  function countProps(object) {
    // Пиши код ниже этой строки
    return Object.keys(object).length;
    // Пиши код выше этой строки
  }

  console.log(
    'Task 13: ',
    countProps({ name: 'asd', surname: 'asdasd', age: 5 })
  );
  console.log('Task 13: ', countProps({}));
}

/* *** Task 14 *** */
// firstObjectValue присвоить значение первого ключа в объекте apartment, lastObjectKey - последнего.
{
  const apartment = {
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
  };
  // Пиши код ниже этой строки
  const lastObjectKey = Object.keys(apartment)[0];
  const firstObjectValue =
    Object.values(apartment)[Object.values(apartment).length - 1];

  // Ну правильно же? Я же не знаю какой именно єлемент станет 1м ,а какой последним

  console.log('Task 14: ', firstObjectValue, lastObjectKey);
}

/* *** Task 15 *** */
// Дописать функцию countTotalSalary.
// функция в цикле for ... of... считает сумму всех значений переданного объекта или массива.
{
  function countTotalSalary(salaries) {
    let totalSalary = 0;
    // Пиши код ниже этой строки
    const arrayValues = Object.values(salaries);

    for (const value of arrayValues) {
      totalSalary += value;
    }
    // Пиши код выше этой строки
    return totalSalary;
  }

  console.log(
    'Task 15: ',
    countTotalSalary({ first: 300, second: 400, third: 700, fourth: 550 })
  );
  console.log('Task 15: ', countTotalSalary([300, 400, 250]));
}

/* *** Task 16 *** */
// Есть массив объектов со значениями цвета в 2х представлениях  - hex и rgb.
// В цикле for... of ... нужно в массив hexColors поместить значения hex цветов,
// в массив rgbColors - цвета rgb.
{
  const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
  ];
  const hexColors = [];
  const rgbColors = [];
  // Пиши код ниже этой строки
  for (const color of colors) {
    hexColors.push(color.hex);
    rgbColors.push(color.rgb);
  }

  console.log('Task 16: ', hexColors, rgbColors);
}

/* *** Task 17 *** */
// Дописать функцию getProductPrice,
// Функция принимает name продукта и возвращает значение price данного продукта из массива products.
// если ничего не найдено, возвращает null
{
  const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дрон', price: 400, quantity: 7 },
    { name: 'Принтер', price: 1200, quantity: 9 },
  ];

  function getProductPrice(productName) {
    // Пиши код здесь
    for (const product of products) {
      if (product.name === productName) {
        return product.price;
      }
    }
    return null;
  }

  console.log('Task 17: ', getProductPrice('Радар')); // 1300
  console.log('Task 17: ', getProductPrice('Принтер')); // 1200
  console.log('Task 17: ', getProductPrice('Банан')); // null
}

/* *** Task 18 *** */
// Дописать функцию getAllPropValues,
// Функция принимает имя поля, которое есть (но может и не быть) у объектов в массиве products.
// Если переданное поле существует, то функция возвращает массив значений по текущему полю в объектах в products.
// Если такого поля в объектах products нет, то возвращает пустой массив.
{
  const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дрон', price: 400, quantity: 7 },
    { name: 'Принтер', price: 1200, quantity: 9 },
  ];

  function getAllPropValues(propName) {
    // Пиши код здесь
    const array = [];

    for (const product of products) {
      if (!product[propName]) {
        continue;
      }
      array.push(product[propName]);

      // //Тернарик с немного другим условием. continue почему то не работает!!!!!!
      // product[propName] ? array.push(product[propName]) : continue;
    }

    return array;
  }

  console.log('Task 18: ', getAllPropValues('name')); // [ 'Радар', 'Сканер', 'Дрон', 'Принтер' ]
  console.log('Task 18: ', getAllPropValues('price')); // [ 1300, 2700, 400, 1200 ]
  console.log('Task 18: ', getAllPropValues('quantity')); // [ 4, 3, 7, 9 ]
  console.log('Task 18: ', getAllPropValues('available')); // [ ]
}

/* *** Task 19 *** */
// Дописать функцию calculateTotalPrice,
// Функция принимает имя продукта и возвращает общую стоимость по этому продукту
// из массива products или возвращает 0, если такой продукт не найден в массиве.
{
  const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дрон', price: 400, quantity: 7 },
    { name: 'Принтер', price: 1200, quantity: 9 },
  ];

  function calculateTotalPrice(productName) {
    // Пиши код здесь
    for (const product of products) {
      if (product.name === productName) {
        return product.price * product.quantity;
      }
    }
    return 0;
  }

  console.log('Task 19: ', calculateTotalPrice('Радар')); // 5200
  console.log('Task 19: ', calculateTotalPrice('Сканер')); // 8100
  console.log('Task 19: ', calculateTotalPrice('Дрон')); // 2800
  console.log('Task 19: ', calculateTotalPrice('Компьютер')); // 0
}

/* *** Task 20 *** */
// Используя деструктуризацию объекта highTemperatures
// "извлеките" переменнные yesterday, today, tomorrow.
// Переменной meanTemperature присвойте значение среднего арифметического
// значений этих трех переменных. Т.е. нужно рассчитать среднее значение температуры
// за 3 дня.
{
  const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
  };
  // // Пиши код ниже этой строки
  // const temperatureYesterday = highTemperatures.yesterday;
  // const temperatureToday = highTemperatures.today;
  // const temperatureTomorrow = highTemperatures.tomorrow;

  // const meanTemperature =
  //   (temperatureYesterday + temperatureToday + temperatureTomorrow) / 3;
  // // Можно же и так написать? Зачем мне єти консті?
  // const meanTemperature =
  //   (highTemperatures.yesterday +
  //     highTemperatures.today +
  //     highTemperatures.tomorrow) /
  //   3;

  // немного почитал и понял что за деструктуризация :)

  const { yesterday: a, today: b, tomorrow: c } = highTemperatures;

  const meanTemperature = (a + b + c) / 3; // исправьте эту строку

  // Пиши код выше этой строки

  console.log('Task 20: ', meanTemperature); // 29
}

/* *** Task 21 *** */
// Примените деструктуризацию объекта highTemperatures, но при этом
// при деструктуризации инициализируйте переменную icon со значением по умолчанию
// 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
// Выведите все переменные в консоль.
{
  const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
  };
  // Пиши код ниже этой строки
  const {
    yesterday,
    today,
    tomorrow,
    icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  } = highTemperatures;
  // Пиши код выше этой строки

  console.log('Task 21: ', highTemperatures, yesterday, today, tomorrow, icon);
}

/* *** Task 22 *** */
// Используя деструктуризацию объекта highTemperatures
// "извлеките" переменнные yesterday, today, tomorrow с одновременным переименованием их
// на highYesterday, highToday, highTomorrow
// Также при деструктуризации инициализируйте переменную icon с одновременным переименованием на highIcon
// со значением по умолчанию 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'
// Выведите все переменные в консоль.
{
  const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
  };
  // Пиши код ниже этой строки
  const {
    yesterday: highYesterday,
    today: highToday,
    tomorrow: highTomorrow,
    icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
  } = highTemperatures;
  // Пиши код выше этой строки
  // const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

  console.log('Task 22: ', highYesterday, highToday, highTomorrow, highIcon);
}

/* *** Task 23 *** */
// В цикле for ... of.. используя деструктуризацию объекта { hex: ..., rgb: ... }
// "наполните" массивы hexColors и rgbColors соответствующими
// значениями из массива объектов colors
{
  const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
  ];

  const hexColors = [];
  const rgbColors = [];
  // Пиши код ниже этой строки
  for (const color of colors) {
    const { hex, rgb } = color;
    hexColors.push(hex);
    rgbColors.push(rgb);
  }

  console.log('Task 23: ', hexColors, rgbColors);
}

/* *** Task 24 *** */
// Дописать функцию calculateMeanTemperature.
// Функция принимает объект forecast, который содержит внутри 2 объекта.
// Используйте вложенную деструктуризация (т.е. деструктуризация в деструктуризации)
// для получения вложенных переменных с переименованием (см return)
{
  const forecast = {
    today: {
      low: 28,
      high: 32,
      icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
    },
    tomorrow: {
      low: 27,
      high: 31,
    },
  };
  // Пиши код ниже этой строки
  function calculateMeanTemperature(forecast) {
    const { today, tomorrow } = forecast;
    const { low: todayLow, high: todayHigh, icon } = today;
    const { low: tomorrowLow, high: tomorrowHigh } = tomorrow;
    // Пиши код выше этой строки
    // раскомментируй строку ниже
    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
  }

  console.log('Task 24: ', calculateMeanTemperature(forecast));
}

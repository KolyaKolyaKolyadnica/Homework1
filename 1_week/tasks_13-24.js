/* *** Task 13 *** */
// Отредактировать функцию isValidPassword при помощи операторов сравнения так,
// чтобы в случае соответствия переданного и сохраненного паролей isMatch присваивалось значение true.
// Функция должна возвращать isMatch.
{
  function isValidPassword(password) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    // Пиши код ниже этой строки
    let isMatch;
    if (SAVED_PASSWORD === password) {
      isMatch = true;
    } else {
      isMatch = false;
    };
    return isMatch;
    // Пиши код выше этой строки
  }

  console.log('Task 13: ', isValidPassword('jqueryismyjam'));
  console.log('Task 13: ', isValidPassword('jsisawesome'));
}

/* *** Task 14 *** */
// Отредактировать функцию checkAge при помощи операторов сравнения так,
// чтобы в случае возраста, который больше или равен 18, выполнялся блок if.
// В противном случае выполняется блок elseю
// Функция должна возвращать message.
{
  function checkAge(age) {
    let message;

    /* исправь эту строку */ if (age >= 18) {
      message = 'Вы совершеннолетний человек';
    } else {
      message = 'Вы не совершеннолетний человек';
    }

    return message;
  }

  console.log('Task 14: ', checkAge(19));
  console.log('Task 14: ', checkAge(11));
}

/* *** Task 15 *** */
// Дописать функцию checkStorage используя оператор больше > так,
// чтобы в случае если ordered больше available, в переменную message записывалась строка 'На складе недостаточно товаров!'.
// В противном случае 'Заказ оформлен, с вами свяжется менеджер'
// Функция должна возвращать message.
{
  function checkStorage(available, ordered) {
    let message;
    // Пиши код ниже этой строки
    if (ordered > available) {
      message = 'На складе недостаточно товаров!';
    } else {
      message = 'Заказ оформлен, с вами свяжется менеджер';
    }
    // Пиши код выше этой строки
    return message;
  }

  console.log('Task 15: ', checkStorage(19, 20));
  console.log('Task 15: ', checkStorage(11, 7));
}

/* *** Task 16 *** */
// Используя операторы присваивания с действием (умножение, деление, вычитание, сложение)
// прибавить к а 2, из b вычесть 4, с умножить на 3, d разделить на 10.
{
  let a = 5;
  let b = 10;
  let c = 15;
  let d = 20;

  // Example a += 8
  // Пиши код ниже этой строки
  a += 2;
  b -= 4;
  c *= 3;
  d /= 10;
  // Пиши код выше этой строки

  console.log('a: ', a);
  console.log('b: ', b);
  console.log('c: ', c);
  console.log('d: ', d);
}

/* *** Task 17 *** */
// Дописать функцию makeTransaction,
// Вычислить значение totalPrice. При условии если totalPrice больше customerCredits
// выводится сообщение 'Недостаточно средств на счету!'. В противном случае
// с помощью шаблонной строки `${}` выведите информацию о количестве купленных дронов
// и остатке на счету.
// Функция должна возвращать message.
{
  function makeTransaction(pricePerDrone, orderedQuantity, customerCredits) {
    let message;
    // Пиши код ниже этой строки
    let totalPrice = undefined;
    if (totalPrice > customerCredits) {
      message = 'Недостаточно средств на счету!';
    } else {
      message = `Вы купили ${orderedQuantity} дронов, на счету осталось ${customerCredits - pricePerDrone * orderedQuantity} кредитов`;
    }
    // Пиши код выше этой строки
    return message;
  }

  console.log('Task 17: ', makeTransaction(11, 5, 200));
  console.log('Task 17: ', makeTransaction(7, 10, 50));
}

/* *** Task 18 *** */
// Дописать функцию checkPassword,
// Вычислить значение totalPrice. При условии если totalPrice больше customerCredits
// выводится сообщение 'Недостаточно средств на счету!'. В противном случае
// с помощью шаблонной строки `${}` выведите информацию о количестве купленных дронов
// и остатке на счету.
// Функция должна возвращать message.
{
  function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;

    /* Дополни эту строку */ if (password === undefined) {
      message = 'Отменено пользователем!';
      /* Дополни строку ниже*/
    } else if (password === ADMIN_PASSWORD) {
      message = 'Добро пожаловать!';
    } else {
      message = 'Доступ запрещен, неверный пароль!';
    }

    return message;
  }

  console.log('Task 18: ', checkPassword('jqueryismyjam'));
  console.log('Task 18: ', checkPassword('jsisawesome'));
  console.log('Task 18: ', checkPassword());
}

/* *** Task 19 *** */
// Дописать функцию checkStorage,
// В случае если ordered равно 0, записать в message 'В заказе еще нет товаров',
// дописать остальные условия в блокe else if.
// Функция должна возвращать message.
{
  function checkStorage(available, ordered) {
    let message;
    // Пиши код ниже этой строки
    if (ordered === 0) {
      message = 'В заказе еще нет товаров';
    } else if (ordered > available) {
      message = 'Слишком большой заказ, на складе недостаточно товаров!';
    } else {
      message = 'Заказ оформлен, с вами свяжется менеджер';
    }
    // Пиши код выше этой строки
    return message;
  }

  console.log('Task 19: ', checkStorage(5, 0));
  console.log('Task 19: ', checkStorage(11, 5));
  console.log('Task 19: ', checkStorage(7, 10));
}

/* *** Task 20 *** */
// Дописать функцию isNumberInRange,
// Функция определяет находится ли переданное число в указанном числовом диапазоне.
// Функция должна возвращать isInRange.
{
  function isNumberInRange(start, end, number) {    
    let isInRange
    if (number >= start && number <= end) {
      isInRange = 'in range'; // дополни эту строку
    } else {
      isInRange = 'no in range';
    };
    return isInRange;
  }

  console.log('Task 20: ', isNumberInRange(11, 20, 5));
  console.log('Task 20: ', isNumberInRange(11, 30, 21));
  console.log('Task 20: ', isNumberInRange(11, 40, 100));
}

/* *** Task 21 *** */
// Дописать функцию checkIfCanAccessContent,
// Функция определяет есть ли соответствует переданный аргумент subType значениям 'pro' или 'vip'.
// Функция должна возвращать canAccessContent.
{
  function checkIfCanAccessContent(subType) {
    // Не понимаю прикола с const canAccessContent = undefined;
    //
    // const canAccessContent = undefined; // дополни эту строку
    // 
    let canAccessContent
    if (subType === 'pro' || subType === 'vip') {
      canAccessContent = 'Access is allowed';
    } else if (subType === 'basic') {
      canAccessContent = 'Access is denied';
    } else {
      canAccessContent = 'Check your status';
    }
    
    return canAccessContent;
  }

  console.log('Task 21: ', checkIfCanAccessContent('basic'));
  console.log('Task 21: ', checkIfCanAccessContent('pro'));
  console.log('Task 21: ', checkIfCanAccessContent('vip'));
}

/* *** Task 22 *** */
// Дописать функцию isNumberNotInRange,
// Функция определяет находится ли переданное число вне указанного числового диапазона.
// Функция должна возвращать isNotInRange.
{
  function isNumberNotInRange(start, end, number) {
    const isInRange = number >= start && number <= end;
    const isNotInRange = !isInRange; // Дополни эту строку
    return isNotInRange;
  }

  console.log('Task 22: ', isNumberNotInRange(11, 22, 5));
  console.log('Task 22: ', isNumberNotInRange(11, 30, 21));
  console.log('Task 22: ', isNumberNotInRange(11, 40, 100));
}

/* *** Task 23 *** */
// Дописать функцию getDiscount,
// Если totalSpent больше или равен 50000, дисконт - GOLD_DISCOUNT.
// Если totalSpent больше/равен 20000 и меньше 50000, дисконт - SILVER_DISCOUNT.
// Если totalSpent больше/равен 5000 и меньше 20000, дисконт - BRONZE_DISCOUNT.
// Функция должна возвращать isNotInRange.
{
  function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;
    // Пиши код ниже этой строки
    if (totalSpent >= 50000) {
      discount = GOLD_DISCOUNT;
    } else if (totalSpent >= 20000) {
      discount = SILVER_DISCOUNT;
    } else if (totalSpent >=5000 && totalSpent < 20000) {
      discount = BRONZE_DISCOUNT;
    } else {
      discount = BASE_DISCOUNT;
    }
    // Пиши код выше этой строки
    return discount;
  }

  console.log('Task 23: ', getDiscount(55000));
  console.log('Task 23: ', getDiscount(30000));
  console.log('Task 23: ', getDiscount(1000));
  console.log('Task 23: ', getDiscount(6000));
}

/* *** Task 24 *** */
// Дописать функцию checkStorage используя тернарный оператор.
// Если ordered больше available, присвоить переменной message 'На складе недостаточно товаров!'.
// В противном случае 'Заказ оформлен, с вами свяжется менеджер'.
// Функция должна возвращать message.
{
  function checkStorage(available, ordered) {
    let message;
    // Пиши код ниже этой строки
    message = ordered > available? 'На складе недостаточно товаров!': 'Заказ оформлен, с вами свяжется менеджер';
    // Пиши код выше этой строки
    return message;
  }

  console.log('Task 24: ', checkStorage(55, 11));
  console.log('Task 24: ', checkStorage(3, 10));
}

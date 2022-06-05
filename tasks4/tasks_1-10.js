/* *** Task 1 *** */
// Есть функция makePizza().
//  Присвойте переменной result результат вызова ф-ции,
// а переменной pointer - указатель на саму функцию.
{
  function makePizza() {
    return 'Ваша пицца готовится, ожидайте.';
  }
  // Пиши код ниже этой строки

  const result = makePizza();
  const pointer = makePizza;

  console.log('Task 1: ', result, pointer);
  //
}

/* *** Task 2 *** */
// Релизуйте функцию makeMessage, которая принимает 2 параметра - pizzaName (название пиццы)
// и callback (функция, которая принимает pizzaName и которая будет возвращена как результат makeMessage)

{
  function deliverPizza(pizzaName) {
    return `Доставляем пиццу ${pizzaName}.`;
  }

  function makePizza(pizzaName) {
    return `Пицца ${pizzaName} готовится, ожидайте...`;
  }

  // Пиши код ниже этой строки
  function makeMessage(pizzaName, callback) {
    return callback(pizzaName);
  }
  console.log(
    'Task 2: ',
    makeMessage('Pepperoni', makePizza),
    makeMessage('Pepperoni', deliverPizza)
  );
}

/* *** Task 3 *** */
// Допишите функцию makePizza и ее вызов с 2 функциями-колбеками
{
  // Пиши код ниже этой строки
  function makePizza(pizzaName, callback) {
    console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
    // колбек, который приходит как аргумент функции, с именем пиццы в качестве параметра;
    return callback(pizzaName);
  }

  makePizza(
    'Ультрасыр' /*опишите ПРЯМО ЗДЕСЬ (Function Declaration) вторым параметром функцию-колбек доставитьПиццу, которая консолит "Доставляем пиццу *НАЗВАНИЕ ПИЦЦЫ*"*/,
    function deliverPizza(pizzaName) {
      // Функция с названием (deliverPizza)
      console.log(`Доставляем пиццу ${pizzaName}`);
    }
  );

  makePizza(
    'Роял гранд' /*опишите ПРЯМО ЗДЕСЬ (Function Declaration) вторым параметром функцию-колбек кушатьПиццу, которая консолит "Едим пиццу *НАЗВАНИЕ ПИЦЦЫ*"*/,
    function (pizzaName) {
      // Функция без названия
      console.log(`Едим пиццу ${pizzaName}`);
    }
  );

  // Пиши код выше этой строки
  console.log('Task 3: ');
  //
}

/* *** Task 4 *** */
// Реализуйте объект pizzaPalace, который имеет поле, которое хранит массив с 3 пиццами -'Ультрасыр', 'Аль Копчино', 'Четыре нарезона',
// имеет метод заказатьПиццу, который принимает 3 параметра - название пиццы и 2 колбека.
// Метод заказатьПиццу проверяет есть ли такая пицца в ассортименте, если есть то вызывается коллбек1 (успех),
// если такой пиццы нет - вызывается коллбек2 (ошибка)
{
  // Пиши код ниже этой строки
  const pizzaPalace = {
    menu: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
    order(pizzaName, onSuccess, onOrderError) {
      if (this.menu.includes(pizzaName)) {
        console.log(onSuccess(pizzaName)); // т.к. візов функции не в консол логе
        return onSuccess(pizzaName);
      }
      console.log(onOrderError(pizzaName)); // т.к. візов функции не в консол логе
      return onOrderError(pizzaName);
    },
  };
  // Пиши код выше этой строки

  // Колбэк для onSuccess
  function makePizza(pizzaName) {
    return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
  }

  // Колбэк для onError
  function onOrderError(error) {
    return `Ошибка! ${error}`;
  }

  // Вызовите методы с колбэками

  //Просто добавить колбєки в вызов ф-ции?
  pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
  pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
  pizzaPalace.order('Биг майк', makePizza, onOrderError);
  pizzaPalace.order('Венская', makePizza, onOrderError);

  //pizzaPalace.order('Аль Копчино');
  //pizzaPalace.order('Четыре нарезона');
  //pizzaPalace.order('Биг майк');
  //pizzaPalace.order('Венская');
  // Пиши код выше этой строки

  console.log('Task 4: ');
  //
}

/* *** Task 5 *** */
// Реализуйте объект pizzaPalace, который имеет поле, которое хранит массив с 3 пиццами -'Ультрасыр', 'Аль Копчино', 'Четыре нарезона',
// имеет метод проверитьНаличиеПиццы, который проверяет есть ли такая пицца в ассортименте (возвращает true/false),
// имеет метод заказатьПиццу, который внутри себя вызывает метод проверитьНаличиеПиццы (проверка), и если есть такой пиццы нет в ассортименте,
// то консолит "В ассортименте нет пиццы с названием «НАЗВАНИЕ ПИЦЦЫ»",
// если такая пицца есть - `Заказ принят, готовим пиццу «НАЗВАНИЕ ПИЦЦЫ».
{
  // Пиши код ниже этой строки
  const pizzaPalace = {
    menu: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
    checkPizzaName(pizzaName) {
      const { menu } = pizzaPalace;

      /*
      console.log('this.menu ', this.menu); // Почему undefernd??????
      console.log('pizzaPalace.menu ', pizzaPalace.menu); // Так не надежно поєтому сделал деструктуризацию
      */

      return menu.includes(pizzaName);
    },
    orderPizza(pizzaName, callback) {
      // return callback
      //   ? `Заказ принят, готовим пиццу ${pizzaName}`
      //   : `В ассортименте нет пиццы с названием ${pizzaName}`;
      // console.log(callback);
      // console.log(this.callback);
      if (callback(pizzaName)) {
        return `Заказ принят, готовим пиццу ${pizzaName}`;
      }
      return `В ассортименте нет пиццы с названием ${pizzaName}`;
    },
  };
  // Пиши код выше этой строки
  const { checkPizzaName, orderPizza } = pizzaPalace;

  console.log('========= Start 5 ========');

  console.log('Task 5: ', orderPizza('Аль Копчино', checkPizzaName));

  console.log('========== End 5 ==========');
  //
}

/* *** Task 6 *** */
// В объекте customer реализуйте следующие методы:
// - получитьБаланс
// - получитьДисконт
// - установитьДисконт (принимает новое значение дисконта)
// - получитьЗаказы
// - добавитьЗаказ (принимает стоимость заказа и сам заказ, вычисляет новое значение баланса в зависимости от текущего дисконта
// и добавляет в массив заказов новый заказ)

{
  const customer = {
    username: 'Mango',
    balance: 24000,
    discount: 0.1,
    orders: ['Burger', 'Pizza', 'Salad'],
    // Пиши код ниже этой строки
    getBalance() {
      return this.balance;
    },
    getDiscount() {
      return this.discount;
    },
    addDiscount(newDiscount) {
      return (this.discount = newDiscount);
    },
    getOrders() {
      return this.orders;
    },
    addOrder(cost, dish) {
      this.balance -= cost - cost * this.discount;
      this.orders.push(dish);
    },
    // Пиши код выше этой строки
  };

  customer.addDiscount(0.15);
  console.log(customer.getDiscount()); // 0.15
  customer.addOrder(5000, 'Steak');
  console.log(customer.getBalance()); // 19750   ----  Поставил () после customer.getBalance
  console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']   ----  Поставил () после customer.getOrders
  console.log('Task 6: ');
  //
}

/* *** Task 7 *** */
// Реализуйте функцию composeMessage, которая принимает параметр позиция заказа в очереди и
// возвращает строку "Готовим *НАЗВАНИЕ БЛЮДА* для *АДРЕС ПОЧТЫ email*. Ваш заказ *НОМЕР ПОЗИЦИИ*-й в очереди.""
// Запишите в переменную messages результаты вызова этой функции для каждого заказа в массиве orders (Используйте map и call)
{
  console.log('======== Task 7: ========');

  const orders = [
    { email: 'solomon@topmail.ua', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'jacob@mail.com', dish: 'Taco' },
  ];

  function composeMessage(index) {
    return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${
      index + 1
    }-й в очереди.`;
  }

  let messages = orders.map((order, index) =>
    composeMessage.call(order, index)
  );

  console.log('Task 7: ', messages);
}

{
  /* *** Task 8 *** */
  // То же самое что и в задании 7, но используйте apply для вызова функций
  {
    console.log('======== Task 8: ========');

    const orders = [
      { email: 'solomon@topmail.ua', dish: 'Burger' },
      { email: 'artemis@coldmail.net', dish: 'Pizza' },
      { email: 'jacob@mail.com', dish: 'Taco' },
    ];

    // Пиши код ниже этой строки

    function composeMessage(index) {
      return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${
        index + 1
      }-й в очереди.`;
    }

    let messages = orders.map((order, index) =>
      composeMessage.apply(order, [index])
    );

    console.log('Task 8: ', messages);
  }

  /* *** Task 9 *** */
  // Используя bind создайте переменную pizzaPalaceComposer, в которую будет "привязан" объект pizzaPalace
  // В переменную pizzaPalaceMessage запишите результат вызова pizzaPalaceComposer. customerName - Манго
  // Аналогичные действия проделайте с burgerShackComposer и burgerShackMessage. customerName - Поли
  {
    console.log('======== Task 9: ========');

    const pizzaPalace = {
      company: 'Pizza Palace',
    };

    const burgerShack = {
      company: 'Burger Shack',
    };

    function composeMessage(customerName) {
      return `${customerName}, всегда рады вас видеть в «${this.company}».`;
    }
    // Пиши код ниже этой строки

    const pizzaPalaceComposer = composeMessage.bind(pizzaPalace, 'Манго');
    const pizzaPalaceMessage = pizzaPalaceComposer();
    console.log(pizzaPalaceMessage);

    const burgerShackComposer = composeMessage.bind(burgerShack, 'Поли');
    const burgerShackMessage = burgerShackComposer();
    console.log(burgerShackMessage);

    console.log('Task 9: ');
  }

  /* *** Task 10 *** */
  // В объекте service реализуйте методы
  // - подписаться, который принимает почту как параметр, записывает ее в массив mailingList и возвращает строку  !!!!!!!!!!
  //    `Почта *АДРЕС ПОЧТЫ* добавлена в рассылку.`
  // - отписаться, который принимает почту как параметр, удаляет ее из массива mailingList и возвращает строку  !!!!!!!!!!
  //    `Почта *АДРЕС ПОЧТЫ* удалена из рассылки.`
  // Также отдельно реализуйте функцию logAndInvokeAction, которая принимает 2 параметра: email и action
  // Функция консолит `Выполняем действие с *АДРЕС ПОЧТЫ*.` и возвращает ВЫЗОВ функции с параметром почты.
  // После этого присвойте присвойте переменной firstInvoke вызов фукнции logAndInvokeAction
  // с новым адресом почты "kiwi@mail.uk" в контексте метода "подписаться" объекта service.
  // После этого присвойте присвойте переменной secondInvoke вызов фукнции logAndInvokeAction
  // с уже существующим адресом почты "kiwi@mail.uk" в контексте метода "отписаться" объекта service.
  // Используйте bind.
  {
    console.log('======== Task 10: ========');

    const service = {
      mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
      // !!! дополнить здесь
      subscribe(email) {
        this.mailingList.push(email);
        return `Почта ${email} добавлена в рассылку.`;
      },
      unsubscribe(email) {
        const emailsIndex = this.mailingList.indexOf(email);

        if (emailsIndex < 0) {
          return `Вы и так не подписаны на почту ${email} .`;
        }

        this.mailingList.splice(emailsIndex, 1);

        return `Почта ${email} удалена из рассылки.`;
      },
    };

    function logAndInvokeAction(email, action) {
      console.log('action ', action);

      console.log(`Выполняем действие с ${email}.`);
      return action(email);
    } // !!! дополнить здесь

    // console.log(
    //   logAndInvokeAction('test@mail.ua', service.subscribe.bind(service))
    // );

    console.log('Task 10: ');
    const firstInvoke = logAndInvokeAction(
      'kiwi@mail.uk',
      service.subscribe.bind(service)
    ); // !!! дополнить здесь
    console.log(firstInvoke);

    // // Почта kiwi@mail.uk добавлена в рассылку.

    console.log(service.mailingList);

    /* ['mango@mail.com',
        'poly@hotmail.de',
        'ajax@jmail.net',
        'kiwi@mail.uk']*/

    const secondInvoke = logAndInvokeAction(
      'kiwi@mail.uk',
      service.unsubscribe.bind(service)
    ); // !!! дополнить здесь
    console.log(secondInvoke);
    // Почта poly@hotmail.de удалена из рассылки.

    console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
  }
}

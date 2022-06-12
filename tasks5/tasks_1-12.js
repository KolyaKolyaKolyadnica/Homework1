/* *** Task 1 *** */
// Cоздать функцию Car, которая принимает 3 параметра:
// марка, модель, цена.
// Функция возвращает объект с переданными полями.
// С помощью ключевого слова new создайте 3 объекта автомобилей с разными данными.
// Выведите в консоль.
{
  // Пиши код ниже этой строки

  const Car = function ({ mark, model, price } = {}) {
    return { mark, model, price };
  };

  const newCar1 = new Car({
    mark: 'Audi',
    model: 'A6',
    price: 40000,
  });
  const newCar2 = new Car({
    mark: 'BMV',
    model: 'Q5',
    price: 50000,
  });
  const newCar3 = new Car({
    mark: 'Mersedes',
    model: 'Benz',
    price: 60000,
  });

  console.log('Task 1: ', newCar1, newCar2, newCar3, Car);
  //
}

/* *** Task 2 *** */
// Cоздайте функцию Car, которая принимает так называемый объект настроек, который содержит 3 поля (марка, модель, цена):
// Внутри себя функция записывает через контекст (this) эти данные "в себя".
// Также (вне функции) добавьте !!! НА ПРОТОТИП !!! Car 2 метода:
// - получитьЦену, который ! ЧЕРЕЗ this ! возвращает цену автомобиля
// - установитьЦену, который ! ЧЕРЕЗ this ! меняет цену автомобиля на переданную в качестве параметра
// Создайте при помощи ключевого слова new автомобиль и вызовите эти 2 функции
{
  const Car = function ({ mark, model, price } = {}) {
    this.mark = mark;
    this.model = model;
    this.price = price;
  };
  Car.prototype.getPrice = function () {
    return this.price;
  };
  Car.prototype.changePrice = function (newPrice) {
    return (this.price = newPrice);
  };
  const newCar1 = new Car({});
  console.log(
    'Task 2: ',
    newCar1.getPrice(),
    newCar1.changePrice(80000),
    newCar1
  );
}

/* *** Task 3 *** */
// Допишите функцию Storage, которая принимает массив строковых значений items.
// Внутри себя функция записывает через контекст (this) эти данные "в себя".
// Также (вне функции) добавьте на прототип Storage 3 метода, которые вызываются ниже в коде.
// По возвращаемому значению (см. комментарии) определите, что должен делать метод.
{
  // Пиши код ниже этой строки
  function Storage(array) {
    this.array = array;
  }
  Storage.prototype.getItems = function () {
    return this.array;
  };
  Storage.prototype.addItem = function (item) {
    return this.array.push(item);
  };
  Storage.prototype.removeItem = function (item) {
    return this.array.filter((element) => element !== item);
    // const itemIndex = this.array.indexOf(item);
    // if (itemIndex > 0) {
    //   return this.array.splice(itemIndex, 1);
    // }
  };

  // Пиши код выше этой строки
  console.log('Task 3: ');
  const storage = new Storage(['Games', 'Video', 'Documents']);
  console.log(storage.getItems()); // ["Games", "Video", "Documents"]
  storage.addItem('Music');
  console.log(storage.getItems()); // ["Games", "Video", "Documents", "Music"]
  storage.removeItem('Video');
  console.log(storage.getItems()); // ["Games", "Documents", "Music"]
  //
}

/* *** Task 4 *** */
// Допишите функцию StringBuilder, которая принимает строковое значение.
// Внутри себя функция записывает через контекст (this) эти данные "в себя".
// Также (вне функции) добавьте на прототип функции StringBuilder 3 метода, которые вызываются ниже в коде.
// По возвращаемому значению (см. комментарии) определите, что должен делать метод.
{
  // Пиши код ниже этой строки
  function StringBuilder(value) {
    this.string = `'${value}'`;
  }
  StringBuilder.prototype.getValue = function () {
    return this.string;
  };
  StringBuilder.prototype.padStart = function (item) {
    const itemsArr = this.string.split('');
    itemsArr.splice(1, 0, item).join('');
    const element = itemsArr.join('');
    return (this.string = element);
  };
  StringBuilder.prototype.padEnd = function (item) {
    const itemsArr = this.string.split('');
    itemsArr.splice(-1, 0, item);
    const element = itemsArr.join('');
    return (this.string = element);
  };
  StringBuilder.prototype.padBoth = function (item) {
    const itemsArr = this.string.split('');
    itemsArr.splice(1, 0, item).join('');
    itemsArr.splice(-1, 0, item);
    const element = itemsArr.join('');
    return (this.string = element);
  };

  // Пиши код выше этой строки
  console.log('Task 4: ');
  const builder = new StringBuilder('.');
  console.log(builder.getValue()); // '.'
  builder.padStart('^');
  console.log(builder.getValue()); // '^.'
  builder.padEnd('^');
  console.log(builder.getValue()); // '^.^'
  builder.padBoth('=');
  console.log(builder.getValue()); // '=^.^='
  //
}

/* *** Task 5 *** */
// Cоздайте класс Car, конструктор которого принимает так называемый объект настроек, который содержит 3 поля (марка, модель, цена):
// Конструктор "записывает" эти данные в экземпляр класса.
// Создайте при помощи данного класса автомобиль и выведите его в консоль.
{
  // Пиши код ниже этой строки
  class Car {
    constructor({ mark, model, price } = {}) {
      this.mark = mark;
      this.model = model;
      this.price = price;
    }
  }
  const newCar = new Car({ mark: 'BMV', model: 'A5', price: 100000 });
  console.log('Task 5: ', newCar);
  //
}

/* *** Task 6 *** */
// Дополните класс Car двумя методами:
// - получитьЦену
// - изменитьЦену
// Методы релизуют действия, соответствующие их названия.
// В методе изменитьЦену осуществите проверку какой аргумент приходит.
// !!! Цена - это обязательно ПОЛОЖИТЕЛЬНОЕ ЧИСЛО.
{
  // Пиши код ниже этой строки
  class Car {
    constructor({ mark, model, price } = {}) {
      this.mark = mark;
      this.model = model;
      this.price = price;
    }
    getPrice() {
      return this.price;
    }
    setPrice(newPrice) {
      // if (typeof newPrice !== 'number') {
      //   return 'Вы ввели некорректные символы, ожидается число.';
      // }
      // return newPrice >= 0
      //   ? (this.price = newPrice)
      //   : `ОШИБКА! ${newPrice} < 0`;
      // // console.log('typeof newPrice ', typeof newPrice);
      // // console.log('newPrice ', newPrice);
      return typeof newPrice !== 'number'
        ? 'Вы ввели некорректные символы, ожидается число.'
        : newPrice >= 0
        ? (this.price = newPrice)
        : `ОШИБКА! ${newPrice} < 0`;
    }
  }
  const newCar = new Car({ mark: 'BMV', model: 'A5', price: 100000 });
  console.log('Task 6: ', newCar.getPrice());

  console.log('Task 6: ', newCar.setPrice(10));
  console.log('Task 6: ', newCar.getPrice());
  console.log('Task 6: ', newCar.setPrice('Not a number'));
  console.log('Task 6: ', newCar.getPrice());

  console.log('Task 6: ', newCar.setPrice(-10));
  console.log('Task 6: ', newCar.getPrice());
  //
}

/* *** Task 7 *** */
// Дополните класс Car ! ПРИВАТНЫМ ! полем "двигатель" (строковое значение) и двумя методами, которые работают с этим полем
// - получитьДвигатель
// - изменитьДвигатель
{
  // Пиши код ниже этой строки
  class Car {
    #_motor = '15000 litrs';
    // #motor = '15000 litrs';

    constructor({ mark, model, price } = {}) {
      this.mark = mark;
      this.model = model;
      this.price = price;
    }
    getPrice() {
      return this.price;
    }
    setPrice(newPrice) {
      return newPrice >= 0
        ? (this.price = newPrice)
        : `ОШИБКА! ${newPrice} < 0`;
    }
    get motor() {
      return this.#_motor;
    }
    // getMotor() {
    //   return this.#motor;
    // }

    set motor(newLitrs) {
      this.#_motor = `${newLitrs} litrs`;
    }
    // setMotor(newLitrs) {
    //   this.#motor = `${newLitrs} litrs`;
    // }
  }
  const newCar = new Car({ mark: 'BMV', model: 'A5', price: 100000 });
  // console.log('Task 7: ', newCar.getMotor());
  // newCar.setMotor(123456789);
  // console.log('Task 7: ', newCar.getMotor());

  console.log('Task 7: ', newCar.motor);
  newCar.motor = 123456789;
  console.log('Task 7: ', newCar.motor);
  //
}

/* *** Task 8 *** */
// Допишите класс Storage (по аналогии с заданием 3).
// Поле items - приватное.
// По возвращаемому значению (см. комментарии) определите, что должен делать метод класса.
{
  // Пиши код ниже этой строки
  class Storage {
    #item;

    constructor(array) {
      this.#item = array;
    }

    getItems() {
      return this.#item;
    }

    addItem(newItem) {
      this.#item.push(newItem);
    }

    removeItem(removedItem) {
      return (this.#item = this.#item.filter(
        (element) => element !== removedItem
      ));

      // const indexRemovedItem = this.#item.indexOf(removedItem);
      // if (indexRemovedItem > 0) {
      //   this.#item.splice(indexRemovedItem, 1);
      //   return this.#item;
      // }
    }
  }
  // Пиши код выше этой строки
  console.log('Task 8: ');
  const storage = new Storage(['Games', 'Video', 'Documents']);
  console.log(storage.getItems()); // ["Games", "Video", "Documents"]
  storage.addItem('Music');
  console.log(storage.getItems()); // ["Games", "Video", "Documents", "Music"]
  storage.removeItem('Video');
  console.log(storage.getItems()); // ["Games", "Documents", "Music"]
}

/* *** Task 9 *** */
// Допишите класс Storage (по аналогии с заданием 4).
// Поле value - приватное.
// По возвращаемому значению (см. комментарии) определите, что должен делать метод класса.
{
  // Пиши код ниже этой строки
  class StringBuilder {
    #_value;
    constructor(item) {
      this.#_value = item;
    }
    getValue() {
      return `'${this.#_value}'`;
    }
    padStart(addedItem) {
      this.#_value = `${addedItem}${this.#_value}`;
    }
    padEnd(addedItem) {
      this.#_value = `${this.#_value}${addedItem}`;
    }
    padBoth(addedItem) {
      this.#_value = `${addedItem}${this.#_value}${addedItem}`;
    }
    clear() {
      this.#_value = '';
    }
  }
  // Пиши код выше этой строки
  console.log('Task 9: ');
  const builder = new StringBuilder('.');
  console.log(builder.getValue()); // '.'
  builder.padStart('^');
  console.log(builder.getValue()); // '^.'
  builder.padEnd('^');
  console.log(builder.getValue()); // '^.^'
  builder.padBoth('=');
  console.log(builder.getValue()); // '=^.^='
  builder.clear();
  console.log(builder.getValue()); // ''
}

/* *** Task 10 *** */
// Реализуйте класс Car так, чтобы в нем для каждого поля была функция-сеттер и функция-геттер
// Всего в классе 3 приватных поля: марка, модель, цена
{
  class Car {
    #mark;
    #model;
    #price;

    constructor({ mark, model, price } = {}) {
      this.#mark = mark;
      this.#model = model;
      this.#price = price;
    }
    get mark() {
      return this.#mark;
    }
    set mark(newMark) {
      this.#mark = newMark;
    }

    get model() {
      return this.#model;
    }
    set model(newModel) {
      this.#model = newModel;
    }

    get price() {
      return this.#price;
    }
    set price(newPrice) {
      this.#price = newPrice;
    }
  }
  const newCar = new Car({ mark: 'BMV', model: 'A5', price: 100000 });
  console.log('Task 10: ', newCar.mark, newCar.model, newCar.price);
  newCar.mark = 'Porshe';
  newCar.model = 'Panamera';
  newCar.price = '1000';
  console.log('Task 10: ', newCar.mark, newCar.model, newCar.price);
}

/* *** Task 11 *** */
// Реализуйте класс Car, в котором есть статическое поле "МАКСИМАЛЬНАЯ_ЦЕНА" с числовым значением 50000 и приватное поле "цена",
// В классе есть конструктор, геттер и сеттер для цены.
// При чем сеттер работает так: если новая цена превышает максимальную цену, то сохраняется старая цена,
// если новая цена меньше максимальной, устанавливается новая цена.
{
  class Car {
    // Пиши код ниже этой строки
    #price;
    static maxPrice = 50000;

    constructor({ mark, model, price } = {}) {
      this.#price = price;
    }

    get price() {
      return this.#price;
    }
    set price(newPrice) {
      newPrice > Car.maxPrice
        ? 'Новая цена больше максимальной!'
        : (this.#price = newPrice);
    }
    // Пиши код выше этой строки
  }
  console.log('Task 11: ');

  const audi = new Car({ price: 35000 });
  console.log(audi.price); // 35000

  audi.price = 49000;
  console.log(audi.price); // 49000

  audi.price = 51000;
  console.log(audi.price); // 49000
}

/* *** Task 12 *** */
// Дополните класс Car из задания 11 статическим методом "проверитьЦену", который принимает в качестве аргумента цену
// В случае если цена больше максимальной, возвращается 'Внимание! Цена превышает допустимую.'
// если цена меньше,  возвращается 'Всё хорошо, цена в порядке.'
{
  class Car {
    // Пиши код ниже этой строки
    static checkPrice(checkedPrice) {
      return checkedPrice > this.maxPrice
        ? 'Внимание! Цена превышает допустимую.'
        : 'Всё хорошо, цена в порядке.';
    }
    // Скопируйте код внутри класса из задания 11
    #price;
    static maxPrice = 50000;

    constructor({ mark, model, price } = {}) {
      this.#price = price;
    }

    get price() {
      return this.#price;
    }
    set price(newPrice) {
      newPrice > this.maxPrice
        ? 'Too much babla zahotel'
        : (this.#price = newPrice);
    }
    // Пиши код выше этой строки
  }

  const audi = new Car({ price: 36000 });
  const bmw = new Car({ price: 64000 });

  console.log('audi.price ', audi.price);
  console.log('bmv.price ', bmw.price);

  console.log('Task 12: ');
  console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
  console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.
}

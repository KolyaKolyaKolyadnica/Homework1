/* *** Task 1 *** */
// Объявить и инициализировать объект apartment.
// У объекта есть 5 полей:
// imgUrl со значением 'https://via.placeholder.com/640x480'
// descr со значением 'Просторная квартира в центре'
// rating со значением 4
// price со значением 2153
// tags  - массив с 3 значениями 'premium', 'promoted', 'top'

// Вывести apartment в консоль
// !!! N.B.: в каждом последующем задании будем взаимодействовать с объектом apartment,
// поэтому копируйте его в каждое задание
{
  // Пиши код ниже этой строки
  const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  };
  console.log('Task 1: ', apartment);
  //
}

/* *** Task 2 *** */
// Объекту apartment добавьте поле owner, значение поля - это объект со своими полями:
//   name 'Генри'
//   phone '982-126-1588'
//   email 'henry.carter@aptmail.com'

// Вывести объект apartment в консоль
{
  const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  };

  apartment.owner = {
    name: 'Генри',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  };

  console.log('Task 2: ', apartment);
}

/* *** Task 3 *** */
// Инициализируйте переменные значениями соответствующих полей из объекта apartment (вместо undefined).
{
  // Пиши код ниже этой строки
  const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
  };

  const aptRating = apartment.rating;
  const aptDescr = apartment.descr;
  const aptPrice = apartment.price;
  const aptTags = apartment.tags;
  // Пиши код выше этой строки
  console.log('Task 3: ', aptRating, aptDescr, aptPrice, aptTags);
  //
}

/* *** Task 4 *** */
// Теперь инициализируйте переменные, которые относятся к вложенному объекту owner и массиву tags,
// значениями соответствующих полей из объекта apartment (вместо undefined).
{
  // Пиши код ниже этой строки
  const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    owner: {
      name: 'Генри',
      phone: '982-126-1588',
      email: 'henry.carter@aptmail.com',
    },
  };

  const ownerName = apartment.owner.name;
  const ownerPhone = apartment.owner.phone;
  const ownerEmail = apartment.owner.email;
  const numberOfTags = apartment.tags.length; // количество тегов
  const firstTag = apartment.tags[0]; // значение первого тега в массиве тегов в объекте apartment
  const lastTag = apartment.tags[apartment.tags.length - 1]; // значение последнего тега в массиве тегов в объекте apartment
  // Пиши код выше этой строки

  console.log(
    'Task 4: ',
    ownerName,
    ownerPhone,
    ownerEmail,
    numberOfTags,
    firstTag,
    lastTag
  );
  //
}

/* *** Task 5 *** */
// Инициализируйте переменные из объекта apartment при помощи "скобочной" нотации
// Пример:
// const device = {
// type: 'printer',
// price: 1200,
// quantity: 10
// }
// const deviceQuantity = device['quantity'].
{
  // Пиши код ниже этой строки
  const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    owner: {
      name: 'Генри',
      phone: '982-126-1588',
      email: 'henry.carter@aptmail.com',
    },
  };

  const aptRating = apartment['rating'];
  const aptDescr = apartment['descr'];
  const aptPrice = apartment['price'];
  const aptTags = apartment['tags'];
  // Пиши код выше этой строки

  console.log('Task 5: ', aptRating, aptDescr, aptPrice, aptTags);
  //
}

/* *** Task 6 *** */
// В объекте apartment инициализируйте следующие поля со значениями
// area 60
// rooms 3
// location это объект со своими полями country 'Ямайка' и city 'Кингстон'

// Пример с объектом device:
// device.status = "printing";
// device.history = {
// printedPages: 1230,
// errors: 10,
// };

// Выведите весь объект в консоль
{
  // Пиши код ниже этой строки
  const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    owner: {
      name: 'Генри',
      phone: '982-126-1588',
      email: 'henry.carter@aptmail.com',
    },
  };

  apartment.area = '60';
  apartment.rooms = '3';
  apartment.location = {
    country: 'Ямайка',
    city: 'Кингстон',
  };

  console.log('Task 6: ', apartment);
  //
}

/* *** Task 7 *** */
// "Соберите" объект product из перечисленных ниже переменных.
{
  const name = 'Ремонтный дрон';
  const price = 2500;
  const image = 'https://via.placeholder.com/640x480';
  const tags = ['on sale', 'trending', 'best buy'];

  const product = {
    // Пиши код здесь
    name,
    price,
    image,
    tags,
  };
  console.log('Task 7: ', product);
  //
}

/* *** Task 8 *** */
// Используя скобочную нотацию запишите в соответствующее поле объекта credentials
// почту 'joe.blow@mail.com' и пароль 'jqueryismyjam'
// Пример:
// const breedInputName = "breed";
// const colorInputName = "color";
// const dog = {
//  [breedInputName]: "hound",
//  [colorInputName]: "brown"
// }
{
  const emailInputName = 'email';
  const passwordInputName = 'password';

  const credentials = {
    // Пиши код ниже этой строки
    [emailInputName]: 'joe.blow@mail.com',
    [passwordInputName]: 'jqueryismyjam',
    // Пиши код выше этой строки
  };
  console.log('Task 8: ', credentials);
}

/* *** Task 9 *** */
// При помощи циклов for... in запишите все ключи и значения из объекта apartment
// в соответствующие массивы
{
  const apartment = {
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
  };
  const keys = [];
  const values = [];
  // Пиши код ниже этой строки
  for (let prop in apartment) {
    keys.push(prop);
    values.push(apartment[prop]);
  }

  console.log('Task 9: ', keys);
  console.log('Task 9: ', values);
}

/* *** Task 10 *** */
// В цикле for... in используя специальный встроенный метод объектов
// запишите в массивы  keys и values ТОЛЬКО СОБСТВЕННЫЕ ключи и значения объекта apartment
{
  const keys = [];
  const values = [];
  const advert = {
    service: 'apt',

    testKey1: 'textOfTestKey1',
    testKey2: 'textOfTestKey2',
  };
  const apartment = Object.create(advert);
  apartment.descr = 'Просторная квартира в центре';
  apartment.rating = 4;
  apartment.price = 2153;

  const keysObject = Object.keys(apartment);
  const valuesObject = Object.values(apartment);

  // for (const key in apartment) {
  //   // Пиши код здесь -- Но я дописал две строки 264 и 265

  //   // // Что то не понял что нужно. Так:
  //   // keys.push(Object.keys(apartment));
  //   // values.push(Object.values(apartment));

  //   // // или так?:
  //   keys.push(key);
  //   values.push(apartment[key]);

  //   // Короче, вообще ничего не понял
  // }

  // for (const key in apartment) {
  //   values.push(apartment[key]);
  //   console.log(apartment[key]);
  // }

  // console.log('Task 10: ', keys);
  // console.log('Task 10: ', values);

  for (const key in apartment) {
    if (Object.hasOwnProperty.call(apartment, key)) {
      const element = apartment[key];
      console.log('element ', element);
      console.log('apartment.key ', apartment['key']);

      keys.push(Object.keys(apartment));
      values.push(Object.values(apartment));
    }
  }

  console.log('Task 10: ', keys, 'Object: ', keysObject);
  console.log('Task 10: ', values, 'Object: ', valuesObject);
}

/* *** Task 11 *** */
// Допишите функцию countProps, которая
// в цикле for ... in считает ТОЛЬКО СОБСТВЕННЫЕ ключи переданного объекта.
{
  const advert = {
    service: 'apt',
  };
  const apartment = Object.create(advert);
  apartment.descr = 'Просторная квартира в центре';
  apartment.rating = 4;
  apartment.price = 2153;

  function countProps(object) {
    let propCount = 0;
    // Пиши код здесь
    for (const key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
      }
    }
    return propCount;
  }

  console.log('Task 11: ', countProps(advert));
  console.log('Task 11: ', countProps(apartment));
}

/* *** Task 12 *** */
// При помощи метода объектов Object.keys в цикле for ... of запишите в массив values
// все значения объекта apartment.
{
  const apartment = {
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
  };
  const values = [];
  // Пиши код ниже этой строки
  const keys = Object.keys(apartment);
  for (let key of keys) {
    values.push(apartment[key]);
  }
  console.log('Task 12: ', values);
}

// не сделал № 10 и № 11!!!!

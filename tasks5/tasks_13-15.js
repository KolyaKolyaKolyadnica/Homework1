/* *** Task 13 *** */
// Есть класс User. Класс  Admin должен наследовать класс User и иметь собственное статическое поле -
// объект "УровеньДоступа" с такимим полями:
//   БАЗОВЫЙ: "базовый"
//   СУПЕРЮЗЕР: "суперюзер"
// Выведите в консоль значения этого статического поля класса Admin
{
  class User {
    email;

    constructor(email) {
      this.email = email;
    }

    get email() {
      return this.email;
    }

    set email(newEmail) {
      this.email = newEmail;
    }
  }
  // Пиши код ниже этой строки
  class Admin extends User {
    static accessLevel = {
      base: 'базовый',
      superUser: 'суперюзер',
    };

    constructor({ ...otherConfigs } = {}) {
      super(otherConfigs);
    }
  }

  console.log('Task 13: ', Admin.accessLevel);
}

/* *** Task 14 *** */
// Скопируйте код из задания 13.
// Расширьте класс Админ конструктором, который принимает объект с полями почта и уровеньДоступа.
// В конструкторе используйте зарезервированное слово super. Также в конструкторе записывается значение уровеньДоступа.
//
{
  class User {
    email;

    constructor(email) {
      this.email = email;
    }

    get email() {
      return this.email;
    }

    set email(newEmail) {
      this.email = newEmail;
    }
  }

  class Admin extends User {
    // Пиши код ниже этой строки
    static AccessLevel = {
      BASE: 'базовый',
      SUPERUSER: 'суперюзер',
    };

    constructor({ accessLevel, email } = {}) {
      super(email);
      this.accessLevel = accessLevel;
    }
    // Пиши код выше этой строки
  }

  const mango = new Admin({
    email: 'mango@mail.com',
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });

  console.log(mango.email); // mango@mail.com
  console.log(mango.accessLevel); // superuser

  console.log('Task 14: ');
}

/* *** Task 15 *** */
// Скопируйте код из задания 14.
// Расширьте класс Админ двумя полями:
//      accessLevel
//      blacklistedEmails = []
// И двумя методами:
//      blacklist, который принимает в качестве аргумента почту и записывает эту почту в blacklistedEmails
//      isBlacklisted, который также принимает в качестве аргумента почту и возвращает Boolean значение,
//                      есть ли эта почта в черном списке.
{
  class User {
    email;

    constructor(email) {
      this.email = email;
    }

    get email() {
      return this.email;
    }

    set email(newEmail) {
      this.email = newEmail;
    }
  }
  class Admin extends User {
    // Пиши код ниже этой строки
    static AccessLevel = {
      BASE: 'базовый',
      SUPERUSER: 'суперюзер',
    };

    constructor({ accessLevel, blacklistedEmails = [], email } = {}) {
      super(email);
      this.accessLevel = accessLevel;
      this.blacklistedEmails = blacklistedEmails;
    }

    blacklist(email) {
      this.blacklistedEmails.push(email);
    }

    isBlacklisted(email) {
      return this.blacklistedEmails.includes(email);
    }
    // Пиши код выше этой строки
  }

  const mango = new Admin({
    email: 'mango@mail.com',
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });

  console.log(mango.email); // mango@mail.com
  console.log(mango.accessLevel); // superuser
  mango.blacklist('poly@mail.com');
  console.log(mango.blacklistedEmails); // 'poly@mail.com'
  console.log(mango.isBlacklisted('mango@mail.com')); //  false
  console.log(mango.isBlacklisted('poly@mail.com')); // true

  console.log('Task 15: ');
}

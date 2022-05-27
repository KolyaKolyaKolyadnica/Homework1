/* *** Task 25 *** */
// Используя оператор % - остаток от деления,
// нужно вписать недостающий операнд так,
// чтобы результат вычисления был равен ответу в комментарии
// Пример:
// const a = _ % 5; // 4
// вместо _ пишем 9
{
  const a = 3 % 3; // 0
  const b = 4 % 3; // 1
  const c = 11 % 8; // 3
  const d = 12 % 7; // 5
  const e = 8 % 6; // 2
  const f = 13 % 9; // 4
  console.log('Task 25: ', a, b, c, d, e, f);
}

/* *** Task 26 *** */
// Дописать функцию getEvenNumbers.
// Функция возвращает массив со всеми четными элементами, которые входят в диапазон от start до end
// Используйте цикл for.
// Функция должна возвращать arr.
{
  function getEvenNumbers(start, end) {
    const arr = [];
    // Пиши код ниже этой строки
    for (let i = start; i <= end; i += 1) {
      if (i % 2 === 0) {
        arr.push(i);
      }
    }
    // Пиши код выше этой строки
    return arr;
  }

  console.log('Task 26: ', getEvenNumbers(1, 10)); // [ 2, 4, 6, 8, 10 ]
  console.log('Task 26: ', getEvenNumbers(13, 21)); // [ 14, 16, 18, 20 ]
  console.log('Task 26: ', getEvenNumbers(105, 109)); //[ 106, 108 ]
}

/* *** Task 27 *** */
// В цикле for в указанном диапазоне от start до end нужно вернуть ПЕРВОЕ число, которое в остатке от деления на 5 даст 0.
// Используйте break, чтобы остановить выполнение цикла.
{
  const start = 6;
  const end = 27;
  let number;
  for (let i = start; i <= end; i += 1) {
    if (i % 5 === 0) {
      number = i;
      break;
    }
  }
  console.log('Task 27: ', number); // 10
}

/* *** Task 28 *** */
// В цикле for в указанном диапазоне от start до end нужно найти ПОСЛЕДНЕЕ число, которое  в остатке от деления на 7 даст 0.
{
  const start = 6;
  const end = 31;
  let number;
  for (let i = start; i <= end; i += 1) {
    if (i % 7 === 0) {
      number = i;
    }
  }

  // /* Поиск с конца */
  // for (let i = end; i >= start; i -= 1) {
  //   if (i % 7 === 0) {
  //     number = i;
  //     break;
  //   }
  // }

  console.log('Task 28: ', number); // 28
}

/* *** Task 29 *** */
// Дописать функцию findNumber .
// Функция принимает 3 параметра
// Аналогично как в задании 27 нужно вернуть ПЕРВОЕ число, которое в остатке от деления на divisor даст 0.
// start - начало цикла, end - конец цикла, divisor - число, остаток от деления на которое даст в результате 0.
// Вместо break используйте return, чтобы выйти из тела цикла и вернуть из функции значения.
{
  function findNumber(start, end, divisor) {
    // Пиши код ниже этой строки
    for (let i = start; i <= end; i += 1) {
      if (i % divisor === 0) {
        return i;
      }
    }
    // Пиши код выше этой строки
  }

  console.log('Task 29: ', findNumber(4, 10, 3)); // 6
  console.log('Task 29: ', findNumber(6, 14, 5)); // 10
}

/* *** Task 30 *** */
// Дописать функцию includes, Используя встроенную функцию массива indexOf и тернарный оператор
// Функция определяет содержит ли массив array переданное значение value.
// Функция должна возвращать логическое значение true/false.
{
  function includes(array, value) {
    // includes -- Это нормально имя для функции??!?!!??!!??!
    // Задача уже была решена, это не я :)

    // Пиши код ниже этой строки

    return array.indexOf(value) !== -1 ? true : false;
  }

  console.log('Task 30: ', includes([4, 3, 2, 5, 17, 10], 3)); // true
  console.log('Task 30: ', includes([6, 14], 5)); // false
}

/* *** Task 31 - 34 *** */
// Самостоятельно реализуйте 4 альтернативные варианта функции includes
// Нельзя использовать встроенные функции массива array.includes, indexOf.
// Можно использовать другие встроенные функции массивов, но один раз для каждого варианта решения.
// Функция должна возвращать логическое значение true/false,
// отвечая на вопрос содержит ли массив array переданное значение value.
{
  function includes(array, value) {
    // Пиши код ниже этой строки
    for (let i = 0; i <= array.length; i += 1) {
      if (array[i] === value) {
        return true;
      }
    }
    return false;
  }

  console.log('Task 31: ', includes([4, 3, 2, 5, 17, 10], 3)); // true
  console.log('Task 31: ', includes([6, 14], 5)); // false
}

{
  // Через find. Сделал 2 способа

  // function includes(array, value) {
  //   // Пиши код ниже этой строки
  //   let answer;
  //   function findValue(element, index, array) {
  //     answer = false;
  //     if (element === value) {
  //       return (answer = true);
  //     }
  //   }
  //   array.find(findValue);
  //   return answer;
  // }

  function includes(array, value) {
    // Пиши код ниже этой строки
    function findValue(element, index, array) {
      return value === element;
    }

    return Boolean(array.find(findValue));
  }

  console.log('Task 32: ', includes([4, 3, 2, 5, 17, 10], 3)); // true
  console.log('Task 32: ', includes([6, 14], 5)); // false
}

{
  function includes(array, value) {
    // Пиши код ниже этой строки
    function findValue(desiredValue) {
      return value === desiredValue;
    }

    if (array.filter(findValue).length > 0) {
      return true;
    }
    return false;
  }

  console.log('Task 33: ', includes([4, 3, 2, 5, 17, 10], 3)); // true
  console.log('Task 33: ', includes([6, 14], 5)); // false
}

{
  function includes(array, value) {
    // Пиши код ниже этой строки

    return;
  }

  console.log('Task 34: ', includes([4, 3, 2, 5, 17, 10], 3)); // true
  console.log('Task 34: ', includes([6, 14], 5)); // false
}

// {
//   /*
//   ==== Пример из https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//   ==== Не понимаю!
//   */

//   function isPrime(element, index, array) {
//     var start = 2;
//     while (start <= Math.sqrt(element)) {
//       if (element % start++ < 1) {
//         return false;
//       }
//     }
//     return element > 1;
//   }

//   console.log([4, 6, 8, 12].find(isPrime)); // undefined, не найдено
//   console.log([4, 5, 8, 12].find(isPrime)); // 5
// }

// {
//=====Codewars=====

/*
Imagine two rings with numbers on them. The inner ring spins clockwise (decreasing by 1 each spin) and the outer ring spins counter clockwise 
(increasing by 1 each spin). We start with both rings aligned on 0 at the top, and on each move we spin each ring one increment. How many moves 
will it take before both rings show the same number at the top again?

The inner ring has integers from 0 to innerMax and the outer ring has integers from 0 to outerMax, where innerMax and outerMax are 
integers >= 1. 

e.g. if innerMax is 2 and outerMax is 3 then after
1 move: inner = 2, outer = 1
2 moves: inner = 1, outer = 2
3 moves: inner = 0, outer = 3
4 moves: inner = 2, outer = 0
5 moves: inner = 1, outer = 1
Therefore it takes 5 moves for the two rings to reach the same number
Therefore spinningRings(2, 3) = 5

e.g. if innerMax is 3 and outerMax is 2 then after
1 move: inner = 3, outer = 1
2 moves: inner = 2, outer = 2
Therefore it takes 2 moves for the two rings to reach the same number
spinningRings(3, 2) = 2
*/

//   function spinningRings(innerMax, outerMax) {
//     const arrayInner = [];
//     const arrayOuter = [];

//     for (let i = 0; i <= innerMax; i += 1) {
//       arrayInner[i] = i;
//     }
//     arrayInner.reverse().splice(0, 0, 0);
//     arrayInner.pop();

//     for (let i = 0; i <= outerMax; i += 1) {
//       arrayOuter[i] = i;
//     }

//     let arrayInnerPlusInner = [];
//     let arrayOuterPlusOuter = [];

//     for (let i = 1; i < i + 1; i += 1) {
//       arrayInnerPlusInner = arrayInner.concat(arrayInnerPlusInner);
//       arrayOuterPlusOuter = arrayOuter.concat(arrayOuterPlusOuter);

//       if (arrayInnerPlusInner[i] === arrayOuterPlusOuter[i]) {
//         return i;
//       }
//     }
//   }

//   console.log(spinningRings(2, 3));
// }

// {
//   function reverseWords(str) {
//     let arr = str.split(' ');
//     let arrReverse = [];

//     for (let i = 0; i < arr.length; i += 1) {
//       arrReverse.push(arr[i].split('').reverse().join(''));
//     }

//     return arrReverse.join(' ');
//   }
//   console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
// }

// {
//   function descendingOrder(n) {
//     const smallstringArr = String(n).split('');
//     const bigStringArr = [];

//     for (let j = 9; j >= 0; j -= 1) {
//       for (let i = 0; i <= smallstringArr.length; i += 1) {
//         if (Number(smallstringArr[i]) === j) {
//           bigStringArr.push(smallstringArr[i]);
//           console.log(bigStringArr);
//         }
//       }
//     }
//     return Number(bigStringArr.join(''));
//   }

//   console.log(descendingOrder(0));
// }

{
  function disemvowel(str) {
    const arrStrInput = str.split('');
    const arrVowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const arrStrOutput = [];

    for (let i = 0; i < str.split('').length; i += 1) {
      console.log(arrStrInput[i]);
      if (!arrVowel.includes(arrStrInput[i])) {
        arrStrOutput.push(arrStrInput[i]);
      }
    }
    return arrStrOutput.join('');
  }

  console.log(disemvowel('This website is for losers LOL!'));
  console.log(
    disemvowel(
      `No offense but,\nYour writing is among the worst I've ever read`
    )
  );
  console.log(disemvowel('This weeeg'));
}
// 'N ffns but,\nYur wrtng s mng th wrst \'v vr rad'
// to equal
// 'N ffns bt,\nYr wrtng s mng th wrst \'v vr rd'

// for (let i = 0; i <= arrStr.length; i += 1) {
//   if (
//     arrStr[i] === 'a' ||
//     arrStr[i] === 'e' ||
//     arrStr[i] === 'i' ||
//     arrStr[i] === 'o' ||
//     arrStr[i] === 'u' ||
//     arrStr[i] === 'A' ||
//     arrStr[i] === 'E' ||
//     arrStr[i] === 'I' ||
//     arrStr[i] === 'O' ||
//     arrStr[i] === 'U'
//   ) {
//     arrStr.splice(i, 1);
//   }
// }
// return arrStr.join('');

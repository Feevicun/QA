function pow(x, y) {
  // чи x і y — числа
  if (typeof x !== 'number' || typeof y !== 'number') {
    return 'Помилка: обидва аргументи мають бути числами';
  }

  // чи y — ціле невід’ємне число
  if (!Number.isInteger(y) || y < 0) {
    return 'Помилка: степінь повинна бути цілим невід’ємним числом';
  }

  // Обчислення x^y
  let result = 1;
  for (let i = 0; i < y; i++) {
    result *= x;
  }

  return result;
}

// Приклади
console.log(pow(2, 3));    // 8
console.log(pow(5, 0));    // 1
console.log(pow(3, 1));    // 3
console.log(pow('a', 2));  // Error
console.log(pow(2, -1));   // Error

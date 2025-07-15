// 1. 'number' + 3 + 3
// Спочатку 'number' + 3 → перетворюється в рядок: 'number3'
// Потім 'number3' + 3 → знову конкатенація: 'number33'
// Бо при додаванні рядка з числом — число автоматично перетворюється в рядок
console.log("'number' + 3 + 3 =", 'number' + 3 + 3); // 'number33'

// 2. null + 3
// null перетворюється в 0 при додаванні → 0 + 3 = 3
console.log("null + 3 =", null + 3); // 3

// 3. 5 && "qwerty"
// 5 — істинне значення (не 0, не null, не undefined)
// Оператор && повертає останнє значення, якщо всі умови істинні
// Тому повертає "qwerty"
console.log("5 && 'qwerty' =", 5 && "qwerty"); // "qwerty"

// 4. +'40' + +'2' + 'hillel'
// +'40' → 40 (унарний плюс перетворює рядок у число)
// +'2' → 2
// 40 + 2 = 42
// 42 + 'hillel' → число перетворюється в рядок → '42hillel'
console.log("+'40' + +'2' + 'hillel' =", +'40' + +'2' + "hillel"); // "42hillel"

// 5. '10' - 5 === 6
// '10' → 10 (рядок перетворюється в число при відніманні)
// 10 - 5 = 5
// 5 === 6 → false
console.log("'10' - 5 === 6 =", '10' - 5 === 6); // false

// 6. true + false
// true → 1, false → 0 (в арифметичних операціях)
// 1 + 0 = 1
console.log("true + false =", true + false); // 1

// 7. '4px' - 3
// '4px' → NaN (неможливо перетворити в число)
// NaN - 3 → NaN (будь-яка операція з NaN → NaN)
console.log("'4px' - 3 =", '4px' - 3); // NaN

// 8. '4' - 3
// '4' → 4 (рядок перетворюється в число)
// 4 - 3 = 1
console.log("'4' - 3 =", '4' - 3); // 1

// 9. '6' + 3 ** 0
// 3 ** 0 → 1 (будь-яке число в нульовому степені = 1)
// '6' + 1 → '61' (число + рядок → конкатенація)
console.log("'6' + 3 ** 0 =", '6' + 3 ** 0); // '61'

// 10. 12 / '6'
// '6' → 6 (перетворення рядка у число)
// 12 / 6 = 2
console.log("12 / '6' =", 12 / '6'); // 2

// 11. '10' + (5 === 6)
// 5 === 6 → false (строге порівняння: різні значення)
// '10' + false → '10false' (рядок + логічне значення → перетворюється в рядок)
console.log("'10' + (5 === 6) =", '10' + (5 === 6)); // '10false'

// 12. null == ''
// null і '' (порожній рядок) — різні типи, але оператор == може робити нестроге порівняння
// Проте null == '' → false (null дорівнює тільки undefined)
console.log("null == '' =", null == ''); // false

// 13. 3 ** (9 / 3)
// 9 / 3 = 3
// 3 ** 3 = 27 (3 в третьому степені)
console.log("3 ** (9 / 3) =", 3 ** (9 / 3)); // 27

// 14. !!'false' == !!'true'
// 'false' → непорожній рядок → Boolean('false') → true
// те саме для 'true'
// !!'false' → true, !!'true' → true
// true == true → true
console.log("!!'false' == !!'true' =", !!'false' == !!'true'); // true

// 15. 0 || '0' && 1
// '0' → непорожній рядок → true
// '0' && 1 → 1
// 0 || 1 → 1
console.log("0 || '0' && 1 =", 0 || '0' && 1); // 1

// 16. (+null == false) < 1
// +null → 0
// 0 == false → true (нестроге порівняння)
// true < 1 → 1 < 1 → false
console.log("(+null == false) < 1 =", (+null == false) < 1); // false

// 17. false && true || true
// false && true → false
// false || true → true
console.log("false && true || true =", false && true || true); // true

// 18. false && (false || true)
// (false || true) → true
// false && true → false
console.log("false && (false || true) =", false && (false || true)); // false

// 19. (+null == false) < 1 ** 5
// +null → 0
// 0 == false → true
// 1 ** 5 = 1
// true < 1 → 1 < 1 → false
console.log("(+null == false) < 1 ** 5 =", (+null == false) < 1 ** 5); // false

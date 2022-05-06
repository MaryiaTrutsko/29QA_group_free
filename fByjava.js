// userFirstName и userLastName – параметры (userFirstName будет иметь значение первого аргумента, а userLastName соответственно второго в момент вызова этой функции)
function sayWelcome (userFirstName, userLastName) {
  console.log(`Добро пожаловать, ${userLastName} ${userFirstName}`);
}
// 'Иван' и 'Иванов' – аргументы
sayWelcome('Иван', 'Иванов'); // Добро пожаловать, Иванов Иван
// 'Петр' и 'Петров' – аргументы
sayWelcome('Петр', 'Петров'); // Добро пожаловать, Петров Петр



 // 1. Написать скриптик, который сосчитает и  выведет результат от возведения 2 в степень 10, 
// начиная со степени 1?

const c = 2
let d = 1
while (d <=10) {
    console.log (c**d);
    d++;
}

//  1*. Преобразовать 1 задачу в функцию, 
// принимающую на вход степень, в которую будет возводиться число 2

// function two(b) {
//  const a = 2
// {    console.log (a**b);
// }}
// two(8)


// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, 
//  чтобы в первой строчке выводилось :), во второй :):) и тд
function* smiliki(gorka) {
  let smile = ":)"                      
      for (let i = 0; i < gorka; i++) {
    yield smile 
      smile += ":)"                  
  }                                    
}
  for (let line of smiliki(5)) {
  console.log(line)
}

// Или еще вариант:
let smile = ':)'
let numberRows = 0
while (numberRows < 5) {
    console.log (smile)
    smile +=':)'
    numberRows++
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку,
// которая и будет выводиться в консоль (как в условии смайлик), 
// а также количество строк для вывода e.g. function printSmile(stroka, numberOfRows)

let number = 1

function printSmile(stroka, numberRows) {
 while (number <= numberRows)
 {
       number++
       console.log (stroka +=':)')
}
}
printSmile ('',5)



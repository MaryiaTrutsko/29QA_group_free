// 1*Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Вывести в консоль результат работы функции с возрастами 17, 18, 61
const age_1 = 10;
const age_2 = 18;
const age_3 = 60;

// const checkAge = function(age) {
//     if (age < age_2) {
//         console.log("You do not have access cause your age is " + age + " It is less than " + age_2)
//     } 
//     else if (age >=  age_2 && age < age_3) {
//         console.log("Welcome  !")
//     }
//     else if (age > age_3) {
//          console.log("Keep calm and look Culture channel")
//     }
//     else {
//          console.log("Technical work")
//     }
// }
// checkAge(17)
// checkAge(18)
// checkAge(61)


// 2*: Преобразовать задание 1* таким образом, 
// чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
// const checkAge = function(age) {
//     if (typeof age == "number") {
//     if (age < age_2) {
//         console.log("You do not have access cause your age is " + age + " It is less than " + age_2)
//     } 
//     else if (age >=  age_2 && age < age_3) {
//         console.log("Welcome  !")
//     }
//     else if (age > age_3) {
//          console.log("Keep calm and look Culture channel")
//     }
//     else {
//          console.log("Technical work")
//     }
// } else  { console.log ('Not integer value')}
// }
// checkAge(17)
// checkAge('afdg')

// 3**: Преобразовать 2* таким образом, чтобы значение '2'
//  (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

const checkAge = function(age) {
    age = Number(age)
    console.log(age)
    if (!isNaN(age)) {
    if (age < age_2) {
        console.log("You do not have access cause your age is " + age + " It is less than " + age_2)
    } 
    else if (age >=  age_2 && age < age_3) {
        console.log("Welcome  !")
    }
    else if (age > age_3) {
         console.log("Keep calm and look Culture channel")
    }
    else {
         console.log("Technical work")
    }
} else  { console.log ('Not integer value')}
}
checkAge(17)
checkAge('22')

// let arr = [];


// arr = [1, 5,];
// // console.log(arr);

// arr.push('Hello');
// console.log(arr);

// let a = [1, 'hello', 5, 7, 'Petro'];

// console.log(a[3]);

// a[4] = 8;
// console.log(a);
// a.length = 0;
// console.log(a);

// let b = [1, 2, 3, 4, 5];
// let sum1 = 0;

// // b.forEach(element => sum1 += element);
// b.forEach(function (element, index, array) {
//     sum1 += element;
//     console.log('Елемент',element);
//     console.log(index);//
//     console.log(array);
// });

// console.log(sum1);

// let sum = 0;// для того щоб ця змінна накопичує дані
// for (let i = 0; i < b.length; i++) {

//     sum += b[i];
//     console.log(b[i]);
// };
// console.log(sum);


// let c = [1, 2, 3, 4, 5];
// let n = c.map(function (element) {

//     if (element % 2 == 0) {
//         return "Парне число";
//     } else {
//         return "НЕ парне";
//     };
// }
// );

// console.log(n);


// function getCountNumberArrey(arr) {
//     let sum = arr.forEach(function (element) {// фор іч ніколи нічого не повертає
//         if (typeof (element) === 'number') {
//             sum += 1;
//         }
//          })
//     return sum;
// }
// console.log(getCountNumberArrey([1, 2, "true", true, undefined, 5]));


//      Подібна функція(подібна  до останьої) приймає  2 парамитри перше масив
//  , другий це тип даних у вигляді строки.
//  Потрібно повернути кількість скільки  разів входжень типу даних
// який був переданий другим парамитром.
// приклад :
//      function ([1, 4, true, undefined], 'boolean') результатом має
// бути 1.
// з допомогою метода масива фільтер.

// function getCountNumberParameterArrey(array, text) {
//     let result = 0;
//     let sum = array.filter(function (item) {
//         if (typeof (item) == text) {
//             return  result += 1;
//         }

//     });
//     return result;
// }
// console.log(getCountNumberParameterArrey([1, 2, undefined, true, "Hello World!"], 'boolean'));

// Приклад методу фільтер.
// ---
// let a = [1, 2, undefined, true, "Hello World!"];

// let c = a.filter(function (value) {


//     return typeof(value) == 'number';
// });
// console.log(c);
// -----

// let results = ardas.filter(function (item) {
//     // если true - элемент добавляется к результату, и перебор продолжается
//     // возвращается пустой массив в случае, если ничего не найдено
// });
// console.log(results);

//      Написати функцію яка приймає в себе два мисива( з числами ) знайти суму 2 масивів
// та знайти суму чисел в масиві і повернути ретьорном знайчення.


// function getSumArrays(array1, array2) {
    
// let arrSum = [...array1, ...array2 ];

// let resultSum = arrSum.reduce((sum, item) => sum + item, 0);

// return resultSum; // 15

// }

// console.log(getSumArrays([1, 4, 7, 9, 15], [3, 6, 8, 9, 16, 6]));

// метод редюс і спред оператор

function getSumArrays(array1, array2) {

    let arrAll = array1.concat(array2);

    let sumArrys = 0;
        arrAll.forEach(
        function (element) {
            sumArrys += element;
        }
            
    );
    return sumArrys;
}
console.log(getSumArrays([4, 6, 8, 4, 45, 76], [3, 7, 8, 5, 9, 5]));
// і другим способом комкат і фор ідж.


// підготувати методи які вище використовую ( також мап фор ідж) ,
//  повторити обєкти, методи та перебори обєктів.звернення до 
//  елементів як замінити елементи.
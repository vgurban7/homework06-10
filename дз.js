// // первая часть

// function itemCounter() { }

// itemCounter(["red", "gray", "green", "green", "gray", "gray"]); // {red: 1, gray: 3, green: 2}

// function summ() { // через reduce

// }

// summ([4, 6, 1, 2, -8, 7]) // 12

// function summToFirstZeroElem() { // сумма до первого нуля в массиве , через reduce

// }
// summToFirstZeroElem([4, 6, 1, 0, 2, -8, 7]) // 11


//-------------------------------------------------------------------------------------------------------------//
function itemCounter(arr) {
   let obj = {}

   obj = arr.reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
   }, {})

   console.log(obj);

}

itemCounter(["red", "gray", "green", "green", "gray", "gray", 'gray', 'blue']); // {red: 1, gray: 3, green: 2}


//-------------------------------------------------------------------------------------------------------------//

function summ(arr1) { // через reduce

   const sum2 = arr1.reduce((prev, item) => {
      return prev + item
   }, 0)
   return sum2
}

console.log(summ([4, 6, 1, 2, -8, 7]));  // 12

//-------------------------------------------------------------------------------------------------------------//


function summToFirstZeroElem(arr2) { // сумма до первого нуля в массиве , через reduce
   let sum3 = 0;
   sum3 = arr2.reduce((prev, item) => {
      if (item === 0) {
         arr2.splice(1)
      }
      return prev + item

   })

   return sum3
}

console.log(summToFirstZeroElem([4, 6, 1, 0, 2, -8, 7]));  // 11

// вторая часть

// Разместить на странице несколько картинок. При клике на любую картинку,
// она плавно становится на бэкграунд всей страницы,
// а тег картинки получает уникальные css свойства (чтобы было понятно, что сейчас эта картинка
// является выбранным элементом(например бордер появляется жирный или чет еще)).
// При перезагрузке страницы последнее выбранное
// состояние должно сохраниться, реализовать через LocalStorage.

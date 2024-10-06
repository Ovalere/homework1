// Задание 1
// Дан массив: [1, 5, 4, 10, 0, 3].
// Создайте цикл, который будет выводить элементы массива до тех пор,
//  пока не встретит значение 10. После вывода значения 10 в консоль 
//  цикл должен прекратить свою работу.

const number= [1, 5, 4, 10, 0, 3];

for (let i = 0; i < number.length; i++) {
    if (number[i] === 10) {
        console.log(number[i]);
        break; 
    }
    console.log(number[i]);
}

// Задание 2
// Дан массив: [1, 5, 4, 10, 0, 3]
// Найдите индекс значения 4 в этом массиве.

const array = [1, 5, 4, 10, 0, 3];
const index = array.includes(4);
console.log(index);

// Задание 3
// Дан массив чисел: [1, 3, 5, 10, 20]
// С помощью метода join выведите элементы массива 
// через пробел (пустую строку ' ').

const numbers = [1, 3, 5, 10, 20];
const result = numbers.join(' ');
console.log(result);

// Задание 4
// С помощью вложенных циклов создайте многомерный 
// массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]]



//  Задание 5
// Дан массив: [1, 1, 1]. Добавьте в конец массива
//  значения 2, 2, 2.

const arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);

// Задание 6
// Дан массив: [9, 8, 7, 'a', 6, 5]
// С помощью метода sort отсортируйте массив и удалите
//  букву 'a' из массива. Затем выведите массив.

const arr = [9, 8, 7, 'a', 6, 5];
arr.sort();
arr = arr.filter(item => item !== 'string');
console.log(arr);

// Задание 7
// Дан массив: [9, 8, 7, 6, 5]
// Попросите пользователя угадать число с помощью 
// метода prompt. Если значение, которое ввел 
// пользователь, есть в массиве, выведите в alert
//  «Угадал», в противном случае — «Не угадал».

const arr = [9, 8, 7, 6, 5]
let userInput = prompt ('Угадай число из 9, 8, 7, 6, 5');
if (userInput==arr) {
    alert("Угадал");
} else {
    alert("Не угадал");
}
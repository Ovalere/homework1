// 1)Выведите в консоль 2 раза слово 
// «Привет»

let i = 1;
let n = Number (prompt ('сколько раз сказать привет'));
while ( i <=n) {
console.log('привет');
i++;
}

// Задание 2
// Выведите в консоль цифры от 1 до 5

for (let i = 1; i<=5; i++) {
    console.log (i);
}
    
// Задание 3
// Выведите в консоль числа от 7 до 22


for (let i = 7; i<=22; i++) {
    console.log (i);
}

// Задание 4
// Есть объект (назовем его obj), который содержит следующие
//  пары ключ-значение:
// "Коля" : '200'
// "Вася" : '300'
// "Петя" : '400'
// Эти пары представляют собой имена сотрудников и их 
// зарплаты в долларах. Ваша задача написать код, который
//  будет проходиться по всем записям этого объекта и 
//  выводить информацию о каждом сотруднике в 
//  формате: "имя сотрудника" — зарплата "сумма" долларов.

const obj = {
    'Коля' : '200',
    'Вася' : '300',
    'Петя' : '400',
}
for (const key in obj) {
    console.log (`${key} : ${obj[key]}`);
}

// Задание 5
// Дано число n=1000. Ваша задача — делить его на 
// 2 до тех пор, пока результат деления не станет меньше 50.

// Определите, какое число получится в результате.
// Вычислите количество итераций (проходов цикла), которые
//  потребовались для достижения результата, и запишите это
//   количество в переменную num.

let n=1000
let num=0
while (n>=50) {
    n/=2;
    num++;
    console.log(n);
}
    console.log(num)

    // Задание 6
    // В вашей компании пятница является отчетным днем.
    // Нужно написать программу, которая:
    // считает дни месяца по датам,
    // определяет, какой день пятница,
    // выводит сообщение с напоминанием, что нужно
    //  подготовить еженедельный отчет.
    // Условия задачи:
    // Создайте переменную, которая хранит в себе 
    // номер первой пятницы месяца (число от 1 до 7).
    // Выведите на каждую пятницу месяца (включая полученную)
    // сообщение следующего вида:
    //  "Сегодня пятница, ...-е число. Необходимо подготовить отчет."
    // Исходите из того, что в нашем месяце 31 день. 
    // Должно вывестись от 4 до 5 сообщений с напоминаниями по 
    // разным датам.

    let day=5;
    let month=31;
    for (let i = day; i <= month; i+=7) {
        console.log (`Сегодня пятница, ${i} число. Необходимо подготовить отчет.`)
    }
    
    
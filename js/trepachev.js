//1/
//С помощью цикла for выведите в консоль числа от 1 до 100.
//
// for(let i = 1; i <= 100; i++){
//     console.log(i)
// }
//


//2/
//С помощью цикла for выведите в консоль числа от 11 до 33.
//
// for(let i = 11; i <= 33; i++){
//     console.log(i)
// }
//


//3/
//С помощью цикла for выведите в консоль четные числа в промежутке от 0 до 100.
//
// for(let i = 0; i <= 100; i+=2){
//     console.log(i)
// }
//


//3/
//С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.
//
// for(let i = 1; i <= 99; i+=2){
//     console.log(i)
// }
//


//4/
//С помощью цикла for выведите в консоль числа от 100 до 0.
//
// for(let i = 100; i >= 0; i--){
//     console.log(i)
// }
//


//5/
//Найдите произведение целых чисел от 1 до 20.
//
// let result = 1;

// for (let i = 1; i <= 20; i++) {
// 	result = result * i;
// }
// console.log(result);
//


//6/
//Найдите сумму четных чисел от 2 до 100.
//
// let result = 0;

// for (let i =0; i <= 100; i+=2) {
//     result = result + i;
// }
// console.log(result);
//


//7/
//Найдите сумму нечетных чисел от 1 до 99.
//
// let result = 0;

// for (let i =1; i <= 99; i+=2) {
//     result = result + i;
// }
// console.log(result);
//


//8/
//Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. С помощью цикла for выведите все эти элементы на экран
//
// let arr = ['a', 'b', 'c', 'd', 'e'];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// };
//


//9/
//Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for и оператора if выведите в консоль нечетные элементы массива.
//
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 ===1){
//         console.log(arr[i]);
//     }
// };
//


//10/
//Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for найдите произведение элементов этого массива.
//
// let result = 1;
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
// 	result *= arr[i];
// }

// console.log(result);
//


//11/
//Дан массив с элементами 2, 5, 9, 15, 1, 4. С помощью цикла for и оператора if выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.
//
// let arr = [2, 5, 9, 15, 1, 4];

// for (let i = 0; i < arr.length; i++) {
// 	if(arr[i] > 3 & arr[i] < 10){
//         console.log(arr[i]);
//     }
// }
//


//12/
//Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
//
// let result = 0;
// let arr = [1, -2, 3, -4, 5];

// for (let i = 0; i < arr.length; i++) {
// 	if(arr[i] > 0){
//         result += arr[i]
//     }
// }
// console.log(result);
//


//13/
//Дан массив arr. Найдите среднее арифметическое его элементов (сумма делить на количество). Проверьте задачу на массиве с элементами 1, 2, 3, 4, 5.
//
// let result = 0;
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     result += arr[i]
// }
// console.log(result / arr.length);
//


//14/
//Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. С помощью цикла for-of выведите все эти элементы на экран.
//
// let arr = ['a', 'b', 'c', 'd', 'e'];

// for (let elem of arr) {
// 	console.log(elem);
// }
//


//15/
//Пусть у вас есть массив с названиями месяцев. С помощью цикла выведите на экран все месяцы из массива. Определите, каким циклом удобнее будет решить эту задачу: циклом for-of или обычным for со счетчиком.
//
// let arr = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

// for (let elem of arr) {
// 	console.log(elem);
// }

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
//


//16/
//Дан массив с числами. Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.
//
// s
//


//17/
//Дан массив с числами. Найдите сумму элементов, расположенных от начала массива до первого отрицательного числа.
//
// let arr = [1, 2, 3, 4, 5, -2, 6];
// let result = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 0){
//         break
//     }
//     result += arr[i]; 

// }
// console.log(result);
//


//18/
//Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите 'да', а если нет - выведите 'нет'.
//
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let flag = false;

// for (let elem of arr) {
// 	if (elem == 'c') {
// 		flag = true;
// 		break;
// 	}
// }

// if (flag === true) {
// 	console.log('есть');
// } else {
// 	console.log('нет');
// }
//


//19/
//Давайте напишем код, который будет проверять число на то, простое оно или нет. 
//
// let num = 31;

// let flag = true;
// for (let i = 2; i < num; i++) {
// 	if (num % i == 0) {
// 		flag = false;
// 		break; 
// 	}
// }
// console.log(flag);
//


//20/
//Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат деления не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.
//
// let num = 100;
// while(num < 1000){
//     num = num * 3;
//     console.log(num);
// }
//


//21/
//С помощью цикла сформируйте строку, заполненную 5-тью нулями.
//
// let str = '';

// for(let i = 0; i < 5; i++){
//     str += '0'
// }
// console.log(str);
//


//22/
//С помощью цикла сформируйте строку 123456789 и запишите ее в переменную str. Выведите значение этой переменной на экран.
//
// let str = '';

// for(let i = 1; i <= 9; i++){
//     str += i
// }
// console.log(str);
//


//23/
//С помощью цикла сформируйте строку 987654321 и запишите ее в переменную str. Выведите значение этой переменной на экран.
//
// let str = '';

// for(let i = 9; i >= 1; i--){
//     str += i
// }
// console.log(str);
//


//24/
//С помощью цикла сформируйте строку -1-2-3-4-5-6-7-8-9- и запишите ее в переменную str. Выведите значение этой переменной на экран.
//
// let str = '';

// for(let i = 1; i <= 9; i++){
//     str = `${str}-${i}`;
// }
// console.log(str + '-');
//


//25/
//Переберите циклом числа от 1 до 30 и сложите их как строки.
//
// let str = '';

// for(let i = 1; i <= 30; i++){
//     str += i
// }
// console.log(str);
//


//26/
//С помощью цикла заполните массив числами от 1 до 100.
// let arr = [];
// for(let i = 0; i < 100; i++){
//     arr[i] = i + 1;
// }
// console.log(arr);
//


//27/
//С помощью цикла заполните массив нечетными числами в промежутке от 1 до 99.
// let arr = [];

// for (let i = 1, j = 0; i <= 99; i += 2, j++) {
// 	arr[j] = i;
// }

// console.log(arr);
//


//28/
//Дан массив с числами. Переберите этот массив циклом и возведите каждый элемент этого массива в квадрат.
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
// arr[i] **= 2;
// }
// console.log(arr);
//


//29/
//Дан массив с числами. Переберите этот массив циклом и отнимите от каждого элемента единицу.
//
// let arr = [1, 2, 3, 4, 5];
// for(let i = 0; i < arr.length; i++){
//     arr[i] -= 1;
// }
// console.log(arr);
//


//30/
//Дан массив с числами. Переберите этот массив циклом и прибавьте к каждому элементу 10
//
// let arr = [1, 2, 3, 4, 5];
// for(let i = 0; i < arr.length; i++){
//     arr[i] += 10;
// }
// console.log(arr);
//


//31/
//Используя цикл и метод push заполните массив числами от 1 до 10.
//
// let arr = [];
// for(let i = 1; i <= 10; i++){
//     arr.push(i)
// }
// console.log(arr);
//


//32/
//Используя цикл и метод push заполните массив 10-ю буквами x.
//
// let arr = [];
// for(let i = 1; i <= 10; i++){
//     arr.push('x')
// }
// console.log(arr);
//


//33/
//Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.
//
// let arr = [1, 2, -3, 4, -5];
// let result = [];

// for (let elem of arr) {
// 	if (elem >= 0) {
// 		result.push(elem);
// 	}
// }

// console.log(result);
//


//34/
//Давайте выполним переворот массива, то есть, к примеру из массива [1, 2, 3, 4, 5] сделаем массив [5, 4, 3, 2, 1].
//1/
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let result = [];

// for (let i = arr.length - 1; i >= 0; i--) {
// 	result.push(arr[i]);
// }

// console.log(result);

//2/
// arr.reverse()
// console.log(arr)
//


//35/
//Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера и наоборот 
//
// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let obj = {};
// for(let i = 0; i < arr1.length; i++){
//     obj[arr2[i]] = arr1[i];
// }
// console.log(obj);
//


//36/
//Запишите в новый объект те элементы, значения которых расположены в промежутке от 10 до 20.
//
// let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
// let result = {};

// for (let key in obj) {
// 	if (obj[key] > 10 & obj[key] < 20) {
// 		result[key] = obj[key];
// 	}
// }

// console.log(result);
//


//37/
//Запишите в новый объект дни недели, номера которых являются нечетными числами.
//
// let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
// let result = {};

// for (let key in obj) {
// 	if (key % 2 != 0) {
// 		result[key] = obj[key];
// 	}
// }

// console.log(result);
//


//38/
//Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.
//
// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

// for (let key in obj) {
// 	obj[key] = obj[key] ** 2;
// }

// console.log(obj);
//


//39/
//
//
// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let result = {};

// for (let key in obj) {
// 	result[obj[key]] = key;
// }

// console.log(result);
//


//40/
//Дан следующий объект с работниками и их зарплатами:Увеличьте зарплату каждого работника на 10%.
//
// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };

//     for (let key in obj) {
//     obj[key] += (obj[key] / 100) * 10;
//     }
//     console.log(obj);
//


//41/
//Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.
//
// let obj = {
//     employee1: 100,
//     employee2: 200,
//     employee3: 300,
//     employee4: 400,
//     employee5: 500,
//     employee6: 600,
//     employee7: 700,
//     };
    
//         for (let key in obj) {
//             if(obj[key] <= 400){
//                obj[key] += (obj[key] / 100) * 10; 
//             }
        
//         }
//         console.log(obj);
//


//42/
//Даны следующие массивы:С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.
//
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let result = {};

//     for(let i = 0; i < arr1.length; i++){
//         result[arr1[i]] = arr2[i];
//     }
//     console.log(result);
//


//43/
//Найдите сумму ключей этого объекта и поделите ее на сумму значений.
//
// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// let result = 0;
// let sum1 = 0;
// let sum2 = 0;
// for (let key in obj) {
// sum1 += +key;
// sum2 += obj[key];

// }
// result = sum1 / sum2;
// console.log(result);
//


//44/
//Запишите ключи этого объекта в один массив, а значения - в другой.
//
// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let arr1 = [];
// let arr2 = [];

// for(let key in obj){
//     arr1.push(key);
//     arr2.push(obj[key])
// }
// console.log(arr1);
// console.log(arr2)
//


//45/
//Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2.То есть у вас в результате получится вот такой массив:
// let arr = [
// 	125,
// 	225,
// 	128,
// 	145,
// 	281,
// ];
//
// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };
// let arr = []

// for(let key in obj){
//     if(obj[key] > 100 & obj[key] < 300){
//         arr.push(obj[key])
//     }

// }
// console.log(arr)
//



//47/
//Дан следующий массив:
// let arr = ['a', 'b', 'c', 'd', 'e'];
// Создайте из этого массива следующий объект:
// let arr = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
//
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};

// for(let i = 0; i < arr.length; i++){
//     obj[arr[i]] = 1 + i;
// }
// console.log(obj);
//


//48/
//Подсчитайте количество цифр 3 в этом массиве.
//
// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let counter = 0;

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] === 3){
//         counter++
//     }
// }
// console.log(`Цыфра 3 повторяется: ${counter} раза!`);
//


//49/
//Модифицируйте предыдущую задачу так, чтобы в одном цикле одновременно подсчитывалось и количество троек, и количество двоек.
//
// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let counter1 = 0;
// let counter2 = 0;

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] === 3){
//         counter1++
//     }else if(arr[i] === 2){
//         counter2++
//     }
// }
// console.log(`Цыфра 3 повторяется: ${counter1} раза!`);
// console.log(`Цыфра 2 повторяется: ${counter2} раза!`);
//


//50/
//Давайте подсчитаем сколько каких элементов есть в этом массиве и представим результат в виде объекта
//
// let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
// let count = {};

// for (let elem of arr) {
// 	if (count[elem] === undefined) {
// 		count[elem] = 1;
// 	} else {
// 		count[elem]++;
// 	}
// }

// console.log(count);
//


//51/
//Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите следующий элемент массива.
//
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i + 1]);
// }
//


//52/
//Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма текущего и следующего элемента массива.
//
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i + 1] + arr[i]);
// }
//


//53/
//Разберите мое решение описанной задачи, а затем самостоятельно, не подсматривая в мой код, решите эту задачу.
//
// let one = 0;
// let two = 1;

// for (let i = 1; i <= 10; i++) {
// 	let current = one + two;
	
// 	one = two;
// 	two = current;
	
// 	console.log(current);
// }
//


//54/
//Решите задачу на нахождение ряда чисел, каждое из которых равно сумме трех предыдущих, а первые три числа равны 0, 1 и 2.
//
// let one = 0;
// let two = 1;
// let three = 2

// for (let i = 1; i <= 10; i++) {
// 	let current = one + two + three;
	
// 	one = two;
// 	two = three;
// 	three = current;
	
// 	console.log(current);
// }
//


//55/
//Выведите на экран следующую пирамидку:
// xx
// xxxx
// xxxxxx
// xxxxxxxx
// xxxxxxxxxx
//
// let str = '';

// for (let i = 0; i < 5; i++) {
//     str += 'xx';
//     document.querySelector('.out').innerHTML += str + '<br>';
	
// }



//56/
//Давайте теперь выведем на экран следующую пирамидку:
// 111
// 222
// 333
// 444
// 555
// 666
// 777
// 888
// 999
//
// for (let i = 1; i <= 9; i++) {
// 	for (let j = 1; j <= 3; j++) {
// 		document.querySelector('.out').innerHTML += i;
//     }
//     document.querySelector('.out').innerHTML += '<br>';
// }
//


//57/
//Выведем теперь следующую пирамидку:
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
//
// for (let i = 1; i <= 9; i++) {
// 	for (let j = 1; j <= i; j++) {
// 		document.querySelector('.out').innerHTML += i;
// 	}
	
// 	document.querySelector('.out').innerHTML += '<br>';
// }
//


//58/
//Выведите на экран следующую пирамидку:
// 1
// 333
// 55555
// 7777777
// 999999999
//
// for (let i = 1; i <= 9; i+=2) {
// 	for (let j = 1; j <= i; j++) {
//         document.querySelector('.out').innerHTML += i;
//     }
// 	document.querySelector('.out').innerHTML += '<br>';
// }
//


//59/
//Выведите на экран следующую пирамидку:
// xxxxxxxxxx
// xxxxxxxx
// xxxxxx
// xxxx
// xx
//
// for (let i = 5; i >= 1; i--) {
// 	let str = '';
	
// 	for (let j = 0; j < i; j++) {
// 		str += 'xx';
// 	}
	
// 	document.querySelector('.out').innerHTML += str + '<br>';
// }
//


//60/
//Выведите на экран следующую пирамидку:
// 999999999
// 88888888
// 7777777
// 666666
// 55555
// 4444
// 333
// 22
// 1
//
// for (let i = 9; i >= 1; i--) {
// 	for (let j = 1; j <= i; j++) {
// 		document.querySelector('.out').innerHTML += i;
// 	}
	
// 	document.querySelector('.out').innerHTML += '<br>';
// }
//


//61/
//С помощью цикла сформируйте следующий массив:
// ['xx', 'xxxx', 'xxxxxx', 'xxxxxxxx', 'xxxxxxxxxx']
//
// let arr = [];
// let str = '';

// for (let i = 0; i < 5; i++) {
// 	str += 'xx';
// 	arr.push(str);
// }

// console.log(arr);
//


//62/
//С помощью цикла сформируйте следующий массив:
// ['11111', '22222', '33333', '44444', '55555']
//
// let arr = [];

// for (let i = 1; i <= 5; i++) {
// 	let str = '';
// 	for (let j = 1; j <= 5; j++) {
// 		str += i;
// 	}
// 	arr.push(str);
// }
// console.log(arr);
//


//63/
//Заполните массив числами от 1 до 10 с помощью цикла.
//
// let arr = [];
// let str = '';
// for (let i = 1; i <= 10; i++) {
// 	str = i;
// 	arr.push(str);
// }
// console.log(arr);
//


//64/
//Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
//
// let arr = [1, 2, 3, 4, 5, 6]
// for(let i = 0; i <= arr.length; i++){
//     if(arr[i] === 5){
//         console.log(true)
//     }
// }
//


//65/
//Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
//
// let array = [1, 2, 3, 4, 5, 6];
// let result = 0;
// for (let i = 0; i < array.length; i++) {
//   result += array[i];
// }
// console.log(result);
//


//66/
//Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.
//
// let fac = 1;
// let num = 5;
// for (let i = 1; i <= num; i++) {
// fac *= i;
// }
// console.log(fac);
//


//67/
//Дан следующий массив:Выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'.
//
// let arr = [
// 	['a', 'b', 'c'],
// 	['d', 'e', 'f'],
// 	['g', 'h', 'i'],
// 	['j', 'k', 'l'],
// ];
// console.log(arr[3][2], arr[1][1], arr[2][0], arr[0][0])
//


//68/
//Дан следующий массив: Найдите сумму всех его элементов.
//
// let arr = [[1, 2], [3, 4], [5, 6]];
// let sum = 0;
// sum = arr[0][0] + arr[0][1] + arr[1][0] + arr[1][1] + arr[2][0] + arr[2][1];
// console.log(sum)
//


//69/
//Дан следующий массив:Найдите сумму всех элементов приведенного массива.
//
// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum =
// arr[0][0][0] +
// arr[0][0][1] +
// arr[0][1][0] +
// arr[0][1][1] +
// arr[1][0][0] +
// arr[1][0][1] +
// arr[1][1][0] +
// arr[1][1][1];
// console.log(sum);
//


//70/
//С помощью вложенных циклов найдите сумму элементов этого массива.
//
// let arr = [[1, 2, 3], [4, 5], [6]];
// let result = 0;
// for (let subArr of arr) {
// 	for (let elem of subArr) {
// 		result += elem; 
// 	}
// }
// console.log(result);
//


//71/
//
//
// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let result = 0;
// for (let subArr of arr) {
// 	for (let elem of subArr) {
// 		for(let i of elem){
//             result += i; 
//         }
// 	}
// }
// console.log(result);
//


//72/
//Решите предыдущие две задачи через цикл for.
//
// let arr = [[1, 2, 3], [4, 5], [6]];
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr[i].length; j++) {
// 		result += arr[i][j]
// 	}
// }
// console.log(result);
//

// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr[i].length; j++) {
//         for(let k = 0; k < arr[i][j].length; k++){
//             result += arr[i][j][k];
//         }
		
// 	}
// }
// console.log(result);
//


//73/
//Сформируйте с помощью двух вложенных циклов следующий массив:[[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
//
// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 5; j++) {
// 		arr[i].push(j + 1);
// 	}
// }
// console.log(arr);
//


//74/
//Сформируйте с помощью двух вложенных циклов следующий массив:
// [['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x']]
//
// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 4; j++) {
// 		arr[i].push('x');
// 	}
// }
// console.log(arr);
//


//75/
//Сформируйте с помощью трех вложенных циклов следующий массив:
// [[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// ]
//
// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
//         arr[i].push([]);
//         for(let k = 0; k < 5; k++){
//             arr[i][j].push(k + 1)
//         }
// 	}
// }
// console.log(arr);
//


//76/
//Сформируйте с помощью двух вложенных циклов следующий массив:
// [[1, 2], [3, 4], [5, 6], [7, 8]]
//
// let arr = [];
// let k = 1; // счетчик

// for (let i = 0; i < 4; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 2; j++) {
// 		arr[i][j] = k; // записываем счетчик
// 		k++; // увеличиваем счетчик
// 	}
// }
// console.log(arr);
//


//77/
//Сформируйте с помощью двух вложенных циклов следующий массив:
// [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]
//
// let arr = [];
// let k = 2; // счетчик

// for (let i = 0; i < 4; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k; // записываем счетчик
// 		k += 2; // увеличиваем счетчик
// 	}
// }
// console.log(arr);
//


//78/
//Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:
// [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
//
// let arr = [];
// let a = 1; // счетчик

// for (let i = 0; i < 2; i++) {
// 	arr[i] = [];
	
// 	for (let j = 0; j < 2; j++) {
// 		arr[i][j] = []; 
// 		for(let k = 0; k < 2; k++){
//             arr[i][j][l] = a++;
//         }
// 	}
// }
// console.log(arr);
//


//79/
//Дан следующий объект:Выведите на экран элемент 'b2' и элемент 'c1'.
//
// let obj = {
// 	1: {
// 		1: 'a1',
// 		2: 'a2',
// 		3: 'a3',
// 	},
// 	2: {
// 		1: 'b1',
// 		2: 'b2',
// 		3: 'b3',
// 	},
// 	3: {
// 		1: 'c1',
// 		2: 'c2',
// 		3: 'c3',
// 	},
// }
// console.log(obj[2][2]);
// console.log(obj[3][1]);
//


//80/
//Используя циклы, найдите сумму элементов этого объекта.
//
// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }
// let result = 0;

// for (let key in obj) {
// 	let subObj = obj[key];
	
// 	for (let subKey in subObj) {
//         result += subObj[subKey]
		
// 	}
// }
// console.log(result);
//


//81/
//Пусть даны также 3 переменные, содержащие год, месяц и день. Выведите дело, соответствующее значениям переменных.
//
// let affairs = {
// 	'2018': {
// 		11: {
// 			29: ['дело111', 'дело112', 'дело113'],
// 			30: ['дело121', 'дело122', 'дело123'],
// 		},
// 		12: {
// 			30: ['дело211', 'дело212', 'дело213'],
// 			31: ['дело221', 'дело222', 'дело223'],
// 		},
// 	},
// 	'2019': {
// 		12: {
// 			29: ['дело311', 'дело312', 'дело313'],
// 			30: ['дело321', 'дело322', 'дело323'],
// 			31: ['дело331', 'дело332', 'дело333'],
// 		}
// 	},
// }

// let yaer = '2018';
// let manth = 11;
// let day = 29;

// console.log(affairs[yaer][manth][day])
//


//82/
//Выведите на экран сумму зарплат первого и второго работников.
//
// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];

// console.log(employees[0].salary);
// console.log(employees[1]["salary"]);
// console.log(employees[0].salary + employees[1]["salary"]);
//


//83/
//Выведите на экран элемент 'Вася' и элемент 'Лена'.
//
// let students = {
// 	'boys':  ['Коля', 'Вася', 'Петя'],
// 	'girls': ['Даша', 'Маша', 'Лена'],
// };

// console.log(students.boys[1])
// console.log(students.girls[2])
//


//84/
//Выведите на экран данные каждого работника в формате имя - зарплата.
//
// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];

// for (let user of employees) {
// 	console.log(user.name + ': ' + user.salary)
// }
//


//85/
//Выведите на экран сумму зарплат всех работников.
//
// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];

// let res = 0;
// for (let user of employees) {
//     res += user.salary	
// }
// console.log(res);
//


//86/
//Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.
//
// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		age: 28,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		age: 29,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		age: 30,
// 	},
// 	{
// 		name: 'name4',
// 		salary: 600,
// 		age: 31,
// 	},
// 	{
// 		name: 'name5',
// 		salary: 700,
// 		age: 32,
// 	},
// ];

// let res = 0;
// for (let user of employees) {
//     if(user.age >= 30){
//         res += user.salary
//     }  	
// }
// console.log(res);
//


//87/
//Дан следующий массив работников, в котором поле dismissed хранит в себе информацию о том, уволен работник или нет (true - уволен): Выведите на экран имена и зарплаты неуволенных работников.
//
// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		dismissed: false,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		dismissed: true,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		dismissed: false,
// 	},
// 	{
// 		name: 'name4',
// 		salary: 600,
// 		dismissed: true,
// 	},
// 	{
// 		name: 'name5',
// 		salary: 700,
// 		dismissed: false,
// 	},
// ];

// let res = 0;
// for (let user of employees) {
//     if(user.dismissed === false){
//         console.log(user.name + ': ' + user.salary)
//     }  	
// }
//


//88/
//С помощью вложенных циклов выведите на экран все строки с данными.
//
// let data = {
// 	1: [
// 		'data11',
// 		'data12',
// 		'data13',
// 	],
// 	2: [
// 		'data21',
// 		'data22',
// 		'data23',
// 	],
// 	3: [
// 		'data31',
// 		'data32',
// 		'data33',
// 		'data34',
// 		'data35',
// 	],
// 	4: [
// 		'data41',
// 		'data42',
// 	],
// };

// for (let elem in data) {
// 	for (let index of data[elem]) {
// 		console.log(index);
// 	}
// }
//


//89/
//Добавьте в этот массив еще одного юзера.
//
// let users = [
// 	{
// 		name: 'name1',
// 		surname: 'surname1',
// 		age: 30,
// 	},
// 	{
// 		name: 'name2',
// 		surname: 'surname2',
// 		age: 31,
// 	},
// 	{
// 		name: 'name2',
// 		surname: 'surname2',
// 		age: 32,
// 	},
// ];

// users.push({name: 'name4', surname: 'surname4', age: 34,});
// console.log(users);
//


//90/
//Дана вот такая структура для хранения списка дел за определенные даты:
// Добавьте еще одно дело в дату '2019-12-29'. Добавьте еще два дела в дату '2019-12-31'.
//
// let affairs = {
// 	'2019-12-28': ['дело11', 'дело12', 'дело13'],
// 	'2019-12-29': ['дело21', 'дело22', 'дело23'],
// 	'2019-12-30': ['дело31', 'дело32', 'дело33'],
// }

// affairs["2019-12-29"].push('дело24');
// affairs["2019-12-31"] = [];
// affairs["2019-12-31"].push('дело1', 'дело2')

// console.log(affairs)
//


//91/
//Добавьте нового студента в подгруппу 'subgroup11'.
// Добавьте в первую группу еще одну подгруппу.
//Сделайте четвертую группу, в ней сделайте подгруппу и добавьте в нее двух новых студентов.
//
// let students = {
// 	'group1': {
// 		'subgroup11': ['student111', 'student112', 'student113'],
// 		'subgroup12': ['student121', 'student122', 'student123'],
// 	},
// 	'group2': {
// 		'subgroup21': ['student211', 'student212', 'student213'],
// 		'subgroup22': ['student221', 'student222', 'student223'],
// 	},
// 	'group3': {
// 		'subgroup31': ['student311', 'student312', 'student313'],
// 		'subgroup32': ['student321', 'student322', 'student323'],
// 	},
// };

// students['group1']['subgroup11'].push('student114');
// //
// students['group1']['subgroup13'] = [];
// //
// students['group4'] = {};
// students['group4']['subgroup40'] = [];
// students['group4']['subgroup40'].push('student401', 'student402')
// console.log(students);
//


//92/
// Дана вот такая структура для хранения списка дел за определенные даты:
// Сделайте функцию addAffair, которая будет добавлять новое дело в заданную дату. Пусть функция первым параметром принимает дату, а вторым - дело.

// let affairs = {
// 	'2019-12-28': ['дело11', 'дело12', 'дело13'],
// 	'2019-12-29': ['дело21', 'дело22', 'дело23'],
// 	'2019-12-30': ['дело31', 'дело32', 'дело33'],
// }

// function addAffair(data, delo){
// 	if(affairs[data] === undefined){
// 		affairs[data] = [];
// 		affairs[data].push(delo)
// 	}else{
// 		affairs[data].push(delo)
// 	}
// }

// addAffair('2019-12-28', 'delo14')
// addAffair('2019-12-31', 'delo1')
// console.log(affairs);
//


//93/
// Дана вот такая структура для хранения студентов:
// Сделайте функцию addStudent, которая будет добавлять нового студента. Пусть функция первым параметром принимает группу, а вторым - подгруппу, а третьим - имя студента.
//
// let students = {
// 	'group1': {
// 		'subgroup11': ['student111', 'student112', 'student113'],
// 		'subgroup12': ['student121', 'student122', 'student123'],
// 	},
// 	'group2': {
// 		'subgroup21': ['student211', 'student212', 'student213'],
// 		'subgroup22': ['student221', 'student222', 'student223'],
// 	},
// 	'group3': {
// 		'subgroup31': ['student311', 'student312', 'student313'],
// 		'subgroup32': ['student321', 'student322', 'student323'],
// 	},
// };

// function addAffair(group, subgroup, student){
// 	if(students[group] === undefined){
// 		students[group] = [];
// 		students[group][subgroup] = [];
// 		students[group].push(students[group][subgroup])
// 		students[group][subgroup].push(student)
// 	}else if(students[group][subgroup] === undefined){
// 		students[group][subgroup] = [];
// 		students[group][subgroup].push(student)
// 	}else{
// 		students[group][subgroup].push(student)
// 	}
	
// 	}

// addAffair('group4', 'subgroup41', 'student411')
// // addAffair('2019-12-31', 'delo1')
// console.log(students);

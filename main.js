// ЦИКЛЫ
// 1

let count = 1;
while (count <= 20) {
  console.log(count);
  count++;
}

// 2

let count1 = 20;
while (count1 >= 1) {
  console.log(count1);
  count1--;
}
    
// 3

let count2 = 1;
while (count2 <= 50) {
  if (count2 % 2 === 0) {
    console.log(count2);
  }
  count2++;
}

// 4. Сумма чисел от 1 до 100
let sum = 0;
let i = 1;

while (i <= 100) {
  sum = sum + i;
  i++;
}
console.log("Сумма: " + sum);

// 5. Квадраты чисел от 1 до 10
let j = 1;

while (j <= 10) {
  console.log("Квадрат " + j + " - " + j * j);
  j++;
}

// 6. Таблица умножения на 5
let k = 1;

while (k <= 10) {
  console.log("5 x " + k + " = " + 5 * k);
  k++;
}

// 7. Сумма чётных чисел от 1 до 50
let evenSum = 0;
let n = 1;

while (n <= 50) {
  if (n % 2 === 0) {
    evenSum = evenSum + n;
  }
  n++;
}
console.log("Сумма чётных: " + evenSum);

// 8. Числа от 0 до 100 с шагом 5
let m = 0;

while (m <= 100) {
  console.log(m);
  m = m + 5;
}

// 9

let count7 = 0;
i = 1;
while (i <= 100) {
  if (i % 7 === 0) {
    count7++;
  }
  i++;
}
console.log("Количество: " + count7);

// ОБЪЕКТЫ 
// 1
let user = {
  name: "Дастан",
  age: 19,
  city: "Бишкек"
};
console.log(user.name);
console.log(user.age);
console.log(user.city);
 
// 2
user.age = 19;
console.log("Новый возраст: " + user.age);
 
// 3
user.phone = "+996505383790";
console.log(user);
 
// 4
delete user.city;
console.log(user);
 
// 5
if ("email" in user) {
  console.log("Свойство email есть");
} else {
  console.log("Свойства email нет");
}
 
// 6
console.log("--- Ключи ---");
for (let key in user) {
  console.log(key);
}
 
// 7
console.log("--- Значения ---");
for (let key in user) {
  console.log(user[key]);
}
 
// 8
let propsCount = 0;
for (let key in user) {
  propsCount++;
}
console.log("Количество свойств: " + propsCount);
 
// МАССИВЫ 
// 1
let arr = [3, -5, 10, 7, 8];
console.log("--- Элементы ---");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
 
// 2
let arrSum = 0;
for (let i = 0; i < arr.length; i++) {
  arrSum = arrSum + arr[i];
}
console.log("Сумма: " + arrSum);
 
// 3
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log("Максимум: " + max);
 
// 4
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log("Минимум: " + min);
 
// 5
let elementsCount = 0;
for (let i = 0; i < arr.length; i++) {
  elementsCount++;
}
console.log("Количество элементов: " + elementsCount);
 
// 6
let evenArrSum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenArrSum = evenArrSum + arr[i];
  }
}
console.log("Сумма чётных: " + evenArrSum);
 
// 7
let negativeCount = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    negativeCount++;
  }
}
console.log("Отрицательных: " + negativeCount);
 
// 8
let product = 1;
for (let i = 0; i < arr.length; i++) {
  product = product * arr[i];
}
console.log("Произведение: " + product);
 
// 9
let maxIndex = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > arr[maxIndex]) {
    maxIndex = i;
  }
}
console.log("Индекс максимума: " + maxIndex);
 
// 10
let minIndex = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < arr[minIndex]) {
    minIndex = i;
  }
}
console.log("Индекс минимума: " + minIndex);
 
// 11
let found = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 10) {
    found = true;
  }
}
if (found) {
  console.log("Число 10 есть в массиве");
} else {
  console.log("Числа 10 нет в массиве");
}
 
// 12
let arr2 = [7, 1, 7, 3, 7, 9];
let count7InArr = 0;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === 7) {
    count7InArr++;
  }
}
console.log("Число 7 встречается раз: " + count7InArr);
 
// 13
let lastPositive = null;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    lastPositive = arr[i];
  }
}
console.log("Последнее положительное: " + lastPositive);
 
// 14
let average = arrSum / arr.length;
console.log("Среднее арифметическое: " + average);
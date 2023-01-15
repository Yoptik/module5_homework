let myMap = new Map();

myMap.set("Понедельник", "16 Января");
myMap.set("Вторник", "17 Января");
myMap.set("Среда", "18 Января");
myMap.set("Четверг", "19 Января");
myMap.set("Пятница", "20 Января");
myMap.set("Суббота", "21 Января");
myMap.set("Воскресенье", "22 Января");

myMap.forEach((value, key) => {
  console.log(`Ключ - ${key}, значение - ${value}`);
});
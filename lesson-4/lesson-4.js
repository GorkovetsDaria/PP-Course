let screenPrice = 2000;

let titleProject = prompt ('Название проекта');
let screensValue = prompt ('Шаблонные, с уникальным дизайном, с анимациями');
let responsive = prompt ('Нужен ли респонсивный сайт?');
let service1 = prompt ('Какой сервис нужен?');
let servicePrice1 = prompt ('Сколько это будет стоить');
let service2 = prompt ('Какой еще сервис тебе нужен?');
let servicePrice2 = prompt ('Сколько будет стоить этот второй сервис?');

let fullPrice = +screenPrice + +servicePrice1 + +servicePrice2;
let servicePercentPrice = fullPrice - fullPrice * 0.1;  

if (fullPrice > 50000) {
    console.log ('сделаем скидку в 10%');
}   else if (fullPrice >= 20000 && fullPrice <= 50000) {
    console.log ('сделаем скидку 5%');
}   else if ((fullPrice > 0 && fullPrice < 20000)) {
    console.log ('Скидка не предусмотрена');
}   else {
console.log ('что-то пошло не так');
}


console.log ('Название проекта', titleProject);
console.log ('Шаблонные, с уникальным дизайном, с анимациями', screensValue);
console.log ('Нужен ли респонсивный сайт', responsive);
console.log ('Какой сервис нужен', service1);
console.log ('Сколько это будет стоить', servicePrice1);
console.log ('Какой еще сервис тебе нужен?', service2);
console.log ('Сколько будет стоить этот второй сервис?', servicePrice2);
console.log ('Общая стоимость проекта', fullPrice);
console.log ('Итоговая сумма за вычетом процента', servicePercentPrice);
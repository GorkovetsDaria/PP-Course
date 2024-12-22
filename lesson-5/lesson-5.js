let screenPrice = 2000;

let titleProject = prompt('Название проекта');
let screensValue = prompt('Шаблонные, с уникальным дизайном, с анимациями');
let responsive = Boolean(prompt('Нужен ли респонсивный сайт?'));
let service1 = prompt('Какой сервис нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить');
let service2 = prompt('Какой еще сервис тебе нужен?');
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?');

let fullPrice = +screenPrice + +servicePrice1 + +servicePrice2;
let servicePercentPrice = fullPrice - fullPrice * 0.1;  

const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;
}
let allServicePrices = getAllServicePrices();
console.log('стоимость всех дополнительных услуг', allServicePrices);

function getFullPrice () {
    return allServicePrices + screenPrice;
}
fullPrice = getFullPrice ();
console.log('полная стоимость', fullPrice);

const getServicePercentPrices = function () {
    return fullPrice - fullPrice * 0.1;
}
let ServicePercentPrices = getServicePercentPrices();
console.log('стоимость за вычетом процента подрядчику', ServicePercentPrices);

const getRollbackMessage = function() {

    if (fullPrice > 50000) {
        console.log('сделаем скидку в 10%');
    } else if (fullPrice >= 20000 && fullPrice <= 50000) {
        console.log('сделаем скидку 5%');
    } else if ((fullPrice > 0 && fullPrice < 20000)) {
        console.log('Скидка не предусмотрена');
    } else {
        console.log('что-то пошло не так');
    }
}
getRollbackMessage();

const getTitle = function(title) {
    return title[0].toUpperCase() + title.substr(1).toLowerCase();
}
console.log(getTitle(titleProject));

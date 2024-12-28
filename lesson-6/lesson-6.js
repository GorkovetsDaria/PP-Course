const checkIsNumber = function (number) {
    return typeof number === 'number' && !isNaN(number) && isFinite(number);
};

const getPriceInput = function (message) {
    let price;
    do {
        const input = prompt(message).trim();
        if (input === null) {
            alert('Операция отменена');
            return null;
        }
        price = parseFloat(input);
    } while (!checkIsNumber(price));
    return price;
};

let titleProject = prompt('Название проекта');
let screensValue = prompt('Шаблонные, с уникальным дизайном, с анимациями');
let responsive = confirm('Нужен ли респонсивный сайт?');

// Запрашиваем стоимость экрана
let screenPrice = getPriceInput('Сколько это будет стоить для экрана?');
if (screenPrice === null) {
    console.log('Отмена операции.');
    throw new Error('Операция прервана пользователем.');
}

// Запрашиваем стоимость всех услуг
const getAllServicePrices = function (servicesCount) {
    let total = 0;
    for (let i = 1; i <= servicesCount; i++) {
        const servicePrice = getPriceInput(`Сколько это будет стоить для услуги ${i}?`);
        if (servicePrice === null) return null;
        total += servicePrice;
    }
    return total;
};

const totalServicePrice = getAllServicePrices(2);
if (totalServicePrice === null) {
    console.log('Отмена операции.');
    throw new Error('Операция прервана пользователем.');
}

// Полная стоимость
let fullPrice = screenPrice + totalServicePrice;
console.log('Полная стоимость:', fullPrice);

// Стоимость с учетом процента подрядчику
const getServicePercentPrices = function () {
    return fullPrice - fullPrice * 0.1;
};

let servicePercentPrices = getServicePercentPrices();
console.log('Стоимость за вычетом процента подрядчику:', servicePercentPrices);

// Сообщение о скидке
const getRollbackMessage = function () {
    if (fullPrice > 50000) {
        console.log('Сделаем скидку в 10%');
    } else if (fullPrice >= 20000 && fullPrice <= 50000) {
        console.log('Сделаем скидку 5%');
    } else if (fullPrice > 0 && fullPrice < 20000) {
        console.log('Скидка не предусмотрена');
    } else {
        console.log('Что-то пошло не так');
    }
};
getRollbackMessage();

// Преобразование заголовка
const getTitle = function (title) {
    return title[0].toUpperCase() + title.substr(1).toLowerCase();
};
console.log('Название проекта:', getTitle(titleProject));

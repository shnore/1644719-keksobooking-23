import {getRandomIntegerFromRangeInclusive, getRandomFloatFromRangeInclusive} from './util.js';

const TITLE = 'Найдите идеальный отель на Keksobooking';
const TIME = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const DESCRIPTION = 'Дополнительно установлен телевизор со спутниковыми каналами и рабочий стол, а также обустроена гостиная зона.';


function getLocation() {
  // location, объект — местоположение в виде географических координат. Состоит из двух полей:
  // lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.
  // lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.
  return {lat: getRandomFloatFromRangeInclusive(35.65000, 35.70000, 4),
    lng: getRandomFloatFromRangeInclusive(139.70000, 139.80000, 4),
  };
}


function getFeatures() {
  // features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
  const featuresList = [];
  const featuresListLen = getRandomIntegerFromRangeInclusive(1, FEATURES.length - 1);
  for (let jj = FEATURES.length - featuresListLen; jj <= FEATURES.length - 1; jj++) {
    featuresList.push(FEATURES[jj]);
  }
  return featuresList;
}


function getPhotos() {
  // photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.
  const photosList = [];
  const photosListLen = getRandomIntegerFromRangeInclusive(1, PHOTOS.length - 1);
  for (let jj = PHOTOS.length - photosListLen; jj <= PHOTOS.length - 1; jj++) {
    photosList.push(PHOTOS[jj]);
  }
  return photosList;
}


function getAvatar(xx) {
  let avatarNumber = `${xx}`;
  if (xx < 10) {
    avatarNumber = `0${xx}`;
  }
  return `img/avatars/user${avatarNumber}.png`;
}


function Item(xx, location) {
  // author, объект — описывает автора. Содержит одно поле:
  this.author = {
    // avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.
    avatar: getAvatar(xx),
  };
  // offer, объект — содержит информацию об объявлении. Состоит из полей:
  this.offer = {
    // title, строка — заголовок предложения. Придумайте самостоятельно.
    title: TITLE,
    // address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}.
    address: `${location.lat}, ${location.lng}`,
    // price, число — стоимость. Случайное целое положительное число.
    price: getRandomIntegerFromRangeInclusive(3000, 10000),
    // type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.
    type: TYPE[getRandomIntegerFromRangeInclusive(0, TYPE.length - 1)],
    // rooms, число — количество комнат. Случайное целое положительное число.
    rooms: getRandomIntegerFromRangeInclusive(1, 10),
    // guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.
    guests: getRandomIntegerFromRangeInclusive(1, 10),
    // checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
    checkin: getRandomIntegerFromRangeInclusive(0, TIME.length - 1),
    // checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
    checkout: getRandomIntegerFromRangeInclusive(0, TIME.length - 1),
    // features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
    features: getFeatures(),
    // description, строка — описание помещения. Придумайте самостоятельно.
    description: DESCRIPTION,
    // photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.
    photos: getPhotos(),
  };
  this.location = {
    // location, объект — местоположение в виде географических координат. Состоит из двух полей:
    // lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.
    // lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.
    lat: location.lat,
    lng: location.lng,
  };
}

function fillItemsList(items) {
  const itemsList = [];
  // avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.
  for (let ii = 1; ii <= items; ii++) {
    const currentItem = new Item(ii, getLocation());
    itemsList.push(currentItem);
  }
  return itemsList;
}

export {fillItemsList};

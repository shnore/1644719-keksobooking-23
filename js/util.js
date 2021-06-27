const getRandomIntegerFromRangeInclusive = function(rangeFrom, rangeTo) {
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5_%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D0%BE%D0%B3%D0%BE_%D1%86%D0%B5%D0%BB%D0%BE%D0%B3%D0%BE_%D1%87%D0%B8%D1%81%D0%BB%D0%B0_%D0%B2_%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%BD%D0%BE%D0%BC_%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B2%D0%B0%D0%BB%D0%B5_%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE

  if (rangeFrom >= 0 && rangeTo >= 0 && rangeFrom < rangeTo) {
    rangeFrom = Math.ceil(rangeFrom);
    rangeTo = Math.floor(rangeTo);
    return Math.floor(Math.random() * (rangeTo - rangeFrom + 1)) + rangeFrom;
  }

  return false;
};

// getRandomIntegerFromRangeInclusive(0, 100);


const getRandomFloatFromRangeInclusive = function(rangeFrom, rangeTo, precision) {
  rangeFrom = parseFloat(rangeFrom);
  rangeTo = parseFloat(rangeTo);
  if (rangeFrom >= 0 && rangeTo >= 0 && rangeFrom < rangeTo && precision >= 0) {
    return parseFloat((Math.random() * (rangeTo - rangeFrom + (1/Math.pow(10, precision))) + rangeFrom).toFixed(precision));
  }

  return false;
};

// getRandomFloatFromRangeInclusive(0.1, 100.5, 4);

export {getRandomIntegerFromRangeInclusive, getRandomFloatFromRangeInclusive};

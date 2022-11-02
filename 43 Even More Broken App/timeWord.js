'use strict';

function getHour(hr) {
  const hours = {
    00: 'twelve',
    01: 'one',
    02: 'two',
    03: 'three',
    04: 'four',
    05: 'five',
    06: 'six',
    07: 'seven',
    08: 'eight',
    09: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'one',
    14: 'two',
    15: 'three',
    16: 'four',
    17: 'five',
    18: 'six',
    19: 'seven',
    20: 'eight',
    21: 'nine',
    22: 'ten',
    23: 'eleven',
  };
  for (const key of Object.keys(hours)) {
    if (hr == key) {
      const hr = hours[key];
      return hr;
    }
  }
}

function getMinute(min) {
  const numbers = [
    00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
    38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
    57, 58, 59, 60,
  ];
  const idx = numbers.indexOf(min);
  const words = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
    'twenty one',
    'twenty two',
    'twenty three',
    'twenty four',
    'twenty five',
    'twenty six',
    'twenty seven',
    'twenty eight',
    'twenty nine',
    'thirty',
    'thirty one',
    'thirty two',
    'thirty three',
    'thirty four',
    'thirty five',
    'thirty six',
    'thirty seven',
    'thirty eight',
    'thirty nine',
    'fourty',
    'fourty one',
    'fourty two',
    'fourty three',
    'fourty four',
    'fourty five',
    'fourty six',
    'fourty seven',
    'fourty eight',
    'fourty nine',
    'fifty',
    'fifty one',
    'fifty two',
    'fifty three',
    'fifty four',
    'fifty five',
    'fifty six',
    'fifty seven',
    'fifty eight',
    'fifty nine',
  ];
  return words[idx];
}

function timeWord(str) {
  if (str == '00:00') {
    const midnight = 'It is midnight.';
    console.log(midnight);
    return midnight;
  }
  if (str == '12:00') {
    const noon = 'It is noon.';
    console.log(noon);
    return noon;
  }
  const timeSplit = str.split(':');
  const hr = +timeSplit[0];
  const min = +timeSplit[1];
  if (hr > 23 || hr < 0 || min > 60 || min < 0) {
    const warning = 'Invalid time!';
    console.log(warning);
    return warning;
  }
  const amPM = hr < 12 ? 'AM' : 'PM';
  const hour = getHour(hr);
  const minute = getMinute(min);
  console.log(`The time is ${hour} ${minute} ${amPM}.`);
}

module.exports = { timeWord, getHour, getMinute };

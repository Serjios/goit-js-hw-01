'use strict';

let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
const buyDroid = prompt('Сколько дроидов вы хотите купить?');

if (buyDroid === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = pricePerDroid * buyDroid;

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    credits -= totalPrice;
    console.log(
      `Вы купили ${buyDroid} дроидов, на счету осталось ${credits} кредитов.`,
    );
  }
}

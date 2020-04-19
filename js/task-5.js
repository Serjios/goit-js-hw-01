let costDelivery;
const country = prompt('Введите страну');
const normalizedInput = country.toLowerCase();

switch (normalizedInput) {
  case 'китай':
    costDelivery = 100;
    console.log(
      `Доставка в ${normalizedInput} будет стоить ${costDelivery} кредитов.`,
    );
    break;

  case 'чили':
    costDelivery = 250;
    console.log(
      `Доставка в ${normalizedInput} будет стоить ${costDelivery} кредитов.`,
    );
    break;

  case 'австралия':
    costDelivery = 170;
    console.log(
      `Доставка в ${normalizedInput} будет стоить ${costDelivery} кредитов.`,
    );
    break;

  case 'индия':
    costDelivery = 80;
    console.log(
      `Доставка в ${normalizedInput} будет стоить ${costDelivery} кредитов.`,
    );
    break;

  case 'ямайка':
    costDelivery = 120;
    console.log(
      `Доставка в ${normalizedInput} будет стоить ${costDelivery} кредитов.`,
    );
    break;

  default:
    console.log('В вашей стране доставка не доступна');
}

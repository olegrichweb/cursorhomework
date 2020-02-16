const milk = 15.678;
const beef = 123.965;
const chiken = 90.2345;
const money = 500;
console.log("milk price is", + milk)
console.log("beef price is", + beef)
console.log("chiken price is", + chiken)
const maxPice = Math.max(milk, beef, chiken);
console.log("maxPrice is", + maxPice);
const minPrice = Math.min(milk, beef, chiken);
console.log("minPrice is", + minPrice)
const sumCost = (milk + beef + chiken);
console.log("sumCost is", sumCost);
let sumCostR = (Math.floor(milk) + Math.floor(beef) + Math.floor(chiken));
console.log("sum cost rouding is ", + sumCostR);
let sumCostToHundred = sumCost / 100;
sumCostToHundred = Math.ceil(sumCostToHundred) * 100;
console.log(`Sum rounded to Hundred is`, sumCostToHundred);
const parityCheck = Math.floor(sumCost) % 2 === 0;
console.log("parityCheck is", parityCheck);
const oddMoney = (money - sumCost);
console.log("odd money is", oddMoney, "hrn");
const meanPrice = sumCost / 3;
console.log("mean price is", meanPrice.toFixed(2));
const sale = Math.random();
console.log(`Sale is : ${sale.toFixed(2) * 100 + '%'}`);
let beefSalePrice = beef * sale; 
beefSalePrice = beef - beefSalePrice;
console.log("Beef Sale Price is", beefSalePrice.toFixed(2));
const netProfit = beef / 2 - beefSalePrice;
console.log("Net profit from beef sale is", netProfit);
console.log(`Максимальная цена: ${maxPice}
Минимальная цена: ${minPrice}
Сумма цен: ${sumCost}
Сумма с округлением в меньшую сторону: ${sumCostR}
Округление суммы до сотни: ${sumCostToHundred}
Проверка на четность: ${parityCheck}
Сдача с 500 грн: ${oddMoney}
Среднее значение: ${meanPrice}
Скидка: ${sale}
Цена со скидкой: ${beefSalePrice}
Чистая прибыль: ${netProfit}`);

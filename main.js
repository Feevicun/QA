// Об'єкт
var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн"
};
services["Розбити скло"] = "200 грн";
// Загальна вартість
function price() {
  let total = 0;
  for (let key in services) {
    let numericPrice = parseFloat(services[key]);
    total += numericPrice;
  }
  return total + " грн";
}
// Мінімальна вартість
function minPrice() {
  let prices = Object.values(services).map(service => parseFloat(service));
  let min = Math.min(...prices);
  return min + " грн";
}
// Максимальна вартість
function maxPrice(){
  let prices = Object.values(services).map(service => parseFloat(service));
  let max = Math.max(...prices);
  return max + " грн";
}
// Вивід
console.log("Загальна вартість:", price());
console.log("Мінімальна ціна:", minPrice());
console.log("Максимальна ціна:", maxPrice());

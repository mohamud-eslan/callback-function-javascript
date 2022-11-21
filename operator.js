let listingPrice = 799;
let sellingPrice = 199;
let DiscountPrice = ((listingPrice - sellingPrice) / listingPrice) * 100;
console.log("Discounted percentage is" + DiscountPrice);
displayDiscountPencentage = Math.round(DiscountPrice);
console.log(displayDiscountPencentage + "% off");

let result = listingPrice > sellingPrice;

console.log(typeof result);



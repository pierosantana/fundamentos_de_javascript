function calculateDiscountedPrice(price, discountPercentage){
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount

    return priceWithDiscount
}

const originalPrice = 100
const discountPercentage = 15

const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)

console.log(`El precio original es: $${originalPrice}`)
console.log(`El porcentaje de descuento es: ${discountPercentage}%`)
console.log(`El precio final con descuento es: $${finalPrice}`)


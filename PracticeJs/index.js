//  1.  Currying Example 

// function addCurry(a){

//     return function (b){
//         return function (c) {
//             return function(d){
//                 return a * b + c * d;
//             }
//         };
//     }

// }
// console.log(addCurry(2)(3)(4)(5));



// Example------------2 (Curry). 

const calculateFinalPrice = basePrice => taxRate => discount => additionalFee => {
    return basePrice * (1 + taxRate) - discount + additionalFee;
};


const withBasePrice = calculateFinalPrice(100); 
const withTax = withBasePrice(0.08); 
const withDiscount = withTax(10); 
const finalPrice = withDiscount(5);

console.log(finalPrice); 

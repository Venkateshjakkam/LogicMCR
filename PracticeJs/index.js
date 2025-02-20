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

// const calculateFinalPrice = basePrice => taxRate => discount => additionalFee => {
//     return basePrice * (1 + taxRate) - discount + additionalFee;
// };


// const withBasePrice = calculateFinalPrice(100); 
// const withTax = withBasePrice(0.08); 
// const withDiscount = withTax(10); 
// const finalPrice = withDiscount(5);

// console.log(finalPrice); 


// 2. Debouncing----------------------Example-1



// function debounce(func, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => func.apply(this, args), delay);
//   };
// }

// // Example usage
// const logMessage = debounce((msg) => console.log(msg), 1000);

// logMessage("Hello");
// logMessage("Hello again"); // Only this will be logged after 1 sec
// logMessage("Hello");


// debounce=---------------- Example------------2

// function debounce(func,delay){
//     let timer;
//     return (...args) => {
//         clearTimeout(timer);
//         timer = setTimeout(()=>func.apply(this,args),delay)
//     }
// }
// function search(){
//     console.log('i am debounce')
// }
// const processChange = debounce( search,1000)
// processChange();


// debounce=---------------- Example------------3


// function debounce(func,delay){
//     let timer;
//     return (...args) => {
//        timer = setTimeout(() => {
//             func.apply(this,args)
//         },delay)
//     }
// }

// function getData(){
//     console.log("get the data from API")
// }


// const processData = debounce(getData,2000)
// processData()




// 3.        Jquery -----------------------Example---1
// function $(selector) {
//     return new Wrapper(selector);
// }

// class Wrapper {
//     constructor(selector) {
//         this.element = document.querySelector(selector);
//     }

//     css(propertyName, value) {
//         if (this.element) {
//             this.element.style[propertyName] = value;
//         }
//         return this; // Enable chaining
//     }
// }

// // Example usage:
// $('#button')
//     .css('color', '#f09f')
//     .css('backgroundColor', '#090')
//     .css('fontWeight', 'bold');


// ////////////////////////-------------------Wrong written function---------------------//////////////////////////////

// let items = [
//   {color: 'red', type: 'tv', age: 18}, 
//   {color: 'silver', type: 'phone', age: 20},
//   {color: 'blue', type: 'book', age: 17}
// ] 
// // an exclude array made of key value pair
// const excludes = [ 
//   {k: 'color', v: 'silver'}, 
//   {k: 'type', v: 'tv'}, 
// ] 


// function excludeItems(items, excludes) { 
//   excludes.forEach( pair => { 
//     items = items.filter(item => item[pair.k] !== item[pair.v])
//   })
 
//   return items
// }

// console.log(excludeItems(items, excludes))


////////////////////-----------Example----5.---------------DOM Store-------------////////////////////////////////


// class NodeStore {
//   constructor() {
//     this.storeKey = Symbol('nodeStore'); // Unique property key
//   }

//   set(node, value) {
//     if (node && typeof node === 'object') {
//       node[this.storeKey] = value; // Store value directly on the node
//     }
//   }

//   get(node) {
//     return node ? node[this.storeKey] : undefined; // Retrieve stored value
//   }

//   has(node) {
//     return node ? this.storeKey in node : false; // Check if the value exists
//   }
// }

// const store = new NodeStore();

// const div = document.createElement('div');
// const span = document.createElement('span')
// store.set(div, 'Hello, World!');
// store.set(span, 'I am new to this world')

// console.log(store.get(div)); // "Hello, World!"
// console.log(store.has(div)); // true

// // const span = document.createElement('span');
// console.log(store.get(span)); // undefined
// console.log(store.has(span)); // false




// Array method----2

// const A = ['A', 'B', 'C', 'D', 'E', 'F']
// const B = [1,   5,   4,   3,   2,   0]


// function shuffelArray(A,B){
//     let outPut  = new Array(A.length)
//         for(let i=0; i < A.length; i++){
//                 outPut[B[i]] = A[i];
//         }

//         for (let i = 0; i < A.length; i++) {
//         A[i] = outPut[i];
//         }
// }
// shuffelArray(A,B)
// console.log(A);



/////////////////------------  ClearAllTimeOut-------------Example----1-----////////////////

let timer = 0;

function incrTime() {
    timer++;
    console.log("Timer:", timer);

    if (timer === 20) {
        // console.log("Clearing timeout simulation.");
        return () => clearTimeout(timer);
    }

    setTimeout(incrTime, 1000); // Call itself every second
}

incrTime();

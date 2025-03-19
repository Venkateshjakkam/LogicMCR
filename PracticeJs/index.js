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

// let timer = 0;

// function incrTime() {
//     timer++;
//     console.log("Timer:", timer);

//     if (timer === 20) {
//         return () => clearTimeout(timer);
//     }

//     setTimeout(incrTime, 1000);
// }

// incrTime();

///////////////////////////////-------- Example -----------------2///////////////////////////////

// (function () {

//     const originalSetTimeout = window.setTimeout;
//     const originalClearTimeout = window.clearTimeout;

//     let timeoutIds = [];

//     window.setTimeout = function (callback, delay) {
//         let timeoutId = originalSetTimeout(callback, delay);
//         timeoutIds.push(timeoutId);
//         return timeoutId;
//     };

//     window.clearTimeout = function (timeoutId) {
//         timeoutIds = timeoutIds.filter(id => id !== timeoutId);
//         originalClearTimeout(timeoutId);
//     };

//     window.clearAllTimeout = function () {
//         timeoutIds.forEach(id => originalClearTimeout(id));
//         timeoutIds = [];
//     };
//     console.log(timeoutIds);
// })();

// setTimeout(() => console.log("Function 1 executed"), 1000);
// setTimeout(() => console.log("Function 2 executed"), 1000);
// setTimeout(() => console.log("Function 3 executed"), 1000);

// clearAllTimeout();

/////////////////////////----------------------- Intersection of Unique element in the array-------------------////////////////////

// let arr1 = ['ab','bc','ad','ae','ac','ad','ae','mn'];
// let arr2 = ['na','ba','ab','mn','jk','ba','mn','na'];

// function uniqEle(arr1,arr2){

//    let set1 = [];
//    let set2 = [];

//    for(let i=0; i<=arr1.length-1; i++){
//     if(set1.includes(arr1[i]) === false){
//         set1.push(arr1[i])
//     }
//    }

//    for(let i=0; i<=arr2.length-1; i++){
//     if(set2.includes(arr2[i]) === false){
//         set2.push(arr2[i])
//     }
//    }
//    console.log(set1,set2)

//     let arr3 =[]

//     for(let i=0; i<= set1.length-1; i++){
//         for(let j=0; j<= set2.length-1; j++){
//            if( set1[i] === set2[j]){
//             arr3.push(set1[i])
//            }
//         }
//     }

//     return arr3.toString();

// }
// console.log(uniqEle(arr1,arr2));

///////// Remove characters ------------------- Example-1-------------///////////////////

// function charDel(char){

//     let newChar = char.split('');
//     console.log(newChar);

//     let outPut = []
//     for(let i=0; i<=newChar.length-1; i++){
//         if(newChar[i] === 'c' && newChar.length >0 && newChar[newChar.length-1] === 'a' ){
//              outPut.pop();
//              outPut.push(newChar[i]);
//              continue;
//         }
//     }

//     return outPut.join('').toString();
// }

// console.log(charDel('ab'));
// console.log(charDel('abababaaaabbccdddba'));
// console.log(charDel('cabbaabcca') )

// ///////////////////////////////////------Binary-Unique-elements in the array-----///////////////////////////////
// let arr1 = [1,1,3,4,5,3,7,8,2,5,6,7];

// function uniqArr(arr1){
//     let outPut = [];
//         for(let i=0; i<=arr1.length-1; i++){
//             for(let j=i+1; j<arr1.length; j++){
//                 if(arr1[i]< arr1[j]){
//                     temp = arr1[i];
//                     arr1[i] = arr1[j];
//                     arr1[j] = temp
//                 }
//             }
//         }

//         for(let i=0; i <= arr1.length-1; i++){
//             if(arr1[i] !== arr1[i+1]){
//                 outPut.push(arr1[i])
//             }
//         }
//         return outPut;
// }
// console.log(uniqArr(arr1));

//////////////Sorting an aray----------------Exaple-1------------////////////////////

// let arr1 = [2,8,4,5,7,3,1,6]

// let outPut = arr1.sort();
// console.log(arr1);

// function sortArr(arr1){
//     for(let i=0; i <= arr1.length-1; i++ ){
//         for(j=i+1; j<arr1.length; j++){
//             if(arr1[i]<arr1[j]){
//                 temp = arr1[i];
//                 arr1[i] = arr1[j];
//                 arr1[j] = temp;
//             }
//         }
//     }
//     return arr1;
// }
// console.log(sortArr(arr1));

/////////////////////------------------ BinarySearch---------------//////

// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) {
//             return mid;
//         } else if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return -1;
// }
// let arr = [1, 3, 5, 7, 9, 11];
// console.log(binarySearch(arr, 5));
// console.log(binarySearch(arr, 6));

////////////////////////---------Range------------------//////////////////

// function* rangeArr(from,to){
//     for(let i = from; i <= to; i++){
//         yield i;
//     }
// }

// for(let num of rangeArr(1,4)){
// console.log(num);
// }

//////////////////------------------Element Right Before First Appearance------------------////////////////////

// let arr1 = [1,1,3,4,5,3,7,8,2,5,6,7];

// function uniqArr(arr1,target){
//     let outPut = [];
//     let result = [];
//         for(let i=0; i<=arr1.length-1; i++){
//             for(let j=i+1; j<arr1.length; j++){
//                 if(arr1[i]< arr1[j]){
//                     temp = arr1[i];
//                     arr1[i] = arr1[j];
//                     arr1[j] = temp
//                 }
//             }
//         }

//         for(let i=0; i <= arr1.length-1; i++){
//             if(arr1[i] !== arr1[i+1]){
//                 outPut.push(arr1[i])
//             }
//         }

//         for(let i=0; i<= outPut.length-1; i++){
//             if(outPut[i] === target){
//                 result.push(outPut[i])
//             }
//         }

//         return result.toString();
// }
// console.log(uniqArr(arr1,1));

// ///////////////////--------Last Index Target Number.-------///////////////
// let arr1 = [1,1,3,4,5,3,7,8,2,5,6,1,7];

// function uniqArr(arr1,target){

//     let result = [];

//         for(let i=0; i <= arr1.length-1; i++){
//             if(arr1[i] === target){
//                 result.push(i);
//             }
//         }
//         return result.length>0 ? result[result.length-1]: -1;
// }
// console.log(uniqArr(arr1,5));

/////////////-----------Convert Numbers to Roman Number -----///////////////////////

// Symbol	I	V	X	L	C	D	M
// Value	1	5	10	50	100	500	1000

// var symbol = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1
// };

// function getRoman(target) {
//     let result = '';

//     for (let key in symbol) {
//         while (target >= symbol[key]) {
//             result += key;
//             target -= symbol[key];
//         }
//     }
//     return result;
// }

// console.log(getRoman(143));
// console.log(getRoman(3999));
// console.log(getRoman(58));

/////////////////////////--------- Example----2///////////////////////////////////
// function getValue(symbol,target){
//         let total = 0;

//       for(let i=0; i < target.length; i++){
//         let current = symbol[target[i]];
//         let next = symbol[target[i+1]];
//         // console.log(current,next)
//         if(next > current){
//               total -= current;
//         } else {
//              total += current;
//         }
//      }

//      return total;
// }
// console.log(getValue(symbol, "IX"));

///////////////---------- Find the largest difference-----////////////

// let arr1 = [-1,2,5,-9,8,18];

// function largestDiff(arr1){
//     let result = [];
//     for(let i=0; i<=arr1.length-1; i++){
//        for(let j=i+1; j<=arr1.length-1; j++){
//        let newResult = arr1[i] - arr1[j];
//       let newArr =  Math.abs(newResult);
//        result.push(newArr);
//        }
//     }
//      let outPut = result.sort((a,b)=> a-b);
//     let nx = outPut.length;
//     // console.log(nx-1,nx);
//     return outPut[nx-1] ;
// }
// console.log(largestDiff(arr1));

/////////////////--------- Integer not occuraing twice ---------////////////////
// for(let j=i+1; j<=arr4.length-1; j++){
//          if(arr4[i] === arr4[j]){
//             result.push(arr4[i]);
//         }
// }

// let arr = [10,1,3,0,10,2,3,0];
// function findSingle(arr) {
//     let result = 0;
//     for (let num of arr) {
//         result ^= num;
//     }
//     return result;
// }
// console.log(findSingle(arr));

// function numOcurr(arr4){
//     let result = [];
//     for(let i=0; i<=arr4.length-1; i++){
//        for(let j=i+1; j<=arr4.length-1; j++){
//                  if(arr4[i] === arr4[j]){
//                     result.push(arr4[i]);
//                 }
//         }
//        }
//     return result;
// }
// console.log(numOcurr(arr4));

/////////////////////////// MathChallenge //////////////////////

// function MathChallenge(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(MathChallenge(5));
// console.log(MathChallenge(10));

///////////////////////////////////////// Count Function /////////////////////////

// function createCounter() {
//   let result = 0;

//   return function count() {
//     console.log("i am in", result);
//     return result++;
//   };
// }

// const count = createCounter();

// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());

// example12//
// nums = [1, 2, 3, 4];
//  [24, 12, 8, 6];
// function productArr(nums) {
//   let result = [];

//   for (let i = 0; i <= nums.length - 1; i++) {
//     // let currNum = nums[i];

//     let product = nums[i] * nums[i + 2] * nums[i + 3];

//     result.push(product);
//   }

//   return result;
// }
// console.log(productArr([1, 2, 3, 4]));

// function produOfArr(nums) {
//   for (let i = 0; i <= nums.length; i++) {
//     let product = nums[i] * nums[i];
//     console.log(product, nums[i]);
//   }
// }
// console.log(produOfArr([1, 2, 3, 4]));

////////************************** */ Example-------2 /*************************////

// function productOfArray(nums) {
//   let product = 1;

//   for (let i = 0; i < nums.length; i++) {
//     product *= nums[i];
//   }

//   return product;
// }

// console.log(productOfArray([1, 2, 3, 4]));

// const arr = [1, 2, 3, 4];

// const product = (arr) => {
//   let result = 1;
//   arr.forEach((x) => {
//     result *= x;
//   });

//   return result;
// };

// const productExceptSelf = (arr) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const remainingArray = [...arr.slice(0, i), ...arr.slice(i + 1)];
//     console.log(remainingArray);
//     result.push(product(remainingArray));
//   }

//   return result;
// };

// console.log(productExceptSelf(arr));

// function occurNum(str) {
//   let string = "";
//   let count = 0;
//   // let result = [];
//   for (let i = 0; i <= str.length - 1; i++) {
//     if (str[i] === str[i + 1]) {
//       string += str[i];
//       count++;
//     } else if (str[i] !== str[i + 1]) {
//       string += str[i];
//       count++;
//     }
//   }
//   // console.log(string);

//   return [string, count];
// }

// console.log(occurNum("abbccc"));
// console.log(occurNum("abbcccdddddddeeeeeeerrrrrrrrr"));

// /////////////////////------------Counter App-------------/////////////////////////
// function createCounter() {
//   let count = 0;
//   return function add() {
//     return count++;
//   };
// }

// let count = createCounter();
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());

////////////////////------------ Example-2------------//////////////////////////
// function createCounter() {
//   let count = 0;
//   return {
//     get count() {
//       return count++;
//     }
//   };
// }

// const counter = createCounter();

// console.log(counter.count);
// console.log(counter.count);
// console.log(counter.count);

// ///////////////////--------Example of REPEATED occurance of letter-----------------------///////////////////////

// function repeatLetter(letter) {
//   let count = 1;
//   let word = "";
//   for (let i = 0; i <= letter.length - 1; i++) {
//     if (letter[i] === letter[i + 1]) {
//       count++;
//     } else {
//       word += letter[i] + count;
//       count = 1;
//     }
//   }

//   console.log(word);

//   return word;
// }
// console.log(repeatLetter("aaabbbcccdddddeeeeeeffffffg"));

///////////////////------------------------- example-2----------------------/////////////////////
// function arrElem(arr1, arr2) {
//   for (let i = 0; i <= arr1.length - 1 && arr2.length - 1; i++) {
//     console.log(arr1[i]);
//     console.log(arr2[i]);
//   }
// }
// console.log(arrElem([1, 2, 3, 4, 5], [3, 2, 1, 6, 7, 8]));

// ////////////////////------------example---2-----------////////////////////////

// function arrElem(arr1, arr2) {
//   let arr3 = [];
//   let arr4 = [];
//   let arr5 = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         arr3.push(arr1[i]);
//       }
//     }
//   }
//   console.log(arr3);

//   for (let i = 0; i < arr2.length; i++) {
//     if (arr3.includes(arr2[i])) {
//       arr4.push(arr2[i]);
//     } else {
//       arr5.push(arr2[i]);
//     }
//   }
//   console.log(arr5);
//   return arr4;
// }
// console.log(arrElem([1, 2, 3, 4, 5], [3, 2, 1, 6, 7, 8, 10, 12]));

/////////////////////////----------------- example-----------3/////////////////////////////////////
function intersect(arr1, arr2) {
  let i = 0,
    j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      result.push(arr1[i]);
      i++;
      j++;
    }
  }

  return result;
}
console.log(intersect([1, 2, 3, 4, 5], [3, 2, 1, 6, 7, 8, 10, 12]));

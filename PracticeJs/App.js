///////////////////--------Example--1-------------/////////////////////
// function singleValue() {
//   let array1 = [10, 9, 2, 10, 8, 7, 8, 9, 5, 4, 7, 2, 5];
//   let result = [];
//   for (let i = 0; i <= array1.length - 1; i++) {
//     for (let j = 0; j <= array1.length; j++) {
//       if (array1[i] > array1[j]) {
//         temp = array1[i];
//         array1[i] = array1[j];
//         array1[j] = temp;
//       }
//     }
//   }

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array1[i - 1] && array1[i] !== array1[i + 1]) {
//       result.push(array1[i]);
//     }
//   }
//   return result;
// }
// console.log(singleValue());

///////////////////--------Example--2 repeated occurance of number-------------/////////////////////

// function getNthNum(numStr) {
//   let count = 0;
//   for (let i = 0; i < numStr.length - 1; i++) {
//     if (numStr[i] !== numStr[i + 1]) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(getNthNum("11"));
// console.log(getNthNum("12"));
// console.log(getNthNum("121"));
// console.log(getNthNum("3112211114211812"));

////////////////////// Examle-3-------------/////////////////////////
// function getNthNum(n) {
//   if (n === 1) return "1";
//   let current = "1";

//   for (let i = 2; i <= n; i++) {
//     let next = "";
//     let count = 1;

//     for (let j = 1; j < current.length; j++) {
//       if (current[j] === current[j - 1]) {
//         count++;
//       } else {
//         next += count + current[j - 1];
//         count = 1;
//       }
//     }

//     next += count + current[current.length - 1];
//     current = next;
//   }

//   return current;
// }
// console.log(getNthNum(1));
// console.log(getNthNum(11));
// console.log(getNthNum(21));
// console.log(getNthNum(111221));
// console.log(getNthNum(312211));
// console.log(getNthNum(1211));

//////////////////////////-------------------- Example-4-------------------////////////////////////////

// function strOccur(str) {
//   let newStr = "";
//   let count = 1;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//       count++;
//     } else {
//       newStr += str[i] + (count > 1 ? count : "");
//       count = 1;
//     }
//   }

//   return newStr;
// }

// console.log(strOccur("abb"));
// console.log(strOccur("aabbc"));
// console.log(strOccur("xyz"));

////////////////////////////----------------- Example-5--------------------/////////////

// function curlyBraces(str) {
//   const stack = [];
//   const pairs = { "(": ")", "{": "}", "[": "]" };
//   for (let char of str) {
//     if (pairs[char]) {
//       stack.push(char);
//     } else {
//       const lastOpen = stack.pop();
//       if (pairs[lastOpen] !== char) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// }

// console.log(curlyBraces("{}()[]"));
// console.log(curlyBraces("{[}]"));
// console.log(curlyBraces("({[]})"));
// console.log(curlyBraces("{[(])}"));
// console.log(curlyBraces("{{[[(())]]}}"));

//------------ Example ----6--winng game---------------/////////////
// function winningStonePicking(n) {
//   return (n % 3 === 1) ? "B" : "A";
// }

// console.log(winningStonePicking(1));
// console.log(winningStonePicking(2));
// console.log(winningStonePicking(3));
// console.log(winningStonePicking(4));
// console.log(winningStonePicking(5));
// console.log(winningStonePicking(6));
// console.log(winningStonePicking(7));
// console.log(winningStonePicking(10));
// console.log(winningStonePicking(15));
// console.log(winningStonePicking(20));

//////////////////------------- Example----7 FizzBuzz App ///////////////////

// function iter() {
//   for (let i = 1; i <= 100; i++) {
//     let output = "";
//     if (i % 3 === 0) output += "Fizz";
//     if (i % 5 === 0) output += "Buzz";
//     console.log(output || i);
//   }
// }
// iter();

//////////-----------Example-8-------------////////////////

// function fibonacci(num) {
//   let a = 0,
//     b = 1;

//   for (let i = 0; i < num; i++) {
//     console.log(a);
//     let next = a + b;
//     a = b;
//     b = next;
//   }
// }

// fibonacci(10);

// // Recursive
// const fibRec = (n) => (n <= 1 ? n : fibRec(n - 1) + fibRec(n - 2));

// // Iterative (O(n))
// const fibIter = (n) => {
//   let [a, b] = [0, 1];
//   for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
//   return b;
// };
// console.log(fibIter(10));

////////////////////---------------- Example -9----------////////////////

// function findMissingNum(arr, n) {
//   let sum = (n * (n + 1)) / 2;
//   let result = 0;

//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
//   }

//   return sum - result;
// }
// console.log(findMissingNum([1, 2, 3, 5], 5));

////////////////////---------------- Example - 10 ----------////////////////

// function findMissNum(arr) {
//   let n = arr.length + 1;
//   let expectedSum = (n * (n + 1)) / 2;
//   let actualSum = arr.reduce((sum, num) => sum + num, 0);

//   return expectedSum - actualSum;
// }

// console.log(findMissNum([1, 2, 3, 5]));

//////////////////////////////-------------------Example-11--------------///////////////////////

// function pyramidPattern(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let str = "";

//     for (let j = 1; j <= rows - i; j++) {
//       str += " ";
//     }

//     for (let k = 1; k <= 2 * i - 1; k++) {
//       if (k % 2 === 0) {
//         str += " ";
//       } else {
//         str += "A";
//       }
//     }
//     console.log(str);
//   }
// }

// pyramidPattern(5);

//////////////---------Example-12---- Steps String Pattern------//////////////////////
// function stringPattern(n) {
//   for (let i = 0; i < n; i++) {
//     let str = "";
//     for (let j = 0; j < i; j++) {
//       str += "A";
//     }
//     console.log(str);
//   }
// }
// stringPattern(10);

/////////////////--------------Example-13-----------Count Vowels---////////////////////

// function countVowel(name) {
//   let str = "";
//   let vowel = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < name.length; i++) {
//     for (let j = 0; j < vowel.length; j++) {
//       if (name[i] === vowel[j]) {
//         str += name[i];
//         break;
//       }
//     }
//   }
//   return str;
// }
// console.log(countVowel("rainbow"));

/////////////////////-------------------Example-14------Title Case------/////////////////////

// function titleCase(name) {
//   let str = "";
//   for (let i = 0; i < name.length; i++) {
//     if (i === 0) {
//       str += name[i].toUpperCase();
//     } else {
//       str += name[i];
//     }
//   }
//   return str;
// }
// console.log(titleCase("venkatesh"));

//////////////-------------Example-15------Array Chunking------/////////////////

// function arrayChunk(array, target) {
//   let newArr = [];

//   for (let i = 0; i < array.length; i += target) {
//     newArr.push(array.slice(i, i + target));
//   }
//   return newArr;
// }
// console.log(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3));

//////////////-------------Example-16------Reverse The String------/////////////////

// function revStr(str) {
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {

//     newStr += str[i];
//   }
//   return newStr;
// }
// console.log(revStr("venkatesh"));

////////////////////----------Example--17-----Palindrome---------//////////////////

// function palindromStr(str) {
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   if (newStr === str) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
//   return newStr;
// }
// console.log(palindromStr("veiev"));

// Max Char

// function maxChar(str) {
//   let newStr = "";
//   let count = 0;
//   for (let i = 0; i < str.length - 1; i++) {
//     for (let j = 0; j < str.length - 1; j++) {
//       if (str[i] !== str[j]) {
//         break;
//       } else {
//         console.log(str[i]);
//       }
//     }
//   }
//   return newStr;
// }
// console.log(maxChar("vivekravan"));

/////////////////-------------Example-2.----------------------//////////////////////////
// function maxChar(str) {
//   let charMap = {};
//   let maxCount = 0;
//   let maxChar = "";

//   for (let char of str) {
//     charMap[char] = (charMap[char] || 0) + 1;
//   }

//   for (let char in charMap) {
//     if (charMap[char] > maxCount) {
//       maxCount = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }

// console.log(maxChar("vivekravan"));

// ////////////// Example-19--//////////
// function sortLibrary(library) {
//   for (let i = 0; i < library.length - 1; i++) {
//     for (let j = 0; j < library.length - 1 - i; j++) {
//       if (library[j].libraryID > library[j + 1].libraryID) {
//         temp = library[j];
//         library[j] = library[j + 1];
//         library[j + 1] = temp;
//       }
//     }
//   }
//   console.log(library);
// }

// // tail starts here
// var library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     libraryID: 1254,
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     libraryID: 4264,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     libraryID: 3245,
//   },
// ];

// sortLibrary(library);

/////////////////-------Example-20--------//////////////

// function binaryToDecmal(num) {
//   for (let i = 0; i <= num.length - 1; i++) {
//     console.log(Math.pow(num[i]));
//   }
// }
// console.log(binaryToDecmal("10"));

// Example -21////
// function compareTriplets(a, b) {
//   let countA = 0;
//   let countB = 0;
//   for (let i = 0; i < 3; i++) {
//     if (a[i] > b[i]) {
//       countA += 1;
//     } else if (a[i] < b[i]) {
//       countB += 1;
//     }
//   }

//   return [countA, countB];
// }

//////=--------- diagonalDifference-----------////////
// function diagonalDifference(arr) {
//   let sum = 0;
//   let sum2 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i][i];
//   }
//   let k = 0;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     sum2 += arr[k][i];
//     k++;
//   }
//   return Math.abs(sum - sum2);
// }

/////////////////<----- Example-23------->//////////////////
// function plusMinus(arr) {
//   let newInt = [];
//   let n = 5;
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > 0) {
//       let result = arr[i] / n;
//       newInt.push(result).toFixed(6);
//     }
//   }
//   return newInt;
// }
// console.log(plusMinus([1, 1, 0, -1, -1]));

/////////////////<-----Flatten Array--------//// Example-23------->//////////////////
// let array = [1, 2, 3, [4, 5, 6], [7, 8, [12, 9, 10], 11], [13, 14, 15]];
// function flatenArray(array, n) {
//   let newArray = [];
//   for (let i = 0; i <= array.length - 1; i++) {
//     if (typeof array[i] === "object" && n > 0) {
//       newArray.push(...flatenArray(array[i], n - 1));
//     } else {
//       newArray.push(array[i]);
//     }
//   }

//   return newArray;
// }
// console.log(flatenArray(array, 2));

////////////////////Pyramid Example///////////-------- Exaple-25-------///////////////////////////

// function staircase(n) {
//   let line = "";
//   for (let i = 1; i <= n; i++) {
//     line = "";
//     for (let j = 0; j < n - i; j++) {
//       line += " ";
//     }
//     for (let k = 0; k < i; k++) {
//       line += "#";
//     }
//   }
//   return [...line, staircase(n - 1)];
// }
// console.log(staircase(6));

///////////// --------------Minimum and Maximum----------///////////
// function miniMaxSum(arr) {
//   let minSum = Infinity;
//   let maxSum = -Infinity;
//   let currentSum;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       for (let k = j + 1; k < arr.length; k++) {
//         for (let l = k + 1; l < arr.length; l++) {
//           currentSum = arr[i] + arr[j] + arr[k] + arr[l];
//           if (currentSum < minSum) {
//             minSum = currentSum;
//             console.log(minSum);
//           }
//           if (currentSum > maxSum) {
//             maxSum = currentSum;
//             console.log(maxSum);
//           }
//         }
//       }
//     }
//   }
//   return [minSum, maxSum];
// }
// console.log(miniMaxSum([1, 3, 5, 7, 9]));
// console.log(
//   miniMaxSum([1, 2, 3, 4, 5, 6, 7, , 13, 8, 12, 9, 10, 11, 13, 14, 15])
// );
// console.log(miniMaxSum([4, 7, 1, 9, 2, 6, 3, 8, 5]));

////////////////////////////---- birthdayCakeCandles-------//////////////////////

// function birthdayCakeCandles(candles) {
//   const maxHeight = Math.max(...candles);
//   let count = 0;
//   for (let i = 0; i < candles.length; i++) {
//     if (candles[i] === maxHeight) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(birthdayCakeCandles([4, 4, 1, 3]));

/////////////////////////--timeConversion---///////////////////////

// function timeConversion(s) {
// let newTime = 0;
// let lastTwoAlp = s.slice(-2);
// let firstTwoNum = +s.slice(0, 2);
// let middleNum = s.slice(3, 5);
// let secondsNum = s.slice(6, 8);

// if (lastTwoAlp === "PM") {
//   newTime += firstTwoNum + 12;
//   newTime += `:${middleNum}:${secondsNum}`;
// } else if (lastTwoAlp === "AM") {
//   newTime = firstTwoNum + `: ${middleNum}:${secondsNum}`;
// }
// if (newTime === `24:${middleNum}:${secondsNum}`) {
//   newTime = `00:${middleNum}:${secondsNum}`;
// }
// return newTime;
// }
// console.log(timeConversion("12:04:45PM"));

////////////////////----------nonDivisibleSubset-----------//////////////////////////
// function nonDivisibleSubset(k, s) {
//   let newArr = [];
//   for (let i = 0; i < s.length - 1; i += k) {
//     newArr.push(s.slice(i, i + k));
//   }
//   return newArr;
// }
// console.log(nonDivisibleSubset(3, [19, 10, 12, 10, 24, 22, 25]));

// function uniqueArr(k, s) {
//   let newArr = [];
//   let newSub = [];

//   for (let i = 0; i <= s.length - 1; i++) {
//     for (let j = i + 1; j < s.length; j++) {
//       if (s[i] > s[j]) {
//         temp = s[i];
//         s[i] = s[j];
//         s[j] = temp;
//       }
//     }
//   }

//   for (let i = 0; i <= s.length - 1; i++) {
//     if (s[i] !== s[i + 1]) {
//       newArr.push(s[i]);
//     }
//   }

//   for (let i = 0; i < newArr.length; i += k) {
//     newSub.push(newArr.slice(i, i + k));
//   }

//   let i = 0;
//   while (i < newSub[i].length) {
//     console.log(newSub[i], newSub[i + 1]);
//     i++;
//   }
//   // return newSub;
// }

// console.log(uniqueArr(3, [19, 10, 12, 10, 24, 22, 25]));

/////<-----------------Exampl - 26 -==- nonDivisibleSubset -------------->////

// function nonDivisibleSubset(k, S) {
//   let remCount = new Array(k).fill(0);

//   for (let num of S) {
//     remCount[num % k]++;
//   }
//   let count = 0;

//   if (remCount[0] > 0) count++;

//   for (let i = 1; i <= Math.floor(k / 2); i++) {
//     if (i === k - i) {
//       count++;
//     } else {
//       count += Math.max(remCount[i], remCount[k - i]);
//     }
//   }

//   return count;
// }
// console.log(nonDivisibleSubset(3, [1, 7, 2, 4]));

//////////////////////----------repeatedString-------------////////////////////

// function repeatedString(n, s) {
//   let fullRepeats = Math.floor(n / s.length);
//   let remainder = n % s.length;
//   let countInFull = (s.split("a").length - 1) * fullRepeats;
//   let countInRemainder = s.slice(0, remainder).split("a").length - 1;
//   return countInFull + countInRemainder;
// }
// console.log(repeatedString(10, "abcac"));

////////////-----------Cloud Jump-------------////////////

// function cloudJump(c) {
//   const frequency = {};
//   let maxFrequency = 0;

//   for (const num of arr) {
//     if (frequency[num]) {
//       frequency[num]++;
//     } else {
//       frequency[num] = 1;
//     }
//     if (frequency[num] > maxFrequency) {
//       maxFrequency = frequency[num];
//     }
//   }

//   return arr.length - maxFrequency;
// }
// console.log(cloudJump([0, 1, 0, 0, 1, 0, 1]));

////////////----------- equalizeArray -------------////////////

// function equalizeArray(arr) {
//   const frequency = {};
//   let maxFrequency = 0;

//   for (const num of arr) {
//     if (frequency[num]) {
//       frequency[num]++;
//     } else {
//       frequency[num] = 1;
//     }
//     if (frequency[num] > maxFrequency) {
//       maxFrequency = frequency[num];
//     }
//   }
//   return arr.length - maxFrequency;
// }
// console.log(equalizeArray([1, 2, 2, 4]));

////////////----------- queensAttack -------------////////////
// function queensAttack(n, k, r_q, c_q, obstacles) {
//   const directions = [
//     { dr: 1, dc: 0 },
//     { dr: -1, dc: 0 },
//     { dr: 0, dc: -1 },
//     { dr: 0, dc: 1 },
//     { dr: 1, dc: -1 },
//     { dr: 1, dc: 1 },
//     { dr: -1, dc: -1 },
//     { dr: -1, dc: 1 },
//   ];

//   const closestObstacles = {};
//   for (const dir of directions) {
//     closestObstacles[`${dir.dr},${dir.dc}`] = null;
//   }

//   for (const [r, c] of obstacles) {
//     const dr = r - r_q;
//     const dc = c - c_q;

//     if (dr === 0 || dc === 0 || Math.abs(dr) === Math.abs(dc)) {
//       let dirDr, dirDc;
//       if (dr === 0) {
//         dirDr = 0;
//         dirDc = dc > 0 ? 1 : -1;
//       } else if (dc === 0) {
//         dirDr = dr > 0 ? 1 : -1;
//         dirDc = 0;
//       } else {
//         dirDr = dr > 0 ? 1 : -1;
//         dirDc = dc > 0 ? 1 : -1;
//       }

//       const key = `${dirDr},${dirDc}`;
//       const distance = Math.max(Math.abs(dr), Math.abs(dc));

//       if (!closestObstacles[key] || distance < closestObstacles[key].distance) {
//         closestObstacles[key] = { distance, r, c };
//       }
//     }
//   }

//   let total = 0;

//   for (const dir of directions) {
//     const key = `${dir.dr},${dir.dc}`;
//     const obstacle = closestObstacles[key];

//     let maxDistance;
//     if (dir.dr === 0) {
//       if (dir.dc === 1) {
//         maxDistance = n - c_q;
//       } else {
//         maxDistance = c_q - 1;
//       }
//     } else if (dir.dc === 0) {
//       if (dir.dr === 1) {
//         maxDistance = n - r_q;
//       } else {
//         maxDistance = r_q - 1;
//       }
//     } else {
//       if (dir.dr === 1 && dir.dc === 1) {
//         maxDistance = Math.min(n - r_q, n - c_q);
//       } else if (dir.dr === 1 && dir.dc === -1) {
//         maxDistance = Math.min(n - r_q, c_q - 1);
//       } else if (dir.dr === -1 && dir.dc === 1) {
//         maxDistance = Math.min(r_q - 1, n - c_q);
//       } else {
//         maxDistance = Math.min(r_q - 1, c_q - 1);
//       }
//     }

//     if (obstacle) {
//       const obstacleDistance = Math.max(
//         Math.abs(obstacle.r - r_q),
//         Math.abs(obstacle.c - c_q)
//       );
//       total += obstacleDistance - 1;
//     } else {
//       total += maxDistance;
//     }
//   }

//   return total;
// }

// console.log(queensAttack(4, 0, 4, 4, []));

// console.log(
//   queensAttack(5, 3, 4, 3, [
//     [5, 5],
//     [4, 2],
//     [2, 3],
//   ])
// );

// console.log(queensAttack(1, 0, 1, 1, []));

/////////////////<------moveZeroes------->////////////////////////
// var moveZeroes = function (nums) {
//   let lastNonZeroIndex = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[lastNonZeroIndex++] = nums[i];
//     }
//   }

//   for (let i = lastNonZeroIndex; i < nums.length; i++) {
//     nums[i] = 0;
//   }

//   return nums;
// };
// console.log(moveZeroes([1, 0, 4, 0, 2, 0, 7, 9, 0]));

///////////////////-----TwoSum-----///////////////////

function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in map) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
  return map;
}

console.log(twoSum([-1, 0, 1, 3, 4, 2, 6], 8));

//////////<---------unique quadruplets--------->//////////////

// const uniqueQuadruplets = (nums, target) => {
//   nums.sort((a, b) => a - b);
//   const res = [];
//   const n = nums.length;

//   for (let i = 0; i < n - 3; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) continue;

//     for (let j = i + 1; j < n - 2; j++) {
//       if (j > i + 1 && nums[j] === nums[j - 1]) continue;

//       let left = j + 1;
//       let right = n - 1;

//       while (left < right) {
//         const sum = nums[i] + nums[j] + nums[left] + nums[right];

//         if (sum === target) {
//           res.push([nums[i], nums[j], nums[left], nums[right]]);

//           while (left < right && nums[left] === nums[left + 1]) left++;
//           while (left < right && nums[right] === nums[right - 1]) right--;

//           left++;
//           right--;
//         } else if (sum < target) {
//           left++;
//         } else {
//           right--;
//         }
//       }
//     }
//   }

//   return res;
// };

/////////////<-------------Example-26--------------->//////////
/////////////<--------Prototype of Filter------------>///////////

function filterPro() {
  
}
console.log(filterPro());

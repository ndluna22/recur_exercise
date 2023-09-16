/** product: calculate the product of an array of numbers. */

function product(nums) {
  //base case
  //if length of nums is equal to zero
  //when base is empty, returns one since multiplying doesn't change value.
  if (nums.length === 0) return 1;
  //normal case
  return nums[0] * product(nums.slice(1));
  //index * remaining
}
product([2, 3, 4]); // 24

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, longestWord = 0) {
  //index i us current index if none then 0 is default
  //longest word to store
  //if the index is equal to the length of words, that means we've reached all words, return longest

  if (i === words.length) return longestWord;
  //compare words[i].length --> current length of word with longest
  if (words[i].length > longestWord) {
    longestWord = words[i].length; //store the longest word
  }
  return longest(words, i + 1, longestWord);
}
longest(["hello", "hi", "hola"]);

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  let newStr = "";
  //base case
  //if you reach the end of the string, return newStr
  if (i >= str.length) return newStr;
  //normal case, increment i to progress through the string
  return str[i] + everyOther(str, i + 2);
}
everyOther("hello"); // "hlo"

/** isPalindrome: checks whether a string is a palindrome or not. */
// a word,phrase, or sequence that reads the same backward as forward

function isPalindrome(str, i = 0) {
  //base case: If i is greater than or equal to the string length minus one,
  //it's a palindrome
  if (i >= str.length - 1) return true;
  //normal case to shrink
  //compare characters at positions i and str.length - 1 - i.
  if (str[i] === str[str.length - 1 - i]) {
    // Make a recursive call to move closer to the middle of the string.
    return isPalindrome(str, i + 1);
  }
  return false;
}

isPalindrome("tacocat"); // true
isPalindrome("tacodog"); // false

/** findIndex: return the index of val in arr (or -1 if val is not present). */
//array --> animals  val --> duck or cat or pony
function findIndex(arr, val, i = 0) {
  //base case: If the current index is greater than or equal to the length of the array,
  //return -1 (indicating not found).
  if (i >= arr.length) return -1;

  // Normal case: Check if the current element is equal to val.
  if (arr[i] === val) return i; // Return the current index if val is found.
  else {
    //recursive to keep shrinking
    return findIndex(arr, val, i + 1);
  }
}

let animals = ["duck", "cat", "pony"];

findIndex(animals, "cat"); // 1
findIndex(animals, "porcupine"); // -1

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0, newStr = "") {
  //base case
  if (i === str.length || i === str.length) return newStr;
  //or  if (i >= str.length) return newStr;
  //normal case
  newStr = str[i] + newStr; //str[i] --> "p" for example
  return revString(str, i + 1, newStr);
}

revString("porcupine"); // 'enipucrop'

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let newArr = [];
  for (let key in obj) {
    //typeof lets you determine what variable is holding
    if (typeof obj[key] === "string") newArr.push(obj[key]);
    if (typeof obj[key] === "object") newArr.push(...gatherStrings(obj[key])); //recursive
  }
  return newArr;
}

let nestedObj = {
  firstName: "Lester",
  favoriteNumber: 22,
  moreData: {
    lastName: "Testowitz",
  },
  funFacts: {
    moreStuff: {
      anotherNumber: 100,
      deeplyNestedString: {
        almostThere: {
          success: "you made it!",
        },
      },
    },
    favoriteString: "nice!",
  },
};

gatherStrings(nestedObj); // ["Lester", "Testowitz", "you made it!", "nice!"];

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};

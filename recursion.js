/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1;
  //i++ creates an infinite loop
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, size = 0) {
  if (i === words.length) return size;
  if (words[i].length > size) { size = words[i].length; }
  return longest(words, i + 1, size);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, letters = "") {
  if (i === str.length) return letters;
  if (i % 2 === 0) { letters = letters + str.charAt(i) }
  return everyOther(str, i + 1, letters);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  if (i === str.length) return true;
  let backIndex = str.length - i;
  if (str.charAt(i) !== str.charAt(backIndex - 1)) return false;
  return isPalindrome(str, i + 1);

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i === arr.length) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0, revStr = "") {
  if (i === str.length) return revStr;
  let backIndex = str.length - i;
  revStr = revStr + str.charAt(backIndex - 1);
  return revString(str, i + 1, revStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, i = 0, arr = []) {
  if (i === Object.keys(obj).length) return arr;
  let keys = Object.keys(obj);
  let key = keys[i]
  if (typeof obj[key] === "string") arr.push(obj[key]);
  if (typeof obj[key] === "object") gatherStrings(obj[key], 0, arr);
  return gatherStrings(obj, i + 1, arr)
}

/** Further Study: binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};

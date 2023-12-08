function isPalindrome(str) {
   reversedWord = str.split("").reverse().join("")
   
    return str == reversedWord
}

module.exports = isPalindrome;

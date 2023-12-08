function reverseString(word) {
    
    splitWord = word.split("")
    reversed = splitWord.reverse()
    return reversed.join("")
}

module.exports = reverseString;

function countOccurrences(word, letter) {
    let result = 0 ;

    for (let i=0;i<word.length;i++){
        if (word[i]==letter){
            result +=1
        }
    }

    return result
}

module.exports = countOccurrences;

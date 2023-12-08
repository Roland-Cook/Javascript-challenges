function findMaxNumber(numbers) {
    let base = 0;

    for (let i=0;i<numbers.length;i++){
        if (numbers[i] > base){
            base = numbers[i]
        }
    }
    return base
}

module.exports = findMaxNumber;

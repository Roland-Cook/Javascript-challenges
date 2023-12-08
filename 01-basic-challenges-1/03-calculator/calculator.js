function calculator(num1,num2,operator) {
    let sum;
    
    if (operator == "+"){
       return num1+num2
    }
    else if (operator == "-"){
      return  num1-num2
    }
    else if (operator == "*"){
      return  num1 * num2
    }
    else if (operator == "/"){
       return num1 / num2
    }
    else return "Not a valid operator"
}

module.exports = calculator;

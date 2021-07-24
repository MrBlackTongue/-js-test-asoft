'use strict'

// Задание 1
function myLisp(str) {
    let count1 = 0
    let count2 = 0
    let count3 = 0
    for (let i = 0; i < str.length ; i++) {
        if (str[i] === '(')
            count1++
        else if (str[i] === ')')
            if (count1 === 0)
                return false
            else
                count1--
        if (str[i] === '[')
            count2++
        else if (str[i] === ']')
            if (count2 === 0)
                return false
            else
                count2--
        if (str[i] === '{')
            count3++
        else if (str[i] === '}')
            if (count3 === 0)
                return false
            else
                count3--
    }
    if (count1 === 0 && count2 === 0 && count3 === 0)
        return  true
    else return false

}

console.log(myLisp('()')) //true
console.log(myLisp('[)')) //false
console.log(myLisp('{}[]()')) //true
console.log(myLisp('([{}])')) //true
console.log(myLisp('())({}}{()][][')) //false

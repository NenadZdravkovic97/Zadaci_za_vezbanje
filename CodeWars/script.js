// spinWords
const spinWords = phrase => {
    console.log(phrase);

    let wordArr = phrase.split(' ');
    console.log(wordArr);

    const reverseString = string => {
        return string.split('').reverse().join('');
    };

    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i].length >= 5) {
            const word = wordArr[i];
            wordArr[i] = reverseString(word);
        }
    }

    return wordArr.join(' ');
};

// Narcisisting number
// A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where n = 3 (number of digits in 153)
// 13 + 53 + 33 = 153

// Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number.

function narcissistic(value) {
    if (isNaN(value) === true) {
        return false;
    }

    let numLength = value.toString().length;
    let numToStr = value.toString();
    console.log(numToStr);
    let sum = 0;
    let numArr = numToStr.split('');
    numArr.forEach(num => {
        let numInt = parseInt(num);
        let powerNum = Math.pow(numInt, numLength);
        sum += powerNum;
    });

    if (value === sum) {
        return true;
    } else {
        return false;
    }
}

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    var vowelsCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let arrStr = str.split('');
    console.log(arrStr);
    arrStr.forEach(letter => {
        vowels.forEach(vowel => {
            if (letter === vowel) {
                vowelsCount++;
            }
        });
    });

    return vowelsCount;
}

// console.log(getCount('radim'));

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

function nbYear(p0, percent, aug, p) {
    let numYears = 0;

    while (p0 < p) {
        p0 = p0 + Math.round(p0 * (percent / 100)) + aug;
        numYears++;
    }

    return numYears;
}

// nbYear(1500, 5, 100, 5000);

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str) {
    let strArr = str.split('');
    let newArr = [];
    for (let i = 0; i < strArr.length; i += 2) {
        if (strArr.length % 2 !== 0) {
            strArr.push('_');
        }
        newArr.push(strArr[i] + strArr[i + 1]);
    }

    return newArr;
}
// console.log(solution('abc'));

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

function validParentheses(parens) {
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
        if (parens[i] == '(') n++;
        if (parens[i] == ')') n--;
        if (n < 0) return false;
    }

    return n == 0;
}
// console.log(validParentheses('()(())'));

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
    let counter = 0;
    let letterArr = text.toLowerCase().split('');
    let alredyFull = {};
    for (const num of letterArr) {
        alredyFull[num] = alredyFull[num] ? alredyFull[num] + 1 : 1;
    }

    let objectValues = Object.values(alredyFull);
    objectValues.forEach(value => {
        if (value > 1) {
            counter++;
        }
    });
    return counter;
}

duplicateCount('indivisibility');

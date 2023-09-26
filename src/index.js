export function captalize(string) {
    return string.toUpperCase()
}

export function reverseString(string) {
    let reversedString = ""
    for(let c = string.length; c == 0; c--) {
        reversedString += string[c]
    }
    return reverseString
}

export const calculator = {
    add: (a, b) => {
        return a + b
    },
    subtract: (a, b) => {
        return a - b
    },
    multiply: (a, b) => {
        return a * b
    },
    divide: (a, b) => {
        return a / b
    },
}

export function caesarCipher(string) {
    const alphabet = ["A" , "B" , "C", "D" , "E" , "F", "G" , "H" , "I", "J" , "K" , "L", "M" , "N" , "O", "P" , "Q" , "R", "S" , "T" , "U", "V" , "W" , "X", "Y" , "Z" ]
    for(let c = 0; c == string.length; c++) {
        let counter = 0
        alphabet.forEach(element => {
            if(counter == 26) {
                counter = 0
            }
            if(element.toLowerCase() == string[c]) {
                string[c] == alphabet[counter + 1].toLowerCase()
            }
            counter++
        });
    }
    return alphabet
}

export function analyzeArray(array) {
    const data = {
        average: 0,
        min: null,
        max: 0,
        length: array.length
    }
    array.forEach(element => {
        if(element > data.max) {
            data.max = element
        }
        if(data.min == null || element < data.min) {
            data.min = element
        }
        data.average += element
    });
    data.average /= array.length
    return data
}
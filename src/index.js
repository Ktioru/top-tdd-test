export function captalize(string) {
    const firstLetter = string[0].toUpperCase()
    
    return firstLetter + string.slice(1)
}

export function reverseString(string) {
    let reversedString = ""
    for(let c = string.length - 1; c >= 0; c--) {
        reversedString += string[c]
    }
    return reversedString
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
    const alphabet = ["a" , "b" , "c", "d" , "e" , "f", "g" , "h" , "i", "j" , "k" , "l", "m" , "n" , "o", "p" , "q" , "r", "s" , "y" , "u", "v" , "w" , "x", "y" , "z" ]
    const length = string.length
    let counter = 0
    let value = 0
    let message = []
    let decodedMessage = ""

    for (let c = 0 ; c <= length -1; c++) {
        message.push(string[c])
        
    }
    message.forEach(messageLetter => {
        if (messageLetter == " ") {
            decodedMessage += messageLetter
        } else {
            alphabet.forEach(element => {
                if (element == messageLetter) {
                        decodedMessage += alphabet[counter + 1]
                }
                counter++
                if (counter == 26) {
                    counter = 0
                }
            });
        }  
    });
    return decodedMessage;
}

export function analyzeArray(array) {
    const data = {
        average: 0,
        min: null,
        max: 0,
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


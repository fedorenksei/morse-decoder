const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let encodedLetters = []
    for (let i = 0; i < expr.length; i += 10) {
        encodedLetters.push(expr.slice(i, i + 10))
    }

    encodedLetters = encodedLetters
        .map(l => {
            if (/\*{10}/.test(l)) return ' '
            morseCode = l
                .replace(/^0*/, '')
                .replace(/10/g, '.')
                .replace(/11/g, '-')
            return MORSE_TABLE[morseCode]
        })
    
    return encodedLetters.join('')
}

module.exports = {
    decode
}
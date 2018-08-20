const el_alphabet = document.getElementById('alphabet');
const el_charKey = document.getElementById('charKey');
const el_charDec = document.getElementById('charDec');
const el_charHex = document.getElementById('charHex');
let el_btnLetter, el_btnHighlight;

let createChars = (firstChar, lastChar) => {
    const chars = [];
    let a = firstChar.charCodeAt(0);
    const z = lastChar.charCodeAt(0);

    for (; a <= z; ++a) {
        chars.push(String.fromCharCode(a));
    }
    for (let i = 0; i < chars.length; i++) {
        el_btnLetter = document.createElement("button");
        el_btnLetter.textContent = (chars[i]);
        el_btnLetter.id = chars[i].codePointAt();
        el_btnLetter.className = "btn";
        el_alphabet.appendChild(el_btnLetter)
    }
    return chars;
};


document.addEventListener('keydown', (event) => {
    el_btnHighlight = document.getElementById(event.key.codePointAt());

    if (el_btnHighlight && isValidChar(event.key)) {
        el_btnHighlight.focus();
        el_charKey.textContent = (`key: ${event.key}`);
        el_charDec.textContent = (`dec: ${event.key.charCodeAt()}`);
        el_charHex.textContent = (`hex: 0xF1${event.key.charCodeAt().toString(16)}`);
    } else {
        el_charKey.textContent = null;
        el_charDec.textContent = null;
        el_charHex.textContent = null;
    }
});

let isValidChar = str => {
    return str.length === 1 && str.match(/[a-z]/i);
}

const lowAlphabet = createChars('a', 'z');

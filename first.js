const filterString = (str, symbol) => {
    let i = 0;
    let result = ''
    while (i < str.length) {
        if (str[i] !== symbol) {
            result = `${result}${str[i]}`
        }
        i += 1
    }
    return console.log(result)
}

const text = 'If I look back I am lost'
filterString(text, 'I')
filterString('zz zorro', 'z')

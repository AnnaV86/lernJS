const encrypt = (text) => {
    let result = ''
    for (let i = 0; i < text.length; i += 2) {
        const nextSymbol = text[i + 1] || '';
        result = `${result}${nextSymbol}${text[i]}`

    } return console.log(result)
}

encrypt('attack'); // 'taatkc'
encrypt('go!'); // 'og!'
const str = 'ffdsf, fdsafa, fsadfsda, fsadfsda, fsadfsda, fdsafsf, f, d, g'

/**
* Функция фильтрует массив по длине слова.
* @param {Array.<string>} arrWords массив слов
* @param {number} wordLength длинна слова
* @returns {Array.<string>} отфильтрованный массив
*/
const filterWordsLength = (arrWords, wordLength) => arrWords.filter(word => wordLength === word.length)


function findMaxAndMinWords(str) {
    const arrStr = str.split(', ')
    const sortWords = arrStr.sort((a, b) => a.length - b.length)
    const maxWordLength = sortWords[sortWords.length - 1].length
    const minWordLength = sortWords[0].length

    return [...filterWordsLength(sortWords, maxWordLength),
    ...filterWordsLength(sortWords, minWordLength)]
}
// [MaxWords, MinWords]


console.log(findMaxAndMinWords(str))
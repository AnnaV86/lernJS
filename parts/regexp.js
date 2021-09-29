//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp




// * применяется ко всем элементам и удаляется искомое значение


function songDecoder1(song) {
    return song.replace(/A*/g, "q")
}

console.log(songDecoder1("BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC  "))  //qBqqCq q q

// + должно быть хоть 1 вхождение искомого значения

function songDecoder(song) {
    return song.replace(/A+/g, "q")
}

console.log(songDecoder("BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC  "))   // BqC  
// BEGIN (write your solution here)
const getHiddenCard = (num, star = 4) => {
    const sliceNum = num.slice(-4);
    const padStar = sliceNum.padStart(star + 4, '*');
    return console.log(padStar);

};
getHiddenCard('1234567812345678');

  // END

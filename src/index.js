// You should implement your task here.

module.exports = function towelSort(arr) {
    if (!arr) return [];
    const arrToReturn = [];
    arr.forEach((item, i) => {
        if (i % 2 === 0) {
            arrToReturn.push(...item);
        } else {
            arrToReturn.push(...item.reverse());
        }
    });
    return arrToReturn;
}
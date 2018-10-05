module.exports = function longestConsecutiveLength(array) {
    let maxCount = 0
        , tempCount = 1;
    array.sort((a, b) => a - b);

    for (let i = 0, len = array.length; i < len; ++i) {
        if (i === 0)
            ++maxCount;

        else if (array[i] === (array[i - 1] + 1)) {
            ++tempCount;
            if (maxCount < tempCount)
                maxCount = tempCount;
        } else if (array[i] === array[i - 1]) {
            continue;
        } else
            tempCount = 1;
    }

    return maxCount;
}
;

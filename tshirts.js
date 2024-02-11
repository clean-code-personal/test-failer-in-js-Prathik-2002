function size(inches) {
    //'S'=36-38, 'M'=39-41, 'L'=41-44,
    if (inches <= 38) {
        return 'S';
    } else if (inches > 38 && inches < 42) {
        return 'M';
    } else {
        return 'L';
    }
}
module.exports={size}
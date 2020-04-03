Function.prototype.defer = function (ms) {
    return setTimeout(this, ms);
}
function printNumb() {
    console.log(ms / 1000, 'seconds');
}
let ms = 3000;
printNumb.defer(3000)

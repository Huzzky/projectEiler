function fact(number, count) {

    if (number != 1) {
        count *= number;
        number--;
        return fact(number, count);
    } if (number == 1) {
        return count;
    }
}

var m = 20;
var n = 20;
var cFirst = ( fact( (m+n), 1 ) )
var cSecond = ( fact(m, 1) * fact(n, 1) )

console.log((cFirst/cSecond).toFixed(0 ));
const starte = new Date();
function rek(n, qty) {
    if (n == 1){
        return qty
    } else if (n % 2 == 0) {
        return rek((n/2), qty+1)
    } else {
        return rek(3*n+1, qty+1)
    }
}

n = 0
a = 0

for (var i=13; i<1000000; i++) {
    c = rek(i, 1)
    if (c > n) {
        a = i;
        n = c;
    }
}
console.log(a, n);
const ende = new Date();
console.log('SecondWay: ', ende, starte, " ms");

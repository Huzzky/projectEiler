// * Самая длинная последовательность Коллатца

// ! n -> n/2 (n - четное)
// ! n -> 3*n + 1 (n - нечетное)

// ? Какой начальный элемент меньше миллиона генерирует самую длинную последовательность?

var count = 0;
var n = 0;
var number = 0;
var numberPoint = 0;
function Starte() {
  for (var i = 13; i<1000000; i++) {
    n = i;
    //n=837799;
    while (n != 1) {

        if (n % 2 == 0) {

            n /= 2;
            number++;
            // console.log(number, n)

        } else if ( n % 2 != 0) {

            n = 3 * n + 1;
            number++;
            // console.log(number, n)
        }
        
    }
    // console.log(number, " this")
    if (count < number) {
        
        count = number;
        number = 0;
        numberPoint = i;
    } else {
        number = 0
    }
}
console.log(count+1);
console.log(numberPoint);
}



const start= new Date();
Starte();
const end = new Date();
console.log('SecondWay: ', end , start, " ms");
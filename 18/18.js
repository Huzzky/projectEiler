var a = 1;
var checkNumber = 0;
var sum = 0;



function returnMaxNumberInLine(lengthLine) {
    for(let i = 1; i < lengthLine; i++) {

        let mr = parseInt(Math.random() * 100);

        if (i == 1) {

            checkNumber = mr;
            return mr;
        } 
        else if (i > 1) {

            if (checkNumber < mr) {
                checkNumber = mr;
            }
        }
    }

    return checkNumber;
}



while (a < 16) {

    sum += returnMaxNumberInLine(a+1);
    a++;
}

console.log(sum);

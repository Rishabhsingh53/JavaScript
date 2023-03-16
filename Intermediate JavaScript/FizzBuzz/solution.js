output = [1];

function fizzbuzz() {
    n = output.length 
    if ( ( n + 1) % 3 == 0 && ( n + 1) % 5 == 0 ) {
        output.push("FizzBuzz");
    }
    else if ( (n + 1 ) % 3 == 0) {
        output.push("Fizz");
    }
    else if ( (n + 1) % 5 == 0) {
        output.push("Buzz");
    }
    else {
        output.push(n+1);
    }
    
    console.log(output);
}

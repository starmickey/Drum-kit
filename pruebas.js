function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2){
    return num1 * num2;
}

function calc(num1, num2, operation){
    return operation(num1,num2);
}




function main() {
    var num1 = 3;
    var num2 = 4;
    var operation = add;

    var result = calc(num1, num2, operation);
    console.log(result);
}
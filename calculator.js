const add = function (a,b){
    return a + b;
};
const subtract = function (a,b){
    return a - b;
};
const multiply = function (a,b){
    return a * b;
};
const divide = function (a,b){
    return a / b;
};

const operate = function(a,b,c){
    switch(b){
        case "+":
            add(a,c);
            break;
        case "-" :
            subtract(a,c);
            break;
        case "*":
            multiply(a,c);
            break;
        case "/":
            divide(a,c);
            break;
    }
}
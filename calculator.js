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


const operate = function (){
    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y
}

const updateDisplay = function(val){
    document.getElementById("result").value += val;
    return val;
}
const clearScreen = function(){
    document.getElementById("result").value = "";
}
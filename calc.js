function displayValue(num){
    // result is id of 
    //input tag
    result.value += num
}

function allClear(){
    result.value =""
}

function evaluateOut(){
   result.value= eval(result.value)
}

function back(){
    result.value= result.value.slice(0,-1)
}
const display = document.getElementById('display')
let value1 = ""
let value2 = ""
let operator = ""

function press(input){
    if (display.textContent.length < 12) {
        if(display.innerText == 0){  
                display.innerText = input
        }
        else{
            display.innerText += input
        }
    } else if (display.textContent.length == 12) {
        display.innerText = display.innerText + "..."
    }
}
function decimal() {
    if (!display.innerText.includes(".")) {
        display.innerText += "."
    }
}
function clr(){
    if(display.innerText != '0'){
        display.innerText = '0'
    }
}

function setOP(op){
    value1 = display.innerText
    operator = op
    console.log(value1)
    console.log(operator)
    clr()
    // value2 = value1
    console.log(value2)
    console.log(operator)
}

function calculate(){
    let result = null
    let a = +value1
    // let b = parseFloat(value2)
    if(operator == '+'){
        result = a + +display.innerText //shorthand for converting string to number
    }else if(operator == '-'){
        result = a - parseFloat(display.innerText)
    }else if(operator == '*'){
        result = a * parseFloat(display.innerText)
    }else if(operator == '/'){
        result = a / parseFloat(display.innerText)
    }
    result = result.toString()
    if (result.length < 12) {
        display.innerText = result
        console.log("test")
    } else if (result.length >= 12) {
        display.innerText = result.substring(0,12) + "..."
        console.log("test1")
    }
    
    console.log(result)
    console.log(a)
}
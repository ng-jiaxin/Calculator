const screen = document.querySelector('.screen')
const clearBtn = document.querySelector('#clear')
const delBtn = document.querySelector('#delete')
const numBtn = document.querySelectorAll('#number')
const zeroBtn = document.querySelector('#zero')
const deciBtn = document.querySelector('#decimal')
const allBtn = document.querySelectorAll('.btn')
// const equalBtn = document.querySelector('#equal')

let operation = null
let operationActive = 0
let operationCounter = 0
let equaltrue = 0
let x = null
let y = null
let deciTrue = 0

numBtn.forEach((button)=>button.addEventListener('click',()=>addInput(button.textContent)))
zeroBtn.addEventListener('click',()=>addInput(zeroBtn.textContent))
clearBtn.addEventListener('click',()=>clearInput())
delBtn.addEventListener('click', ()=>deleteInput())
deciBtn.addEventListener('click',()=>addDeci())
// equalBtn.addEventListener('click',()=>equalOutput())
// allBtn.forEach((button)=>button.addEventListener('click',()=>chooseOperator(button.id)))


// function chooseOperator(operator){
//     if(operator == 'divide' || operator == 'multiply' || operator == 'add' || operator == 'subtract'){
//         operation = operator
//         console.log(operation)
//     }
// }

// function equalOutput(){
//     chosenOperator = chooseOperator()
//     evaluateResult()
// }

allBtn.forEach((button)=>button.addEventListener('click',()=>{
    userSelect = button.id
    if(userSelect == 'divide' || userSelect == 'multiply' ||userSelect ==  'add' ||userSelect ==  'subtract'){
        operation = userSelect
        deciTrue = 0
        operationCounter += 1
        operationActive = 1
        console.log(operationCounter)

        if(operationCounter == 1 ){
            x = screen.textContent
        }
        if(operationCounter == 2){
            y = screen.textContent
            evaluateResult(x,y,operation)
            x = screen.textContent
            operationCounter = 1
            console.log('reset to ' + operationCounter)
        }
    }
    if(userSelect == 'equal'){
        if(operation != null){
            y = screen.textContent
            evaluateResult(x,y,operation)
            equaltrue = 1
            operation = null 
            deciTrue = 0
            operationCounter = 0
        }
        else{
            screen.textContent = screen.textContent
        }
    }
}  
))

function addInput(number){
    if(screen.textContent == 0){
        reset()
    }
    if(operation != null && operationActive == 1){
        console.log('oaactivated')
        operationActive = 0
        reset()
    }
    if(screen.textContent == 'Infinity'){
        reset()
    }
    if(equaltrue == 1){
        console.log('eqtactivated')
        equaltrue = 0 
        reset()
    }
    screen.textContent += number
}

function reset(){
    screen.textContent=''
}

function clearInput(){
    screen.textContent = 0
}

function deleteInput(){
    if(screen.textContent.length == 1){
        screen.textContent = 0
    }
    else{
        screen.textContent = screen.textContent.slice(0,-1)
    } 
}

function addDeci(){
    if(deciTrue == 0 && equaltrue == 0){
        screen.textContent += '.'
        deciTrue = 1
    }
}

function evaluateResult(x,y,operation){
    console.log('x is ' + x)
    console.log('y is ' + y)
    console.log(operation)
    if(operation == 'divide'){
        if(y == '0'){
            value = 'Infinity'
        }
        else{
            value = divide(x,y)
        }
    }
    if(operation == 'multiply'){
        value = multiply(x,y)
    }
    if(operation == 'add'){
        value = add(x,y)
    }
    if(operation == 'subtract'){
        value = subtract(x,y)
    }
    screen.textContent = value
}

function add(x,y){
    return +x + +y
}

function subtract(x,y){
    return x-y
}

function multiply(x,y){
    return x*y
}

function divide(x,y){
    return x/y
}

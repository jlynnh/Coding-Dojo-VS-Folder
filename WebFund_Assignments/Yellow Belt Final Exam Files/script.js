function hide(button1) {
    button1.remove();
}

var count = 3;
var countPepper = document.querySelector ('#petpepper');
console.log (countPepper)

function addpepper(){
    count++;
    countPepper.innerText = count + " like(s)";
    console.log (countPepper)
}

var plus = 5;
var plusBruce = document.querySelector ("#petbruce");
console.log (plusBruce)

function addbruce(){
    plus++;
    plusBruce.innerText = plus + " likes(s)";
    console.log (plusBruce)
}

var finish = 8;
var finishOscar = document.querySelector ("#petoscar");
console.log (finishOscar)

function addoscar(){
    finish++;
    finishOscar.innerText = finish + " likes(s)";
    console.log (finishOscar)
}

function petChoice(select){
    alert('You are looking for a: ' + select.options[select.selectedIndex].text);
}
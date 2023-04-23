var count = 9;
var countElement = document.querySelector ('#count');
console.log (countElement)

function add(){
    count++;
    countElement.innerText = count + " like(s)";
    console.log (count)
}

var plus = 12;
var plusNichole = document.querySelector ("#countnichole");
console.log (plusNichole)

function addnichole(){
    plus++;
    plusNichole.innerText = plus + " likes(s)";
    console.log (plusNichole)
}

var finish = 9;
var finishJim = document.querySelector ("#countjim");
console.log (finishJim)

function addjim(){
    finish++;
    finishJim.innerText = finish + " likes(s)";
    console.log (finishJim)
}
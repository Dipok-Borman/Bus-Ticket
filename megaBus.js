
const allTicket = 1;
let firstInputArea = document.getElementById("firstTicket").value;
document.getElementById("firstTicket").value = allTicket;

// plus function:
function increase(id) {
    let tickets = document.getElementById(id).value;
    tickets = parseFloat(tickets);
    const newTickets = tickets + 1;
    document.getElementById(id).value = newTickets;
}

// Minus function:
function decrease(id) {
    let tickets = document.getElementById(id).value;
    tickets = parseFloat(tickets);
    const newTickets = tickets - 1;
    document.getElementById(id).value = newTickets;
}

// firstPlus Button:
const firstPlus = document.getElementById("firstPlus");
firstPlus.addEventListener('click', function(){

    increase("firstTicket");

    firstSubTotal("subTotal");

    subTotalVat("subTotal");

    allTotalCalculate("subTotal", "vat");

})

// firstMinus button:
const firstMinus = document.getElementById("firstMinus");
firstMinus.addEventListener('click', function(){

    decrease("firstTicket");

    firstSubTotalMinus("subTotal");

    subTotalVat("subTotal");

    allTotalCalculate("subTotal", "vat");
})


let economyInputArea = document.getElementById("economyTicket").value;
document.getElementById("economyTicket").value = allTicket;

//Economy Plus Button:
const economyPlus = document.getElementById("economyPlus");
economyPlus.addEventListener('click', function() {
    
    increase("economyTicket");

    economySubTotal("subTotal");

    subTotalVat("subTotal");

    allTotalCalculate("subTotal", "vat");

})


//Economy Minus Button:
const economyMinus = document.getElementById("economyMinus");
economyMinus.addEventListener('click', function() {
    
    decrease("economyTicket");

    economySubTotalMinus("subTotal");

    subTotalVat("subTotal");

    allTotalCalculate("subTotal", "vat");
})




//First multiple ticket value:
function firstSubTotal(id) {
    const a = document.getElementById(id);
    const aa = a.innerText;
    const aaa = parseFloat(aa);
    const aaaa = aaa + 150;
    document.getElementById('subTotal').innerText = aaaa;
}

function firstSubTotalMinus(id) {
    const subTotal = document.getElementById(id).innerText;
    const pressMinus = subTotal -150;
    document.getElementById('subTotal').innerText = pressMinus;
}

//Economy multiple ticket value:
function economySubTotal(id) {
    const firstInput = document.getElementById(id).innerText;
    const firstInputNumber = parseFloat(firstInput); 
    const calculate = firstInputNumber + 100;
    document.getElementById("subTotal").innerText = calculate;
}

function economySubTotalMinus(id) {
    const firstInput = document.getElementById(id).innerText;
    const firstInputNumber = parseFloat(firstInput); 
    const calculate = firstInputNumber - 100;
    document.getElementById("subTotal").innerText = calculate;
}


// subTotal vat :
function subTotalVat(id) {
    const firstInput = document.getElementById(id).innerText;
    const firstInputNumber = parseFloat(firstInput);
    const vat = (firstInputNumber * 10) / 100;
    document.getElementById("vat").innerText = vat;
}

// allTotal calculate:
function allTotalCalculate(id1, id2) {
    const id1string = document.getElementById(id1).innerText;
    const id1Number = parseFloat(id1string);
    const id2String = document.getElementById(id2).innerText;
    const id2Number = parseFloat(id2String);
    const allTotalDollar = id1Number + id2Number;
    document.getElementById("allTotal").innerText = allTotalDollar;
}

// document
document.addEventListener("submit", function (event) {

    event.preventDefault();


    let skieco = parseInt(document.getElementById("skieco").value);
    let skiinter = parseInt(document.getElementById("skiinter").value);
    let skiperf = parseInt(document.getElementById("skiperf").value);
    let snoweco = parseInt(document.getElementById("snoweco").value);
    let snowinter = parseInt(document.getElementById("snowinter").value);
    let snowperf = parseInt(document.getElementById("snowperf").value);

    if (skieco === 0 && skiinter === 0 && skiperf === 0 && snoweco === 0 & snowinter === 0 && snowperf === 0) {
        
        document.getElementById("discountmessage").innerHTML = "Please chose the amount of tickets to calculate the price";
    } else {
        
        document.getElementById("discountmessage").innerHTML = ""

        let totskieco = 90*skieco;
        let totskiinter = 120*skiinter;
        let totskiperf =  145*skiperf;
        let totsnoweco =  119*snoweco
        let totsnowinter = 145*snowinter;
        let totsnowperf = 170*snowperf;
        let total = totskieco + totskiinter + totskiperf + totsnoweco + totsnowinter + totsnowperf;

        if(skieco + skiinter + skiperf + snoweco + snowinter + snowperf >= 4) {
            let discountedTotal = total - (total*10/100);

            console.log("discounted total: ",discountedTotal);
            console.log("total: ",total)

            document.getElementById("discountmessage").innerHTML = "<strike>Full price: £" + total + "</strike>";
            document.getElementById("h-price").innerHTML = "Discounted price:";
            document.getElementById("totalcheckout").innerHTML = "£" + discountedTotal;
        }
        else{
            document.getElementById("totalcheckout").innerHTML = "£" + total;
        }
    }
});
// if values are all 0
// alert please enter amount
//else
//get ecoTotal = input number * ecoprice
//get interTotal = input number * interprice
//get perfTotal = input number * perfprice
//get total = ecoTotal + interTotal + perfTotal

//if (eco + inter + perf < 4)                
//document.getelementbyid("totalcheckout").innerHTML = total;
//else (input > 4)
//discountedTotal = total - (total*10/100);
//document.getelementbyid("discountmessage").innerHTML = total; BUT CHANGE THE TEXT STYLE LIKE IT'S CROSSED OVER AND COLOUR
//document.getelementbyid("totalcheckout").innerHTML = discountedTotal;
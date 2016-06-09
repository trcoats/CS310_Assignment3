var carType = document.getElementById("carType").value;

var insuranceYes = document.getElementById("insuranceYes");
var insuranceNo = document.getElementById("insuranceNo");
var insuranceSelection;

var daysRented = document.getElementById("daysRented");

var price;

function buttonPressed()
{
    getSelectedButton();
    if(carType = "Compact"){
        if(insuranceSelection = "yes"){
            price = daysRented.value*(30+15);
        }
        else{
            price = daysRented.value*30;
        }
    }
    else if(carType = "Intermediate"){
        if(insuranceSelection = "yes"){
            price = daysRented.value*(40+15)
        }
        else{
            price = daysRented.value*40;
        }
    }
    else {
        if(insuranceSelection = "yes"){
            price = daysRented.value*(50+15)
        }
        else{
            price = daysRented.value*50;
        }
    }
    alert("Total price of the rental: $" + price);
}

function getSelectedButton(){
    if (insuranceYes.selected){
        insuranceSelection = insuranceYes.value;
    }
    else{
        insuranceSelection = insuranceNo.value;
    }
}


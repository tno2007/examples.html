//This JS file will get values from user and calc PAYE for 2023/2024
//set variables
var monthlyIncome = 0;
var annualIncome = 0; //formatted annual income
var annualInc = 0; //raw annual income
var monthlyTax = 0;
var annualTax = 0;
var nettoIncome = 0;
var annualRebate = 0;
var UIF = 0;
var theVal = 0;

//tax bands
var level1_bottom = 0;
var level1_top = 237100;
var level1_tax = 0.18;
var level2_bottom = 237101;
var level2_top = 370500;
var level2_tax = 0.26;
var level3_bottom = 370501;
var level3_top = 512800;
var level3_tax = 0.31;
var level4_bottom = 512801;
var level4_top = 673000;
var level4_tax = 0.36;
var level5_bottom = 673001;
var level5_top = 857900;
var level5_tax = 0.39;
var level6_bottom = 857901;
var level6_top = 1817000;
var level6_tax = 0.41;
var level6_bottom = 1817001;
var level6_top = 99999900000;
var level6_tax = 0.45;
var UIFcap = 177.12;

//rebates
var annualRebatenderunder = 17235;
var annualRebatenderbetween = (annualRebatenderunder + 9444);
var annualRebatenderover = (annualRebatenderbetween + 3145);

//trigger payeCalc from 3 age brackets
var chosenAge = document.getElementsByName('age');
for (var i = chosenAge.length; i--;) {
    chosenAge[i].onchange = function () {
        if (this.value == 1) {
            theVal = annualRebatenderunder;
        } else if (this.value == 2) {
            theVal = annualRebatenderbetween;
        } else if (this.value == 3) {
            theVal = annualRebatenderover;
        }
        payeCalc(theVal);
    }
}

function payeCalc(val) {
    //get form values
    monthlyIncome = document.getElementById('monthlyIncome').value;

    annualRebate = val;

    if (chosenAge == 1) {
        annualRebate = annualRebatenderunder;
    } else if (chosenAge == 2) {
        annualRebate = annualRebatenderbetween;
    } else if (chosenAge == 3) {
        annualRebate = annualRebatenderover;
    }

    //basic salary calculations
    monthlyIncome = Number.parseFloat(monthlyIncome);
    annualIncome = Number.parseFloat(Math.round(monthlyIncome * 12));
    annualInc = Number.parseFloat(Math.round(monthlyIncome * 12));

    //calc paye
    if (annualInc > level1_bottom && annualInc < level1_top) {
        annualTax = ((annualInc * level1_tax) - annualRebate);
    } else if (annualInc > level2_bottom && annualInc < level2_top) {
        annualTax = (((level1_top * level1_tax) + ((annualInc - level1_top) * level2_tax)) - annualRebate);
    } else if (annualInc > level3_bottom && annualInc < level3_top) {
        annualTax = (((level1_top * level1_tax) + ((level2_top - level1_top) * level2_tax) + ((annualInc - level2_top) * level3_tax)) - annualRebate);
    } else if (annualInc > level4_bottom && annualInc < level4_top) {
        annualTax = (((level1_top * level1_tax) + ((level2_top - level1_top) * level2_tax) + ((level3_top - level2_top) * level3_tax) + ((annualInc - level3_top) * level4_tax)) - annualRebate);
    } else if (annualInc > level5_bottom && annualInc < level5_top) {
        annualTax = (((level1_top * level1_tax) + ((level2_top - level1_top) * level2_tax) + ((level3_top - level2_top) * level3_tax) + ((level4_top - level3_top) * level4_tax) + ((annualInc - level4_top) * level5_tax)) - annualRebate);
    } else if (annualInc > level6_bottom) {
        annualTax = (((level1_top * level1_tax) + ((level2_top - level1_top) * level2_tax) + ((level3_top - level2_top) * level3_tax) + ((level4_top - level3_top) * level4_tax) + ((level5_top - level4_top) * level5_tax) + ((annualInc - level5_top) * level6_tax)) - annualRebate);
    }
    //calc UIF
    UIF = (monthlyIncome * 0.01);
    if (UIF > UIFcap) UIF = UIFcap;

    //calc monthly tax
    monthlyTax = (annualTax / 12);
    if (monthlyTax < 0) monthlyTax = 0;
    if (annualTax < 0) annualTax = 0;

    //write results
    document.getElementById('annualIncome').innerHTML = currencyFormat(annualIncome);
    document.getElementById('monthlyInc').innerHTML = currencyFormat(monthlyIncome);
    document.getElementById('monthlyTax').innerHTML = currencyFormat(monthlyTax);
    document.getElementById('annualTax').innerHTML = currencyFormat(annualTax);
    document.getElementById('nettoIncome').innerHTML = currencyFormat(((annualInc / 12) - monthlyTax) - UIF);
    document.getElementById('UIF').innerHTML = currencyFormat(UIF);
    document.getElementById('addResult').className = "panel panel-success";
    document.getElementById('addResult').style.backgroundColor = "#DFF0D8";
}

// Reset form
function resetCalc() {
    document.getElementById("calcForm").reset();
    document.getElementById('annualIncome').innerHTML = 0.00;
    document.getElementById('monthlyInc').innerHTML = 0.00;
    document.getElementById('monthlyTax').innerHTML = 0.00;
    document.getElementById('annualTax').innerHTML = 0.00;
    document.getElementById('UIF').innerHTML = 0.00;
    document.getElementById('nettoIncome').innerHTML = 0.00;
}

//currency formatting
function currencyFormat(num: number) {
    var monthlyIncome = 0;
    var vatamount = 0;
    var totalamount = 0;
    return `R${num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`
}
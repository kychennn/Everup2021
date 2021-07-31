console.log('Part A');
const caltip = bill => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    console.log(`The bill is ${bill}, the tip is ${tip} total is ${bill+tip}`);
}

caltip(275);
caltip(28);
caltip(430);






console.log('\nPart B');
function celsiusToFahrenheit(celsiusC){
    const fahrenheitF = (celsiusC * 9/5)+32;
    console.log(celsiusC + "°C is " + fahrenheitF + "°F");
}

function fahrenheitToCelsius(fahrenheitF1){
    const celsiusC1 = (fahrenheitF1 - 32) * 5/9;
    console.log(fahrenheitF1 + "°F is " + celsiusC1 + "°C");
}
celsiusToFahrenheit(32);
fahrenheitToCelsius(32);






console.log('\nPart C');
function calcAverage(score1,score2,score3){
    return (score1+score2+score3)/3;
}

function checkWinner(avgNets, avgKnicks){
    if(avgNets >= avgKnicks*2){
        console.log(`Nets win! Nets(${avgNets}) vs. Knicks(${avgKnicks})`);
    }
    else if(avgNets*2 <= avgKnicks){
        console.log(`Knicks win! Nets(${avgNets}) vs. Knicks(${avgKnicks})`);
    }
    else{
        console.log(`Nets(${avgNets}) vs. Knicks(${avgKnicks}). No team wins!`);
    }
    
}

const Nets1 = calcAverage(44,23,71);
const Knicks1 = calcAverage(65,54,49);
const Nets2 = calcAverage(85,2354,41);
const Knicks2 = calcAverage(23,34,27);

checkWinner(Nets1,Knicks1);
checkWinner(Nets2,Knicks2);



console.log('\nPart D');
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];

for (let i = 0; i < 3; i++){
    console.log(`The bill ${i} is ${bills[i]}, the tip is ${tips[i]} total is ${total[i]}.`);
}
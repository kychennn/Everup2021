// Part A
//The Temperature Converter
console.log("Part A")
let celsius1 = 30;
let fahrenheit1 = (celsius1 * 9/5)+32;
console.log(celsius1 + "°C is " + fahrenheit1 + "°F");

let fahrenheit2 = 32;
let celsius2 = (fahrenheit2 - 32) * 5/9;
console.log(fahrenheit2 + "°F is " + celsius2 + "°C");

// Part B
console.log("\nPart B")
const LucasWeight1 = 78;
const JohnWeight1 = 92;
const LucasHeight1 = 1.69;
const JohnHeight1 = 1.95;

const LucasBMI1 = LucasWeight1 / LucasHeight1 ** 2;
const JohnBMI1 = JohnWeight1 /JohnHeight1 **2;

const lucasHigherBMI1 = LucasBMI1 > JohnBMI1;
console.log(`The BMI of Lucas is ${LucasBMI1}, and BMI of John is ${JohnBMI1}, Lucas has a higher BMI than John, which is ${lucasHigherBMI1}`);

if(LucasBMI1 > JohnBMI1){
    console.log(`Lucas'BMI(${LucasBMI1}) is higher than John's(${JohnBMI1})!`);
}

else{
    console.log(`John's BMI(${JohnBMI1}) is higher than Lucas's((${LucasBMI1})!`);
}

// Part C
console.log("\nPart C")
const Nets1 = 96;
const Nets2 = 108;
const Nets3 = 89;
const Knicks1 = 88;
const Knicks2 = 91;
const Knicks3 = 110;

const NetsAverage = (Nets1 + Nets2 + Nets3) / 3;
const KnicksAverage = (Knicks1 + Knicks2 + Knicks3 ) / 3;
console.log( "Nets(" + NetsAverage + ") VS Knicks(" + KnicksAverage +")" );

if ( NetsAverage > KnicksAverage )
{
    console.log( "Nets wins!" );
}

else if (NetsAverage < KnicksAverage )
{
    console.log( "Knicks wins!" );
}

else{
    console.log( "Draw!" );
}


// Part C Bonus 1
console.log("\nPart C Bonus 1")
const Nets1Bonus1 = 97;
const Nets2Bonus1 = 112;
const Nets3Bonus1 = 101;
const Knicks1Bonus1 = 109;
const Knicks2Bonus1 = 95;
const Knicks3Bonus1 = 123;

const NetsBonus1Average = (Nets1Bonus1 + Nets2Bonus1 + Nets3Bonus1) /3;
const KnicksBonus1Average = (Knicks1Bonus1 + Knicks2Bonus1 + Knicks3Bonus1) / 3;
console.log( "Nets(" + NetsBonus1Average + ") VS Knicks(" + KnicksBonus1Average +")" );

if ( NetsBonus1Average > KnicksBonus1Average && NetsBonus1Average >= 100)
{
    console.log( "Nets wins!" );
}

else if (NetsBonus1Average < KnicksBonus1Average && KnicksBonus1Average >= 100)
{
    console.log( "Knicks wins!" );
}



// Part C Bonus 2
console.log("\nPart C Bonus 2")
const Nets1Bonus2 = 97;
const Nets2Bonus2 = 112;
const Nets3Bonus2 = 101;
const Knicks1Bonus2 = 109;
const Knicks2Bonus2 = 95;
const Knicks3Bonus2 = 106;

const NetsBonus2Average = (Nets1Bonus2 + Nets2Bonus2 + Nets3Bonus2) / 3;
const KnicksBonus2Average = (Knicks1Bonus2 + Knicks2Bonus2 + Knicks3Bonus2) / 3;
console.log( "Nets(" + NetsBonus2Average + ") VS Knicks(" + KnicksBonus2Average +")" );

if ( NetsBonus2Average >= 100 || KnicksBonus2Average >= 100){
    if ( NetsBonus2Average > KnicksBonus2Average )
    {
        console.log( "Nets wins!" );
    }

    else if (NetsBonus2Average < KnicksBonus2Average )
    {
        console.log( "Knicks wins!" );
    }

    else{
        console.log( "Draw!" );
    }
}

else{
    console.log( "No team wins the trophy" );
}
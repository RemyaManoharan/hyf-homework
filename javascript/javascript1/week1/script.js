//Future Age Calculator
console.log("Sample program to find future age");
const yearOfBirth=1987;
const yearFuture=2027;
const age = yearFuture-yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}`);

// Dog Age Calculator
const dogYearOfBirth=1975;
const dogYearFuture=2045;
let dogYear;

function dogYearcalculator(shouldShowResultInDogYears)
{
if(shouldShowResultInDogYears)
{
dogYear=(dogYearFuture-dogYearOfBirth)/7;
}
else

{
    dogYear=dogYearFuture-dogYearOfBirth;
}
 console.log(`Your dog will be ${dogYear} in ${dogYearFuture}`);
}
dogYearcalculator(true);
dogYearcalculator(false);

//Home work 3 Housey pricey (A house price estimator)
// two objects created
const peterHouse = {
    width: 8,
    depth: 10,
    high: 10,
    garden_size:100,
    cost:2500000
  };
  const juliaHouse = {
    width: 5,
    depth: 11,
    high: 8,
    garden_size:70,
    cost:1000000
  };

function findVolume(w,d,h)
{
volumeInMeters=w*d*h;
return volumeInMeters;
}
function housePricecalculator(volumeInMeters,garden_size){
housePrice = volumeInMeters * 2.5 * 1000 + garden_size* 300;
return housePrice;
}

let peterHouseVolume=findVolume(peterHouse.width,peterHouse.depth,peterHouse.high);
let juliaHouseVolume=findVolume(juliaHouse.width,juliaHouse.depth,juliaHouse.high);
let peterHouseprice=housePricecalculator(peterHouseVolume,peterHouse.garden_size);
let juliaHousePrice=housePricecalculator(juliaHouseVolume,juliaHouse.garden_size);
let peterResult = (peterHouseprice<peterHouse.cost) ? "Peter is paying too much":"peter is paying low";
console.log(peterResult);
let juliaResult=(juliaHousePrice<juliaHouse.cost) ? "Julia is paying too much" : "Julia is paying too low";
console.log(juliaResult);


// Startup name generator)

const firstWords=[ "Easy", "Awesome", "Corporate","Entri","Porch","SpringBoard","Infoyis","InApp","AppIva","ClassPlus"];
const secondWords=["Hub","Services","Consultancy","Technology","DataBricks","InstaCart","SpaceX","Games","EduTech","Company"];
let startupName;
const randomNumber = Math.floor(Math.random() * 10);
startupName=firstWords[randomNumber].concat(" ",secondWords[randomNumber]);
let startUpLength=startupName.length;
console.log(`The startup:${startupName} contains ${startUpLength} characters`);

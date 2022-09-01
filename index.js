const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers() { 
    return drivers.slice(0,2);
}
function returnLastTwoDrivers() {
    return drivers.slice(2,4);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let fare = 5;



const createFareMultiplier = multiplier => function(fare) 
{ return fare * multiplier };

const fareDoubler = createFareMultiplier(2); 
fareDoubler(fare);

const fareTripler = createFareMultiplier(3); 
fareTripler(fare);

const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers, returnLastTwoDrivers) {
        return returnFirstTwoDrivers(drivers.slice(0,2))
}
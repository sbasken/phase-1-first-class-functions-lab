// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = (arr) => {
  return arr.slice(0, 2)
}
returnFirstTwoDrivers(drivers)

const returnLastTwoDrivers = (arr) => {
    return arr.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int) => {
    return function (fare) {
        return fare * int
    }
}
const innerFunction = createFareMultiplier(5)
console.log(innerFunction)


const fareDoubler = createFareMultiplier(2)
console.log(fareDoubler(2))

const fareTripler = createFareMultiplier(3)
console.log(fareTripler(2))

const selectDifferentDrivers = (drivers, func) => {
    let selectDifferentDrivers = [];
    if (func === returnFirstTwoDrivers) {
        selectDifferentDrivers = returnFirstTwoDrivers(drivers)
    } else if (func === returnLastTwoDrivers) {
        selectDifferentDrivers = returnLastTwoDrivers(drivers)
    }
    return selectDifferentDrivers
}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers))
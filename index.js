// Code your solution here
function findMatching(driverList, name) {
    const result = driverList.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return result;
};

function fuzzyMatch(driverList, letter){
    const foundInitital = driverList.filter(driver => driver.toLowerCase().charAt(0) === letter.toLowerCase().charAt(0));
    return foundInitital;
};

function matchName(driverList, driverName) {
    const result = driverList.filter(driver => driver.name.toLowerCase() === driverName.toLowerCase());
    return result;
};

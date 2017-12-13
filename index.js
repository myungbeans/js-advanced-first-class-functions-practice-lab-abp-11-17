// Code your solution in this file!
function logDriverNames (drivers){
  function logName (drivers){
    console.log(drivers.name)
  }
  return drivers.forEach(logName)
}


//logDriversByHometown()
//Receives an array of driver objects as the first argument
//and a location as the second argument.
//The function logs to the console the name attribute
//of each driver whose hometown matches the string passed in as the 'location' argument.

function logDriversByHometown (drivers, location){
  function callBack(element, index, array){
    if (location === element.hometown){
      console.log(element.name)
    }
  }
  return drivers.forEach(callBack)
}

function driversByRevenue (drivers){
  const numberSorter = function (num1, num2) {
    return num1 - num2;
  }
  return drivers.map(element.sort(numberSorter))
}
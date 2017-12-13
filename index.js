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
    return num1.revenue - num2.revenue
  }
  const sortedDrivers = drivers.slice()
  return sortedDrivers.sort(numberSorter)
}

function driversByName (drivers){
  const nameSorter = function (a,b){
    return a.name.localeCompare(b.name)
  }
  const sortedDrivers = drivers.slice()
  return sortedDrivers.sort(nameSorter)
}

function totalRevenue (drivers){
  const addToTotal = function(agg, el, i, arr){
    return agg + el.revenue
  }
  return drivers.reduce(addToTotal, 0)
}

function averageRevenue (drivers){
  const avgRev = function(agg, el, i, arr){
    return agg + el.revenue

    if (i === arr.length - 1){
      return agg/i + 1
    }
  }
  return drivers.reduce(avgRev, 0)
}

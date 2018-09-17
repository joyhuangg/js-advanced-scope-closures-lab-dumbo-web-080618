function produceDrivingRange(num){
  return function(start, end){
    first = parseInt(start);
    second = parseInt(end);
    range = second - first
    if (range > num){
      return `${range-num} blocks out of range`
    }
    else{
      return `within range by ${num-range}`
    }
  }
}

function produceTipCalculator(tipRate){
  return function(bill){
    return bill * tipRate;
  }
}


function createDriver(){
  let driverId = 0;
  return class {
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  }
}

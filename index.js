/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function createEmployeeRecord(arr){
  return{
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: [],
  }
}function createEmployeeRecords(arr){
  return arr.map(i=> createEmployeeRecord(i) )
}

function createEmployees(arr){
  return arr.map(i => createEmployeeRecord(i) )
}
function createTimeInEvent(date){
  let dates=date.split(" ");
  let event={};

  event["type"]="TimeIn";

  event["date"]=dates[0];
  event["hour"]=parseInt(dates[1]);
  this.timeInEvents.push(event);

  return this;
}


function createTimeOutEvent(date){
  let dates=date.split(" ");
  let event={};

  event["type"]="TimeOut";
  event["date"]=dates[0];
  event["hour"]=parseInt(dates[1]);
  this.timeOutEvents.push(event);

  return this;
}

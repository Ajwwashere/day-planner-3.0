//console.log("it works right?")//

//psuedo code//
/*## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
 
function myFunction() {
                    document.getElementById('demo').value = Date("yyyy-MM-dd");
                }


WHEN I scroll down
THEN I am presented with time blocks for standard business hours



WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future



WHEN I click into a time block
THEN I can enter an event



WHEN I click the save button for that time block
THEN the text for that event is saved in local storage



WHEN I refresh the page
THEN the saved events persist*/



function myFunction() {
    document.getElementById('demo').value = Date("yyyy-MM-dd");
}

myFunction()


var currentTime =  Date("yyyy-MM-dd");
var lastYear = 2020;
var currentYear = 2020;

if(lastYear > currentYear) {
console.log('futture')
} else if (currentYear > lastYear){
    console.log("past")
} else {
    console.log("same")
}


var names = ["jane", "joe", "bill", "eric"];

for (var i = 0; i < names.length; i++){

    
    console.log(names[i])
}
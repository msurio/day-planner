# third-party-api

This is homework assignment #5: Day Planner. In this assignment, we, the students of Fullstack Web Development, were tasked to create a day planner utilizing jQuery. While utilizing the JavaScript that we learned, we were able to create elements, give them attributes, ID's, classes, and append them to display in the HTML5 index file. 
 
 ## Getting Started

*Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

*You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

### Prerequisites

*GIVEN I am using a daily planner to create a schedule
*WHEN I open the planner
*THEN the current day is displayed at the top of the calendar
*WHEN I scroll down
*THEN I am presented with timeblocks for standard business hours
*WHEN I view the timeblocks for that day
*THEN each timeblock is color coded to indicate whether it is in the past, present, or future
*WHEN I click into a timeblock
*THEN I can enter an event
*WHEN I click the save button for that timeblock
*THEN the text for that event is saved in local storage
*WHEN I refresh the page
*THEN the saved events persist


### Break down
  ## Starting Point + Codes
The initial files given to use were the index.html and the style.css. These starting files already had some lines of codes to start off with so we purely had to start the javascript.js file from scratch. The very first that I am practicing and getting the habit of doing is the:
  
```JavaScript
$(document).ready(function () {
  //JavaScript...
  });
```

This allows the function to only work and load when DOM has been loaded. Once I got this started, my next step was to let the user know the date using the moment() event. This event docs can be found at: https://momentjs.com/. This honestly saved me a lot of time instead of making it from scratch. 

```JavaScript
//variables for date + time
    const currentDate = moment().format("dddd, MMMM Do YYYY");
    const currentTime = moment().format("h:mmA");

    //displays the current date for the planner
    $("#currentDay").text(currentDate);

```

The next segment is almost a copy and paste. My first task was to make the rows to nest the hours, inputs, and buttons. 
The second task was to make the hour divs, inputs, and buttons elements using jQuery.
After I made these elements, then I appended these to the row element that I created in the first task. The row element then will be appended into the container.

```JavaScript
   //building the divs for the hours
    const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,];
    const container = $('.container');

    hours.forEach(function (hour) {
        // Build the row
        const rowDiv = $('<div>');
        rowDiv.addClass('row');

        // build the hour div
        const hourDiv = $('<div>');

        hourDiv.attr('id', 'hour-' + hour);
        const currentHour = hour === 12 ? 12 : hour % 12;
        const amOrPm = (hour > 11) ? 'PM' : 'AM';

        hourDiv.text(currentHour + ' ' + amOrPm);
        hourDiv.addClass('time-block hour col-md-1');
        rowDiv.append(hourDiv);

        // build the input
        const inputEl = $('<input>');

        inputEl.attr('id', 'input-' + hour);
        inputEl.text('');
        inputEl.addClass('description col-md-10')
        rowDiv.append(inputEl);

        //build the save
        const saveButton = $('<button>');

        saveButton.attr('id', 'save-' + hour);
        saveButton.text('');
        saveButton.addClass('saveBtn col-md-1 fa fa-save')
        rowDiv.append(saveButton);

        //appending the rowDiv into the container
        container.append(rowDiv);
```



### And coding style tests

. 


## Deployment

https://msurio.github.io/day-planner/

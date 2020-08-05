$(document).ready(function () {

    //variables for date + time
    const currentDate = moment().format("dddd, MMMM Do YYYY");
    const currentTime = moment().format("h:mmA");

    //displays the current date for the planner
    $("#currentDay").text(currentDate);

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

        //clicking the save button will save user's input
        $(saveButton).on('click', function () {

            //store
            const userInput = inputEl.val();
            localStorage.setItem('userInput', userInput);

            console.log(userInput);

            //retrieve  
        })




    });

});

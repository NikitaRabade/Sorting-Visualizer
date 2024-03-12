//adding spped and Visualization for sorting bar 

//We only have to change background-color and height of the sorting element.

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

var ANIMATION_SPEED_MS = 1000;

a_speed.addEventListener("input", changeSpeed);

function changeSpeed() {
    var array_speed = a_speed.value;
    switch (parseInt(array_speed)) {
        case 1: ANIMATION_SPEED_MS = 1;
            break;
        case 2: ANIMATION_SPEED_MS = 10;
            break;
        case 3: ANIMATION_SPEED_MS = 100;
            break;
        case 4: ANIMATION_SPEED_MS = 1000;
            break;
        case 5: ANIMATION_SPEED_MS = 10000;
            break;
    }

    //delay_time=10000/(Math.floor(array_size/10)* ANIMATION_SPEED_MS);        //Decrease numerator to increase speed.

}

//var delay_time = 10000/(Math.floor(array_size/10)* ANIMATION_SPEED_MS);        //Decrease numerator to increase speed.
var delayStep = 0; //This is updated ov every div change so that visualization is visible.

function updateElement(array_container, newHeight, color) {
    window.setTimeout(function () {
        array_container.style = " width:" + (100 / array_size - (2 * marginSize)) + "%; height:" + newHeight + "px; background-color:" + color + ";";
    }, delayStep += ANIMATION_SPEED_MS);
}


//enable buttons after running algorithm
function enable_buttons() {
    window.setTimeout(function () {
        // Iterate over each element in the 'Algo_buttons' array
        for (var i = 0; i < Algo_buttons.length; i++) {

            // Remove all existing classes from the current element
            //Algo_buttons[i].classList = [];
            Algo_buttons[i].classList.remove("disabledButton");
            Algo_buttons[i].classList.add("enabledButton");

            // enable the current button
            Algo_buttons[i].disabled = false;
        }

        // enable the 'a_size' element
        a_size.disabled = false;

        //enable the 'array_speed' element
        a_speed.disabled = false;

        //enable the 'generateButton' element
        generateButton.disabled = false;

        // Check if sort_button is a child of sort_div before removing it
        if (sort_button.parentNode === sort_div) {
            sort_button.disabled = false;
            sort_button.classList.remove('disabled-button');
            sort_div.removeChild(sort_button);
        }

    }, delayStep += ANIMATION_SPEED_MS);
}
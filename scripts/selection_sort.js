//selection sort ALgorithm


function Selection_Sort() {

    delayStep = 0;

    SelectionSort(array_size);

    //console.log("After sort : " + divHeights);
    /*
    for (let x = 0; x < divHeights.length; x++) {
        updateElement(divElements[x], divHeights[x], "#7b2cbf"); //purple
    }
    */

    enable_buttons();
}

function SelectionSort(end) {

    for (var i = 0; i < end - 1; i++) {

        //current element orange
        updateElement(divElements[i], divHeights[i], "#fb8500");

        var miniIdx = i;

        for (var j = i + 1; j < end; j++) {
            

            //green for traversing
            updateElement(divElements[j], divHeights[j], "#04ea60");

            if (divHeights[j] < divHeights[miniIdx]) {

                if (miniIdx != i) {
                    updateElement(divElements[miniIdx], divHeights[miniIdx], "#0077b6");//Original Color update
                }

                miniIdx = j;

                updateElement(divElements[miniIdx], divHeights[miniIdx], "#d90429");//Red Color for minimum 
            }
            else{
                updateElement(divElements[j], divHeights[j], "#0077b6");//Original Color update
            }
        }

        //swap Minimum element
        if (miniIdx != i) {
            //updateElement(divElements[miniIdx], divHeights[miniIdx], "#d90429");//Red Color for swaping 
            //updateElement(divElements[i], divHeights[i], "#d90429");//Red Color for swaping 

            let = temp = divHeights[miniIdx];
            divHeights[miniIdx] = divHeights[i];
            divHeights[i] = temp;

            updateElement(divElements[miniIdx], divHeights[miniIdx], "#d90429");//Red Color for swaping 
            updateElement(divElements[i], divHeights[i], "#d90429");//Red Color for swaping 

            updateElement(divElements[miniIdx], divHeights[miniIdx], "#0077b6");//Original Color update
            updateElement(divElements[i], divHeights[i], "#0077b6");//Original Color update
        }

        updateElement(divElements[i], divHeights[i], "#04ea60"); // Green color for traversing
        updateElement(divElements[i], divHeights[i], "#7b2cbf"); // purple color for traversing

    }

    updateElement(divElements[i], divHeights[i], "#04ea60"); // Green color for traversing
    updateElement(divElements[i], divHeights[i], "#7b2cbf"); // purple color for traversing
}

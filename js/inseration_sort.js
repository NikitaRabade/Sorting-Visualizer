//inseration sort algorithm 



function Insertion_Sort() {
    delayStep = 0;

    InsertionSort(array_size);

    //console.log("After sort : " + divHeights);
    /*
    for (let x = 0; x < divHeights.length; x++) {
        updateElement(divElements[x], divHeights[x], "#7b2cbf"); //purple
    }
    */

    enable_buttons();

}

function InsertionSort(end) {

    for (var i = 0; i <= end - 1; i++) {

        //to represent current element
        updateElement(divElements[i], divHeights[i], "#fb8500");

        var j = i;

        updateElement(divElements[j], divHeights[j], "#04ea60");
        updateElement(divElements[j - 1], divHeights[j - 1], "#04ea60");

        while (j > 0 && divHeights[j - 1] > divHeights[j]) {

            updateElement(divElements[j], divHeights[j], "#04ea60");
            updateElement(divElements[j - 1], divHeights[j - 1], "#04ea60");

            //color update
            updateElement(divElements[j], divHeights[j], "#d90429");
            updateElement(divElements[j - 1], divHeights[j - 1], "#d90429");

            let temp = divHeights[j - 1];
            divHeights[j - 1] = divHeights[j];
            divHeights[j] = temp;

            //height update 
            updateElement(divElements[j], divHeights[j], "#d90429");
            updateElement(divElements[j - 1], divHeights[j - 1], "#d90429");

            updateElement(divElements[j], divHeights[j], "#0077b6"); //back to normal
            updateElement(divElements[j - 1], divHeights[j - 1], "#0077b6"); //back to normal

            if (j == i) {
                updateElement(divElements[j], divHeights[j], "#fb8500");//Color update
            }
            else {
                updateElement(divElements[j], divHeights[j], "#0077b6");//Color update
            }

            j--;
        }

        //to represent current element
        // updateElement(divElements[i], divHeights[i], "#fb8500");  

        for (let k = 0; k <= i; k++) {
            if (getComputedStyle(divElements[k]).backgroundColor !== "#7b2cbf"){
                updateElement(divElements[k], divHeights[k], "#7b2cbf");  // purple for sorted part
            }
        }
    }
  
}
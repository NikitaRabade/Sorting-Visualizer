//Quick Sort Algorithm

/*
divHeights = [740, 80, 1000, 5, 0, 50];
console.log("Before sort : " + divHeights);
Quick_Sort(divHeights);
*/

function Quick_Sort() {

    delayStep= 0;
    
    QuickSort(0, array_size - 1);
    //console.log("After sort : " + divHeights);
    for (let x = 0; x < divHeights.length; x++) {
        updateElement(divElements[x], divHeights[x], "#7b2cbf"); //purple
    }


    enable_buttons();
}

function QuickSort(startIdx, endIdx) {
    if (startIdx < endIdx) {
        //stores the position of pivot element
        var pIndex = Quick_Partition(startIdx, endIdx);
        //updateElement(divElements[pIndex], divHeights[pIndex], "pink"); // yellow color for pivot element
        QuickSort(startIdx, pIndex - 1); //sorts the left side of pivot.
        QuickSort(pIndex + 1, endIdx); //sorts the left side of pivot.
    }
}

function Quick_Partition(startIdx, endIdx) {
    var pivot = divHeights[startIdx]; //make the first element as pivot element.
    var i = startIdx, j = endIdx;

    updateElement(divElements[startIdx], divHeights[startIdx], "yellow"); // yellow color for pivot element


    //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
    while (i < j) {
        updateElement(divElements[i], divHeights[i], "#04ea60"); // Green color for traversing
        updateElement(divElements[j], divHeights[j], "#04ea60"); // Green color for traversing


        while (divHeights[i] <= pivot && i <= endIdx - 1) {
            i++;
            updateElement(divElements[i - 1], divHeights[i - 1], "#0077b6");
            updateElement(divElements[i], divHeights[i], "#04ea60"); // Green for traversing
            updateElement(divElements[startIdx], divHeights[startIdx], "yellow"); // yellow color for pivot element
        }


        while (divHeights[j] > pivot && j >= startIdx + 1) {
            j--;
            updateElement(divElements[j + 1], divHeights[j + 1], "#0077b6");
            updateElement(divElements[j], divHeights[j], "#04ea60"); // Green for traversing
        }

        if (i < j) {
            updateElement(divElements[i], divHeights[i], "#d90429"); // red color for swap position
            updateElement(divElements[j], divHeights[j], "#d90429"); // red color for swap position
            let temp = divHeights[i];
            divHeights[i] = divHeights[j];
            divHeights[j] = temp;
            updateElement(divElements[i], divHeights[i], "#d90429"); // red color for swap position
            updateElement(divElements[j], divHeights[j], "#d90429"); // red color for swap position

            updateElement(divElements[i], divHeights[i], "#04ea60"); // Green color for traversing
            updateElement(divElements[j], divHeights[j], "#04ea60"); // Green color for traversing

            //Back to original color
            updateElement(divElements[i], divHeights[i], "#0077b6");
            updateElement(divElements[j], divHeights[j], "#0077b6");
        }
    }

    //put the pivot element in its proper place. for swapping start and pivot
    updateElement(divElements[startIdx], divHeights[startIdx], "#d90429"); // red color for correct position
    updateElement(divElements[j], divHeights[j], "#d90429"); // red color for correct position

    //put the pivot element in its proper place.
    let temp = divHeights[startIdx];
    divHeights[startIdx] = divHeights[j];
    divHeights[j] = temp;

    //after swap
    updateElement(divElements[startIdx], divHeights[startIdx], "#d90429"); // red color for correct position
    updateElement(divElements[j], divHeights[j], "#d90429"); // red color for correct position

    //Back to original color
    updateElement(divElements[i], divHeights[i], "#0077b6");
    updateElement(divElements[j], divHeights[j], "#0077b6");

    updateElement(divElements[j], divHeights[j], "#7b2cbf"); // Reset color for pivot element
    //updateElement(divElements[startIdx], divHeights[startIdx], "#d90429"); // red color for correct position
    return j;
}
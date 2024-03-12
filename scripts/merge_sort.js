//Merge sort Algorithm


function Merge_Sort() {

    delayStep = 0;
    Merge_partition(0, array_size - 1);
    //console.log("After sort : " + divHeights);
    for (let x = 0; x < divHeights.length; x++) {
        updateElement(divElements[x], divHeights[x], "#7b2cbf"); //purple
    }
   
    enable_buttons();
}

function Merge_partition(startIdx, endIdx) {

    if (startIdx >= endIdx) return;
    var midIdx = Math.floor(startIdx + (endIdx - startIdx) / 2);

    updateElement(divElements[midIdx], divHeights[midIdx], "#fb8500");  //orange color for partition mid

    Merge_partition(startIdx, midIdx);
    Merge_partition(midIdx + 1, endIdx);
    doMerge(startIdx, midIdx, endIdx);

}

function doMerge(startIdx, midIdx, endIdx) {
    var sortedArray = [];
    var i = startIdx, k = 0, j = midIdx + 1;

    while (i <= midIdx && j <= endIdx) {

        //change color to represent that we are considering this two values current
        //updateElement(divElements[i], divHeights[i], "#d90429"); // red
        //updateElement(divElements[j], divHeights[j], "#d90429");

        if (divHeights[i] <= divHeights[j]) {
            // We overwrite the value at index k in the original array with the
            // value at index i in the sortedarray array.        
            sortedArray[k++] = divHeights[i++];
            updateElement(divElements[i-1], divHeights[i-1], "#d90429");

            //change color to red represent swapping with newvalues
        } else {
            // We overwrite the value at index k in the original array with the
            // value at index j in the sortedarray array.
            sortedArray[k++] = divHeights[j++];
            updateElement(divElements[j-1], divHeights[j-1], "#d90429");
        }
    }

    while (i <= midIdx) {
    
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        sortedArray[k++] = divHeights[i++];
        updateElement(divElements[j-1], divHeights[j-1], "#d90429");
    }

    while (j <= endIdx) {

        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.

        sortedArray[k++] = divHeights[j++];
        updateElement(divElements[j-1], divHeights[j-1], "#d90429");
    }

    // Copy the sorted values back to the original array
    for (var x = 0; x < sortedArray.length; x++) {
        divHeights[startIdx + x] = sortedArray[x];
        updateElement(divElements[j-1], divHeights[j-1], "#04ea60");  // green
        
    }
}

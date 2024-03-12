//Bubble sort algorithm 
/*
divHeights = [369, 281, 117, 76, 253, 412, 288, 182, 122, 472, 311, 0, 45, 180, 271, 102, 98, 388, 46, 264, 66, 111, 384, 228, 308, 59, 276, 128, 323, 261, 434, 382, 337, 87, 176, 17, 5, 362, 336, 141, 151, 376, 130, 388, 75, 182, 228, 399, 21, 162, 437, 377, 440, 453, 229, 390, 82, 142, 161, 148];
Bubble_Sort(divHeights);
*/

function Bubble_Sort(){
    BubbleSort(array_size);
    
    //console.log("After sort : " + divHeights);
    
    for (let x = 0; x < divHeights.length; x++) {
        updateElement(divElements[x], divHeights[x], "#7b2cbf"); //purple
    }
   
    enable_buttons();
    
}

function BubbleSort(end){

    delayStep = 0;

    for(var i = end - 1; i >= 0; i--){
        var didswap = 0;

        updateElement(divElements[i], divHeights[i], "#fb8500"); // for selecting last position

        for(var j = 0; j <= i - 1; j++){
            updateElement(divElements[j], divHeights[j], "#04ea60");  // green for traversing
            updateElement(divElements[j + 1], divHeights[j + 1], "#04ea60");  // green for traversing

            if(divHeights[j] > divHeights[j+1]){

                updateElement(divElements[j]+1, divHeights[j+1], "#04ea60");  // green for traversing

                updateElement(divElements[j], divHeights[j], "#d90429");
                updateElement(divElements[j+1], divHeights[j+1], "#d90429");

                let temp = divHeights[j];
                divHeights[j] = divHeights[j+1];
                divHeights[j+1] = temp;
                didswap = 1;

                updateElement(divElements[j], divHeights[j], "#d90429");
                updateElement(divElements[j+1], divHeights[j+1], "#d90429");
                
            }

            updateElement(divElements[j], divHeights[j], "#0077b6"); //back to normal
            updateElement(divElements[j + 1], divHeights[j + 1], "#0077b6"); //back to normal
        }

        if(didswap == 0){
            break;
        }

        updateElement(divElements[i], divHeights[i], "#7b2cbf"); //purple for correct position
    }
}





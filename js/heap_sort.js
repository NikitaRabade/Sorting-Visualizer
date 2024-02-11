//Heap Algorithm

//divHeights = [485, 0, 80, 90, 15, 5];

//heap_sort(divHeights, divHeights.length);

function heap_sort() {

    delayStep = 0;

    HeapSort();

    //console.log("After sort : " + divHeights);
    for (let x = 0; x < divHeights.length; x++) {
        updateElement(divElements[x], divHeights[x], "#7b2cbf"); //purple
    }

    enable_buttons();

}

function HeapSort() {
    // var N = divHeights.length;
    // Build Max Heap
    var N = array_size;
    for (var i = Math.floor(N / 2) - 1; i >= 0; i--) {
        heapify( N, i);
    }
    // One by one extract an element from heap
    for (var i = N - 1; i > 0; i--) {
        updateElement(divElements[i], divHeights[i], "#fb8500"); //orange for considering
        updateElement(divElements[0], divHeights[0], "#fb8500"); 
        // Move current root to end
        swap(0, i);
        updateElement(divElements[i], divHeights[i], "#7b2cbf"); //purple for correct position
        updateElement(divElements[i], divHeights[i], "#fb8500"); 

        heapify(i, 0);
        updateElement(divElements[i], divHeights[i], "#0077b6"); // blue
        updateElement(divElements[i], divHeights[i], "#7b2cbf");
    }
    updateElement(divElements[i], divHeights[i], "#7b2cbf");
    // console.log("After sort : " + divHeights);
}

function swap(i, j) {

    updateElement(divElements[i], divHeights[i], "#d90429"); // red color for swap position
    updateElement(divElements[j], divHeights[j], "#d90429"); // red color for swap position

    var temp = divHeights[i];
    divHeights[i] = divHeights[j];
    divHeights[j] = temp;

    updateElement(divElements[i], divHeights[i], "#d90429"); // red color for swap position
    updateElement(divElements[j], divHeights[j], "#d90429"); // red color for swap position

    //back to original color
    updateElement(divElements[i], divHeights[i], "#0077b6");
    updateElement(divElements[j], divHeights[j], "#0077b6");
}

function heapify(N, i) {
    var largest = i;
    var leftChildIdx = 2 * i + 1;
    var rightChildIdx = 2 * i + 2;

    updateElement(divElements[largest], divHeights[largest], "#04ea60"); // Green color for traversing
    updateElement(divElements[leftChildIdx], divHeights[leftChildIdx], "#04ea60"); // Green color for traversing
    updateElement(divElements[rightChildIdx], divHeights[rightChildIdx], "#04ea60"); // Green color for traversing

    // If left child is larger than root
    if (leftChildIdx < N && divHeights[leftChildIdx] > divHeights[largest]) {
        largest = leftChildIdx;
    }

    // If right child is larger than root
    if (rightChildIdx < N && divHeights[rightChildIdx] > divHeights[largest]) {
        largest = rightChildIdx;
    }



    // If largest is not root
    if (largest != i) {
        swap(largest, i);
        // Recursively heapify the affected sub-tree
        updateElement(divElements[largest], divHeights[largest], "#0077b6");
        updateElement(divElements[leftChildIdx], divHeights[leftChildIdx], "#0077b6");
        updateElement(divElements[rightChildIdx], divHeights[rightChildIdx], "#0077b6");

        heapify(N, largest);
    }

    //back to normal
    updateElement(divElements[largest], divHeights[largest], "#0077b6");
    updateElement(divElements[leftChildIdx], divHeights[leftChildIdx], "#0077b6");
    updateElement(divElements[rightChildIdx], divHeights[rightChildIdx], "#0077b6");
}

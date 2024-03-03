
//TODO:   Check Sorted Array


function isSorted(n, a) {
    for (let i = 1; i < n; i++) {
        if (a[i] < a[i - 1]) {
            return false;  // Not Sorted 
        }
    }
    return true; // Sorted
}

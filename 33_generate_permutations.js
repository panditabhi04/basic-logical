
// Function to generate all permutations
let str="ABC"

    // Convert string into array
    // Because swapping is easier in array
    let arr = str.split("");

    // Store final answers
    let arr1 = [];

    // Recursive function
    // index = current position to fix
    function generatePermutations(i) {

        // BASE CASE
        // If index reaches array length
        // it means one permutation is ready
        if (i === arr.length) {

            // Convert array into string
            // and store into result
            arr1.push(arr.join(""));

            return;
        }

        // Loop through remaining characters
        for (let j = i; j < arr.length; j++) {

            // -----------------------------
            // STEP 1 : SWAP
            // -----------------------------
            // Put current character at fixed position

            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            // Example:
            // A B C
            // swap(0,1)
            // B A C

            // -----------------------------
            // STEP 2 : RECURSION
            // -----------------------------
            // Fix next position
            generatePermutations(i + 1);

            // -----------------------------
            // STEP 3 : BACKTRACK
            // -----------------------------
            // Restore original array
            // so next iteration works correctly

            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            // Example:
            // B A C
            // swap again
            // A B C
        }
    }
generatePermutations(0)
console.log(arr1);


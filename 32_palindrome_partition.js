function partition(str) {
    const result = [];
    const path = [];

    function isPalindrome(s, left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    function backtrack(start) {

        // Base Case
        if (start === str.length) {
            result.push([...path]);
            return;
        }

        // Try all partitions
        for (let end = start; end < str.length; end++) {

            // Check palindrome
            if (isPalindrome(str, start, end)) {

                // Add current palindrome
                path.push(str.substring(start, end + 1));

                // Recurse for remaining string
                backtrack(end + 1);

                // Backtrack
                path.pop();
            }
        }
    }

    backtrack(0);

    return result;
}

// Example
console.log(partition("aab"));
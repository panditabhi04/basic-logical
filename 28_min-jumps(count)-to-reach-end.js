let nums = [2, 3, 1, 1, 4];

let jumps = 0;
let currentEnd = 0;
let maxReach = 0; // instead of farthest

for (let i = 0; i < nums.length - 1; i++) {
    maxReach = Math.max(maxReach, i + nums[i]);

    if (i === currentEnd) {
        jumps++;
        currentEnd = maxReach;
    }
}

console.log("Minimum jumps:", jumps);
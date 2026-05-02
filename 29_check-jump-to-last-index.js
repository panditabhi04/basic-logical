let nums = [2, 3, 1, 1, 4];

let maxReach = 0;
let canReach = true;

for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
        canReach = false;
        break;
    }
// Update the farthest index we can reach
// example if Math.max(0,2) // 2
    maxReach = Math.max(maxReach, i + nums[i]);
}

console.log(canReach);
console.log("maxReach : ",maxReach);


let nums = [2, 3, 1, 1, 4];

let maxReach = 0;
let canReach = true;

for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
        canReach = false;
        break;
    }
// Update the farthest index we can reach
// example if Math.max(0,2) // 2
    maxReach = Math.max(maxReach, i + nums[i]);
}

console.log("maxReach : ",maxReach);
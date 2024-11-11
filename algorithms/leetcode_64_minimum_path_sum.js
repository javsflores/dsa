// Link to Leetcode Problem: https://leetcode.com/problems/minimum-path-sum/description/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid, downIndex = 0, rightIndex = 0) {
    // Brute force approach
    // Time Complexity O(n!)?
    // Space Complexity O(n)
    // let totalSum = grid[downIndex][rightIndex];
    //
    // let canGoRight = rightIndex < grid[downIndex].length - 1;
    // let canGoDown = downIndex < grid.length - 1;
    // if (!canGoRight && !canGoDown) {
    //     return totalSum;
    // }
    //
    // let rightSum = Infinity;
    // let downSum = Infinity;
    // if (canGoRight) {
    //     rightSum = Math.min(rightSum, minPathSum(grid, downIndex, rightIndex + 1));
    // }
    //
    // if (canGoDown) {
    //     downSum = Math.min(downSum, minPathSum(grid, downIndex + 1, rightIndex));
    //
    // }
    // return totalSum + Math.min(rightSum, downSum);

    // Time Complexity O(N)
    // Space Complexity O(1)
    let lastDownIndex = grid.length - 1;
    let lastRightIndex = grid[lastDownIndex].length - 1;

    for (let down = 0; down < grid.length; down++) {
        for(let right = 0; right < grid[down].length; right++) {
            if (down === 0 && right === 0) {
                grid[down][right] = grid[down][right];
            } else if (down === 0) {
                grid[down][right] = grid[down][right] + grid[down][right - 1];
            } else if (right === 0) {
                grid[down][right] = grid[down][right] + grid[down - 1][right];
            } else {
                let currentValue = grid[down][right];
                let aboveValue = grid[down - 1][right];
                let leftValue = grid[down][right - 1];
                grid[down][right] = Math.min(currentValue+aboveValue, currentValue+leftValue);
            }
        }
    }

    return grid[lastDownIndex][lastRightIndex];
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]])); // 7
console.log(minPathSum([[1,2,3],[4,5,6]])); // 12
console.log(minPathSum([[1,2],[1,1]])); // 3
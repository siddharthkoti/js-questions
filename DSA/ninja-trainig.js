/*
Problem statement:

Ninja is planing this ‘N’ days-long training schedule. 
Each day, he can perform any one of these three activities(Running, Fighting Practice or Learning New Moves). 
Each activity has some merit points on each day. As Ninja has to improve all his skills, 
he can’t do the same activity in two consecutive days. 
Can you help Ninja find out the maximum merit points Ninja can earn?

You are given a 2D array of size N*3 ‘POINTS’ 
with the points corresponding to each day and activity. 
Your task is to calculate the maximum number of merit points that Ninja can earn.

https://www.naukri.com/code360/problems/ninja-s-training_3621003?leftPanelTabValue=PROBLEM
*/

function ninjaTraining(n, points) {
    let dp = Array(n+1).fill(-1);

    for (let i = 0; i < (n+1); i++) {
        dp[i] = Array(4).fill(-1);
    }


    const solve = (idx, prevIndex) => {
        if (idx === n) {
            return 0;
        }
        
        if(dp[idx][prevIndex] !== -1) {
            return dp[idx][prevIndex];
        }
        

        let arr = points[idx];

        let max = 0;
        for (let i = 0; i < 3; i++) {
            if (i !== prevIndex) {
                max = Math.max(max, arr[i] + solve(idx + 1, i))                 
            }
        }
        return dp[idx][prevIndex] = max; 
    };

    return solve(0, 3);
}



let grid = [[10, 40, 70],
[20, 50, 80],
[30 ,60, 90]] 

// let grid = [
//     [1, 2, 5], 
// [3, 1, 1],
// [3, 3, 3]]
console.log(ninjaTraining(3, grid))








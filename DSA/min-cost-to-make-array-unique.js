/*
 you are given an array size and array cost.
 you need to make the size array unique.

 to cost to increment size[i] by 1 is cost[i].
 
 find the minimun total cost to make the array unique
 
 ex: size: [2,3,3,2]
     cost: [2,4,5,1]

    total min cost to make size as unique: [2,4,3,5] is 7

    s1: [2,4,3,2]
    c: [2,4,5,1] ; cost = 4

    s2: [2,4,3,5] (increment 2, 3 times(2+1+1+1) to make it 5 -nearest unique element; cost = 1(cost)*3(times) = 3)
    c: [2,4,5,1]; cost = 4 + 3 = 7

*/

function createPair(size, cost) {
    return size.map((s, i) => {
        return [s, cost[i]];
    })
}

function sortPair(pairArr) {
    return pairArr.sort((a,b) => {
    if(a[0]===b[0]) {
        return a[1] - b[1]; 
    } else {
        return a[0] - b[0]
    }
})
}

function minCostForSize(size, cost) {

    let a = createPair(size, cost);
    
    console.log(a)
    
    a = sortPair(a);
    
    const n = a.length;
    let totalCost = 0
    
    for(let i = 0; i< n-1;) {
        let j = i + 1;
        let minCostIndex = i;
        while((j < n) && a[i][0] === a[j][0]) {
            // if(a[j][1] < a[minCostIndex][1]) {
            //     minCostIndex = j;
            // }
            j++;
        }
        
        if(j !== i+1) {
            totalCost += a[minCostIndex][1];    
            a[minCostIndex][0] = a[minCostIndex][0] + 1;
        } else {
            i++;
        }
        
        a = sortPair(a);
    }

    return totalCost;

    // complexity: O(n^2logn)
}

console.log(minCostForSize([2,3,3,2], [2,4,5,1]));
console.log(minCostForSize([3,3,4,5], [5,2,2,1]));
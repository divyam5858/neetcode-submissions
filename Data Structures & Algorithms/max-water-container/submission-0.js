class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let water = []

        let i = 0
        let j = heights.length-1

        while(i<j){
            let curr = Math.min(heights[i],heights[j])*(j-i)
            water.push(curr)
            if(heights[i]>heights[j]){
                j=j-1
            }
            else{
                i=i+1
            }
        }
        return Math.max(...water)
    }
}

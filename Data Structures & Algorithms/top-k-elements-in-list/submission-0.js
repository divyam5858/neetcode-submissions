class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       
        let h= new Map()

        for(let value of nums){
            if(h.has(value)){
                h.set(value,h.get(value)+1)
            }
            else{
                h.set(value,1)
            }
        }

        return [...h.entries()]
            .sort((a, b) => b[1] - a[1])   // Sort by frequency (descending)
            .slice(0, k)                   // Take first k entries
            .map(entry => entry[0]);       // Extract the numbers
    }
}

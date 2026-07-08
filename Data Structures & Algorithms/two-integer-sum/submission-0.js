class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let h= new Map()
        for(let i=0;i<nums.length;i++){
            let need=target-nums[i]

            if(h.has(need)){
                return [h.get(need),i]
            }
            h.set(nums[i],i)
        }
}
}
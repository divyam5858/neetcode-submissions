class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let h= new Map()

        for(let value of nums){
            if(h.has(value)){
                return true
            }
            else{
                h.set(value)
            }
        }
        return false
    }
}

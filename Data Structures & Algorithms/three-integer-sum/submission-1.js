class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=>a-b)
        let h = new Set()

        for(let i=0; i<nums.length; i++){
            let j = i+1
            let k = nums.length-1
            while(j<k){
                if(nums[i]+nums[j]+nums[k]===0){
                    let temp = []
                    temp.push(nums[i])
                    temp.push(nums[j])
                    temp.push(nums[k])
                    h.add(temp.join(','))
                    j++
                    k--
                }
                else if(nums[i]+nums[j]+nums[k]>0){
                    k--
                }
                else{
                    j++
                }
            }
            
        }
        
        return [...h].map(str=>str.split(',').map(Number))
    }
}

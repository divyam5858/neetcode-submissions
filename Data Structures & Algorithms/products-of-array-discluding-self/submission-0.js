class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let ans=[]
        for(let i=0 ;i<nums.length;i++){
            let x=1
            for(let j=0;j<nums.length;j++){
                if(i===j){
                    continue
                }
                else{
                    x*=nums[j]
                }
            }
            ans.push(x)
        }
        return ans
    }
}

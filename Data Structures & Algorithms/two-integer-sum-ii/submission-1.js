class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let h=new Map()
        let i=1
        let res = []
        
        for(let value of numbers){
            if(h.has(target-value)){
                res[0]=h.get(target-value)
                res[1]=i
            }
           
                h.set(value,i)
                i++
            

        }
        return res
    }
}

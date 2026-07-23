class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let h = new Set()
        let  j = 0
        let len = 0

        for(let i=0;i<s.length;i++){
            while(h.has(s[i])){
                h.delete(s[j])
                j++
            }
            h.add(s[i])
            len = Math.max(len, i-j+1)
        }

      return len
    }
}

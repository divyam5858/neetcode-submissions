class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let s1=s.split('')
        let t1=t.split('')
        let h = new Map()
        for (let value of s1){
            if(h.has(value)){
                h.set(value,h.get(value)+1)
            }
            else{
                h.set(value,1)
            }
        }

        let h1 = new Map()
        for (let value of t1){
            if(h1.has(value)){
                h1.set(value,h1.get(value)+1)
            }
            else{
                h1.set(value,1)
            }
        }

        if(h.size!=h1.size){
            return false
        }

        for(let key of h.keys()){
            if(!h1.has(key)){
                return false
            }
            else if(h.get(key)!=h1.get(key)){
                return false
            }
        }

    return true
        
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack=[]

        for(let value of s){
            if(value==='('||value==='['||value==='{'){
                stack.push(value)
            }
            else if(stack.length && value===']' && stack[stack.length-1]==='['){
                stack.pop()
            }
            else if(stack.length && value==='}' && stack[stack.length-1]==='{'){
                stack.pop()
            }
            else if(stack.length && value===')' && stack[stack.length-1]==='('){
                stack.pop()
            }
            else{
                return false
            }
    }
    if(stack.length!=0){
        return false
    }
    return true
}
}
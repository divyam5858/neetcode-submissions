/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        let a =[]

        while(list1!=null){
            a.push(list1.val)
            list1=list1.next
        }
        while(list2!=null){
            a.push(list2.val)
            list2=list2.next
        }

        a.sort((a,b)=>a-b)

        let d = new ListNode(0)
        let c = d

        for(let value of a){
            c.next = new ListNode(value)
            c=c.next
        }

        return d.next
        
    }
}

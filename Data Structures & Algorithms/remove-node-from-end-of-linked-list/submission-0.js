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
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let a = []
        while(head!=null){
            a.push(head.val)
            head=head.next
        }
        let x = a.length-n

        a.splice(x,1)
       

        let dm = new ListNode(0)
        let current = dm

        for(let value of a){
            current.next = new ListNode(value)
            current = current.next
        }

        return dm.next

    }
}

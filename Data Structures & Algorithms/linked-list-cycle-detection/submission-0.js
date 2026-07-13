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
     * @return {boolean}
     */
    hasCycle(head) {
       
        let h = new Set();

        while (head != null) {
            if (h.has(head)) {
                return true;
            }

            h.add(head);
            head = head.next;
        }

        return false;
    
    }
}

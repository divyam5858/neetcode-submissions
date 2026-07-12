class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let count = 0;

        for (let num of set) {

            if (!set.has(num - 1)) {

                let current = num;
                let length = 1;

                while (set.has(current + 1)) {
                    current++;
                    length++;
                }

                count = Math.max(count, length);
            }
        }

        return count;
    }
}

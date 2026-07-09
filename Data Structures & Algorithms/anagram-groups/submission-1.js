class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    let h = new Map();

    for (let word of strs) {

        let key = word.split('').sort().join('');

        if (!h.has(key)) {
            h.set(key, []);
        }

        h.get(key).push(word);
    }

    return [...h.values()];
    }
}

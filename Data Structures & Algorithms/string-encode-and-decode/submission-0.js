class Solution {

    /**
     * @param {string[]} strs
     * @return {string}
     */
    encode(strs) {
        let res = "";

        for (let str of strs) {
            res += str.length + "#" + str;
        }

        return res;
    }

    /**
     * @param {string} str
     * @return {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;

        while (i < str.length) {

            // Find '#'
            let j = i;
            while (str[j] !== "#") {
                j++;
            }

            // Length of current string
            let len = Number(str.substring(i, j));

            // Extract the string
            let word = str.substring(j + 1, j + 1 + len);
            res.push(word);

            // Move to next encoded string
            i = j + 1 + len;
        }

        return res;
    }
}
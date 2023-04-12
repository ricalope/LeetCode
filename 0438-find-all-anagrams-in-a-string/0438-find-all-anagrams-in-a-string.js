/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if(p.length > s.length) return []
    const res = [], map = {}
    let count = 0, start = 0, end = 0
    
    for(let char of p) {
        if(map[char] === undefined) count++
        map[char] = (map[char] || 0) + 1
    }
    
    while(end < s.length) {
        let char = s[end]
        if(map[char] !== undefined) {
            map[char] -= 1
            if(map[char] === 0) count--
        }
        end++
        
        while(count === 0) {
            let temp = s[start]
            if(map[temp] !== undefined) {
                map[temp] += 1
                if(map[temp] > 0) count++
            }
            if(end - start === p.length) res.push(start)
            start++
        }
    }
    return res
};
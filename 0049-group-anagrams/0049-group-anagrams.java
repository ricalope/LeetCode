class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        if(strs == null || strs.length == 0) return new ArrayList<>();
        Map<String, List<String>> mapped = new HashMap<>();
        for(String s : strs) {
            char[] charArray = s.toCharArray();
            Arrays.sort(charArray);
            String keyString = String.valueOf(charArray);
            if(!mapped.containsKey(keyString)) mapped.put(keyString, new ArrayList<>());
            mapped.get(keyString).add(s);
        }
        return new ArrayList<>(mapped.values());
    }
}
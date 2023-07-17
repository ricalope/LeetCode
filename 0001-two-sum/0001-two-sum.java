class Solution {
    public int[] twoSum(int[] nums, int target) {
        
        int[] result = new int[2];
        Map<Integer, Integer> mapped = new HashMap<>();
        for(int i = 0; i < nums.length; i++) {
            int comp = target - nums[i];
            if(mapped.containsKey(comp)) {
                result[1] = i;
                result[0] = mapped.get(comp);
                return result;
            }
            mapped.put(nums[i], i);
        }
        return result;
    }
}
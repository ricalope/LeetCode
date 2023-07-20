class Solution {
    public void rotate(int[][] matrix) {
        int n = matrix.length, m = n / 2;
        for(int i = 0; i < m; i++) {
            int length = n - 2 * i - 1, o = n - 1 - i;
            for(int j = 0; j < length; j++) {
                int temp = matrix[i][i + j];
                matrix[i][i + j] = matrix[o - j][i];
                matrix[o - j][i] = matrix[o][o - j];
                matrix[o][o - j] = matrix[i + j][o];
                matrix[i + j][o] = temp;
            }
        }
    }
}
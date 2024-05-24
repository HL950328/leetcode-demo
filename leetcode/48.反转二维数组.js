var rotate = function(matrix) {
  const n = matrix.length
  for (let i = 0; i < n/2; i++) {
        for (j = 0; j< n; j++) {
          [matrix[i][j], matrix[n-1-i][j]] = [matrix[n-1-i][j], matrix[i][j]]
        }
    }
    for (i = 0; i < n; i++) {
        for(j = 0; j < i; j++) {
          [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
};
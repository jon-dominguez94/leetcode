function bc(n, k){
  const coeffs = new Array(n + 1);
  for(let i = 0; i <= n; i++){
    coeffs[i] = new Array(k + 1);
  }

  for(let i = 0; i <= n; i++){
    for(let j = 0; j <= Math.min(i,k); j++){
      if(i === j || j === 0){
        coeffs[i][j] = 1;
      } else {
        coeffs[i][j] = coeffs[i-1][j-1] + coeffs[i-1][j];
      }
    }
  }

  return coeffs[n][k];
}

console.log(bc(4,2));
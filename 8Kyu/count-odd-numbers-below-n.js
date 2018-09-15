// Given a number n, return the number of positive odd numbers below n, EASY!
// Étant donné un nombre n, retournez le nombre de nombres impairs positifs en dessous de n, FACILEMENT !

function oddCount(n){
  const arr = []
    for (let i = 0; i < n; i++) {
        if (i%2===1) {
            arr.push(i)
        }
    }
    console,log(arr)
    return arr.length

  }
  //Ma solution

console.log(oddCount(6))


// Solution code wars
  function oddCount1(n){
    return Math.floor(n/2);
  }
  console.log(oddCount1(6))


//   Division binaire
  function oddCount2(n) {
      return n>>1
  }
  console.log(oddCount2(6))





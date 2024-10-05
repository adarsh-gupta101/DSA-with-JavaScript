/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
 if(n==0) return 1

    // number xor number complement= all set

   let bitCount = 0
  let num = n
  
  while(num > 0){
    bitCount++
    num = num >> 1
  }
   
  let allBitsSet = Math.pow(2, bitCount) -1
  
  return n ^ allBitsSet

};

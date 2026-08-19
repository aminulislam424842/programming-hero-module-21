function total(...numbers:number[]):number {
  return numbers.reduce((sum,n)=>sum+n,0);
}
console.log(total(5,5,2,4,5))
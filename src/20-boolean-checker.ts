function getAdult(age:number):boolean{
  if (age>=18){
    return true;
  }
  return false
}

console.log(getAdult(12))
console.log(getAdult(45))
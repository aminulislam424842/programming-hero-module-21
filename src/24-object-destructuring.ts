type User = {
  name: string,
  age: number
  city:string
}

const user: User = {
  name: "aminul",
  age: 21,
  city:"Rajshahi"
}

const { name, age,city } = user;

console.log(name, age,city)
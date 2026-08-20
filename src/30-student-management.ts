type Student = {
  name: string,
  roll: number,
  age: number,
  city: string,
  phone?: string
  status: "active" | "inactive" | "graduated"
}

const student1: Student = {
  name: "Aminul",
  roll: 27,
  age: 21,
  city: "Rajshahi",
  phone: "01700000000",
  status: "active",
};

const student2: Student = {
  name: "Sadia",
  roll: 31,
  age: 20,
  city: "Dhaka",
  status: "active",
};


const students:Student[] =[student1,student2]

const statusInfo: [string, number, string] = [
  student2.name,
  student2.roll,
  student2.status
]


function studentInfo (students:Student):string {
  const {name,roll,status,city} = students
  return `${name} (${roll}) is an ${status} student from ${city}.`;
}

console.log(studentInfo(student1));
console.log(studentInfo(student2));

const updatedStudent:Student =  {...student1,status :"inactive"}

console.log(studentInfo(updatedStudent))

console.log(students);
console.log(statusInfo);

let phoneNumber: string | null = null;

phoneNumber = student1.phone??null
console.log(phoneNumber)
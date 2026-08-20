"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student1 = {
    name: "Aminul",
    roll: 27,
    age: 21,
    city: "Rajshahi",
    phone: "01700000000",
    status: "active",
};
const student2 = {
    name: "Sadia",
    roll: 31,
    age: 20,
    city: "Dhaka",
    status: "active",
};
const students = [student1, student2];
const statusInfo = [
    student2.name,
    student2.roll,
    student2.status
];
function studentInfo(students) {
    const { name, roll, status, city } = students;
    return `${name} (${roll}) is an ${status} student from ${city}.`;
}
console.log(studentInfo(student1));
console.log(studentInfo(student2));
const updatedStudent = { ...student1, status: "inactive" };
console.log(studentInfo(updatedStudent));
console.log(students);
console.log(statusInfo);
let phoneNumber = null;
phoneNumber = student1.phone ?? null;
console.log(phoneNumber);
//# sourceMappingURL=30-student-management.js.map
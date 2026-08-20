# 🚀 Programming Hero — Module 21 | TypeScript Fundamentals

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Programming Hero](https://img.shields.io/badge/Programming%20Hero-Module%2021-blue?style=for-the-badge)
![Problem Solving](https://img.shields.io/badge/Practice-TypeScript%20Basics-success?style=for-the-badge)
![Tasks](https://img.shields.io/badge/Tasks-30-orange?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge)

**TypeScript Types, Interfaces, Tuples, Destructuring & Static Typing Fundamentals**

</div>

---

## 📌 About This Repository

This repository contains my **Programming Hero — Module 21: TypeScript Fundamentals** practice tasks.

The main purpose of this module was to move from plain JavaScript into **TypeScript**, learning how static typing changes the way code is written, checked, and structured before it ever runs.

Throughout these 30 tasks, I practiced primitive types, arrays, objects, tuples, union/literal types, optional properties, functions, rest & spread, destructuring, nullable and unknown types — building a solid foundation for typed JavaScript.

This module is written and compiled using TypeScript (`.ts` files in `src/`, compiled output in `dist/`), configured through `tsconfig.json`.

---

# 🎯 Learning Objectives

Through this module, I focused on:

- Understanding why TypeScript is used over plain JavaScript
- Declaring variables with explicit primitive types
- Typing arrays, objects, and tuples
- Creating object types and literal types
- Working with optional properties (`?`)
- Typing function parameters and return values
- Using rest parameters and the spread operator with types
- Destructuring typed objects and arrays
- Handling nullable and unknown values safely
- Writing functions that never return (`never`)
- Compiling TypeScript into JavaScript (`src` → `dist`)

---

# 📚 Tasks Covered

| # | Task | Main Concept |
|---|------|--------------|
| 01 | Basic Type Annotation | Type Annotation |
| 02 | String Variables | Primitive Type — `string` |
| 03 | Number Variables | Primitive Type — `number` |
| 04 | Boolean Variables | Primitive Type — `boolean` |
| 05 | Primitive Types | Primitive Types Overview |
| 06 | Primitive Profile | Combining Primitive Types |
| 07 | Primitive Calculator | Typed Function Logic |
| 08 | Number Array | Array Typing |
| 09 | String Array | Array Typing |
| 10 | Student Object | Object Typing |
| 11 | Product Object | Object Typing |
| 12 | Student Tuple | Tuple Type |
| 13 | User Object Type | Custom Object Type |
| 14 | Optional Property | Optional Property (`?`) |
| 15 | Literal Type | Literal Type |
| 16 | Product Status | Union / Literal Type |
| 17 | Add Function | Function Typing |
| 18 | Greeting Function | Function Typing |
| 19 | Student Result | Function + Object Typing |
| 20 | Boolean Checker | Function Return Type |
| 21 | Rest Parameters | Rest Parameters |
| 22 | Spread Array | Spread Operator |
| 23 | Object Spread | Spread Operator (Objects) |
| 24 | Object Destructuring | Destructuring |
| 25 | Array Destructuring | Destructuring |
| 26 | Nullable Value | Nullable Types |
| 27 | Unknown Data | `unknown` Type |
| 28 | Unknown Type Check | Type Narrowing |
| 29 | Never Function | `never` Type |
| 30 | Student Management | Combined TypeScript Concepts |

---

# 🧩 Detailed Practice Areas

## 1. Type Annotations & Primitive Types

Practiced explicitly typing variables instead of relying on inference.

```typescript
let name: string = "Aminul";
let age: number = 21;
let isStudent: boolean = true;
```

---

## 2. Arrays, Objects & Tuples

Practiced typing structured data — lists, objects, and fixed-length tuples.

```typescript
let scores: number[] = [80, 90, 85];

let student: { name: string; roll: number } = {
  name: "Aminul",
  roll: 101,
};

let studentTuple: [string, number] = ["Aminul", 101];
```

---

## 3. Custom Types & Literal Types

Practiced creating reusable object types and restricting values to specific literals.

```typescript
type User = {
  name: string;
  email: string;
};

type Status = "pending" | "shipped" | "delivered";
```

---

## 4. Optional Properties

Practiced marking object properties as optional using `?`.

```typescript
type Profile = {
  name: string;
  bio?: string;
};
```

---

## 5. Function Typing

Practiced typing function parameters and return values for predictable, safer functions.

```typescript
const add = (a: number, b: number): number => a + b;
```

---

## 6. Rest Parameters & Spread Operator

Practiced collecting arguments with rest parameters and copying/merging typed data with spread.

```typescript
const sumAll = (...nums: number[]): number =>
  nums.reduce((total, n) => total + n, 0);

const merged = { ...userInfo, ...extraInfo };
```

---

## 7. Destructuring

Practiced extracting values from typed objects and arrays directly into variables.

```typescript
const { name, roll }: { name: string; roll: number } = student;
const [first, second]: number[] = scores;
```

---

## 8. Nullable, Unknown & Never Types

Practiced handling uncertain or impossible values safely.

```text
nullable  → value can be null / undefined
unknown   → type must be checked before use
never     → function never successfully returns
```

---

# 🧠 Problem-Solving Workflow

For each problem, I followed a structured approach:

```text
Understand the Data Shape
        ↓
Decide the Right Type (primitive, object, tuple, union)
        ↓
Write the Type Definition
        ↓
Apply the Type to Variables / Functions
        ↓
Compile with tsc and Check for Errors
        ↓
Fix Type Errors
        ↓
Test the Final Output
```

---

# 📂 Repository Structure

```text
programming-hero-module-21/
│
├── src/
│   ├── 01-basic-type-annotation.ts
│   ├── 02-string-variables.ts
│   ├── 03-number-variables.ts
│   ├── 04-boolean-variables.ts
│   ├── 05-primitive-types.ts
│   ├── 06-primitive-profile.ts
│   ├── 07-primitive-calculator.ts
│   ├── 08-number-array.ts
│   ├── 09-string-array.ts
│   ├── 10-student-object.ts
│   ├── 11-product-object.ts
│   ├── 12-student-tuple.ts
│   ├── 13-user-object-type.ts
│   ├── 14-optional-property.ts
│   ├── 15-literal-type.ts
│   ├── 16-product-status.ts
│   ├── 17-add-function.ts
│   ├── 18-greeting-function.ts
│   ├── 19-student-result.ts
│   ├── 20-boolean-checker.ts
│   ├── 21-rest-parameters.ts
│   ├── 22-spread-array.ts
│   ├── 23-object-spread.ts
│   ├── 24-object-destructuring.ts
│   ├── 25-array-destructuring.ts
│   ├── 26-nullable-value.ts
│   ├── 27-unknown-data.ts
│   ├── 28-unknown-type-check.ts
│   ├── 29-never-function.ts
│   └── 30-student-management.ts
│
├── dist/
│   └── (Compiled JavaScript output)
│
├── tsconfig.json
└── readme.md
```

---

# 🛠️ Technologies Used

- **TypeScript**
- **Node.js**
- **VS Code**
- **Git**
- **GitHub**

---

# ▶️ How to Run

### 1. Clone the repository

```bash
git clone https://github.com/aminulislam424842/programming-hero-module-21.git
```

### 2. Navigate to the repository

```bash
cd programming-hero-module-21
```

### 3. Install TypeScript (if not already installed)

```bash
npm install -g typescript
```

### 4. Compile TypeScript files

```bash
tsc
```

### 5. Run the compiled JavaScript

```bash
node dist/01-basic-type-annotation.js
```

---

# 📈 Learning Progress

```text
Programming Hero — Module 21
│
├── Type Annotations                  ✅
├── Primitive Types                   ✅
├── Arrays                            ✅
├── Objects                           ✅
├── Tuples                            ✅
├── Custom Object Types               ✅
├── Optional Properties               ✅
├── Literal Types                     ✅
├── Function Typing                   ✅
├── Rest Parameters                   ✅
├── Spread Operator                   ✅
├── Object Destructuring              ✅
├── Array Destructuring               ✅
├── Nullable Values                   ✅
├── Unknown Type                      ✅
├── Never Type                        ✅
└── Problem Solving                   ✅
```

---

# 💡 Key Learnings

This module significantly improved my understanding of how TypeScript makes JavaScript more predictable and safer.

### I learned how to:

- Think about data shape before writing logic
- Type primitives, arrays, objects, and tuples correctly
- Create reusable custom types and literal types
- Mark properties optional without breaking type safety
- Write functions with clear, typed contracts
- Use rest parameters and spread with proper typing
- Destructure typed objects and arrays cleanly
- Handle `null`, `unknown`, and `never` safely
- Catch errors at compile time instead of runtime
- Structure a TypeScript project with `src` and `dist`

---

# 🧪 Testing Approach

I practiced testing solutions with different types of inputs:

```text
Normal Input
     ↓
Expected Type
     ↓
Optional / Missing Property
     ↓
Invalid Type (checked by compiler)
     ↓
Edge Case
     ↓
Final Solution
```

Compiling with `tsc` after every task helped catch type errors before ever running the code.

---

# 🚀 What's Next?

After completing this module, I will continue deepening my TypeScript knowledge.

### Next Learning Goals

- Interfaces vs Type Aliases
- Generics
- Utility Types
- Enums
- Advanced Function Types
- TypeScript with React
- Real-World TypeScript Projects

---

# 📌 Repository Goal

The goal of this repository is to build a strong foundation in TypeScript's type system — the same skill set used in modern, production-grade JavaScript/TypeScript codebases.

Each task represents a step toward writing safer, more predictable, and more maintainable code.

---

## 👨‍💻 Author

### Md. Aminul Islam Mahi

**Future Full Stack Developer**

---

<div align="center">

### ⭐ Thanks for visiting this repository!

**Built with ❤️ while learning with Programming Hero**

</div>
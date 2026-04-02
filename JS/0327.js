// const students = [
//     { name: "Kim", age: 21 },
//     { name: "Lee", age: 18 },
//     { name: "Park", age: 23 }
//   ];

// const result = [...students].filter(students => students.age >= 20);
// console.log(result);

// const numbers = [5, 12, 18, 3, 7];

// const result = [...numbers].filter(numbers => numbers >= 10);
// console.log(result);

// 3. 전체 가격 합 구하기 (reduce)

const products = [
    { name: "pen", price: 1000, category: "stationery" },
    { name: "notebook", price: 3000, category: "stationery" },
    { name: "mouse", price: 20000, category: "device" },
    { name: "keyboard", price: 30000, category: "device" }
  ];

const result = products.reduce((acc, curr) => acc + curr.price, 0);
console.log(`3. 전체 가격 합: ${result}원`);
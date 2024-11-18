/* use command: {node --loader ts-node/esm product.ts} to run ts file */
/* Task-{4}-start */
interface Product {
  name: string;
  price: number;
}

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => total + product.price, 0);
}

const products: Product[] = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];

const totalPrice = calculateTotalPrice(products);
console.log(`Total Price: $${totalPrice}`);
/* Task-{4}-Done!! */

/* Task-{5}-start */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
console.log(isValidEmail('test@example.com'));
console.log(isValidEmail('invalid-email.com'));
/* Task-{5}-Done!! */
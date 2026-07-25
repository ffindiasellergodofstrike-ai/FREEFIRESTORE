import { products } from './src/data/products';
const cats = new Set(products.map(p => p.category));
console.log(Array.from(cats));

import { products } from './src/data/products';
console.log(products.filter(p => p.isNew).slice(0, 4).map(p => p.title));

import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product.js';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
      {products.map(product => <Product key={product.id} id={product.id} name={product.name} title={product.title} colors={product.colors} sizes={product.sizes} basePrice={product.basePrice} />)}

      {/* <Product
        id={products[0].id}
        name={products[0].name}
        title={products[0].title}
        colors={products[0].colors}
        sizes={products[0].sizes}
        basePrice={products[0].basePrice} />
      <Product
        id={products[1].id}
        name={products[1].name}
        title={products[1].title}
        colors={products[1].colors}
        sizes={products[1].sizes}
        basePrice={products[1].basePrice} /> */}
    </section>
  );
};

export default Products;
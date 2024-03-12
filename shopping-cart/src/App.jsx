import './App.css';
import { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import Product from './components/Product/Product';

function App() {
  const [products, setProducts] = useState([]);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      console.log(data);
      setProducts(data.products);
    }

    getProducts();
  }, []);

  const productComponents = products.map((product) => {
    return <Product 
            title={ product.title } 
            brand={ product.brand } 
            description={ product.description } 
            image={ product.images[0] }
            key={ product.id }
            setAmount={ setAmount }
            amount={ amount }
            />
  });

  return (
    <main>
      <Header amount={ amount } />
      <section>
        { productComponents }
      </section>
    </main>
  )
}

export default App

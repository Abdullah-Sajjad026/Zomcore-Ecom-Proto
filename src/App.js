import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Cartpage from './components/Cartpage';
import Productspage from './components/Productspage';
import { ProductsCtx, IsPendingCtx, CartCtx } from './components/Context';
import faker from 'faker';
import { useEffect, useState } from 'react';

faker.seed(100);

function App() {

  // const productsArray = [...Array(20)].map(() => {
  //   return {
  //     id: faker.datatype.uuid(),
  //     name: faker.commerce.productName(),
  //     price: faker.commerce.price(),
  //     image: faker.random.image(),
  //   }
  // })

  const [products, setProducts] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [cart, setCart] = useState([]);

  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  }
  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data.map((product) => ({ ...product, qty: 1 })));
        setIsPending(false);
      });

  }, []);



  return (
    <BrowserRouter>
      <div className="App">
        <CartCtx.Provider value={[cart, setCart]} >
          <Header />

          <ProductsCtx.Provider value={products}>
            <IsPendingCtx.Provider value={isPending}>


              <Switch>
                <Route path={'/'} exact component={Homepage} />
                <Route path={'/cart'} exact component={Cartpage} />
                <Route path={'/products'} exact component={Productspage} />
              </Switch>

            </IsPendingCtx.Provider>
          </ProductsCtx.Provider>
        </CartCtx.Provider>

        <Footer />
      </div>
    </BrowserRouter >

  );
}

export default App;

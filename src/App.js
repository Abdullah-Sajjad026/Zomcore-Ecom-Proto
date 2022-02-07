import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Cartpage from './components/Cartpage';
import Productspage from './components/Productspage';
import UserPage from './components/UserPage';
import { ProductsCtx, IsPendingCtx, CartCtx, UsersCtx, CurrentUserCtx } from './components/Context';
import faker from 'faker';
import { useEffect, useState } from 'react';

faker.seed(100);

function App() {

  const [products, setProducts] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [cart, setCart] = useState([]);

  const [users, setUsers] = useState(() => {
    return localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
  })
  const [currentUser, setCurrentUser] = useState(() => {
    const currentUser = sessionStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : undefined;
  });

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
          <CurrentUserCtx.Provider value={[currentUser, setCurrentUser]}>

            <Header />

            <UsersCtx.Provider value={[users, setUsers]}>
              <ProductsCtx.Provider value={products}>
                <IsPendingCtx.Provider value={isPending}>


                  <Switch>
                    <Route path={'/'} exact component={Homepage} />
                    <Route path={'/cart'} exact component={Cartpage} />
                    <Route path={'/products'} exact component={Productspage} />
                    <Route path={'/user/:mode'} exact component={UserPage} />
                  </Switch>

                </IsPendingCtx.Provider>
              </ProductsCtx.Provider>
            </UsersCtx.Provider>
          </CurrentUserCtx.Provider>
        </CartCtx.Provider>

        <Footer />
      </div>
    </BrowserRouter >

  );
}

export default App;

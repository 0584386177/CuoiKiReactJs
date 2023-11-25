import React, { useEffect, useState } from 'react';
import Page from './components/Page/Page';
import { Route,Routes } from 'react-router-dom';
import Men from './components/Men/Men';
import Women from './components/Women/Women';
import Context from './Context';

const App = () => {
  const api = "http://localhost:3000/products";
  const [products, setProducts] = useState([null]);
  console.log(products);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(api);
      const data = await response.json();
      return setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <Context.Provider value={products}>
    <div>
    <Header/>
      <Routes>
        <Route path='/' element = {<Page></Page>}></Route>
        <Route path='/women' element = {<Women></Women>}></Route>
        <Route path='/men' element={<Men></Men>}></Route>
      </Routes>
    </div>
    </Context.Provider>
  );
};

export default App;
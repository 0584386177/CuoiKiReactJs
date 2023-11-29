import React from 'react';
import Page from './components/Page/Page';
import { Route,Routes } from 'react-router-dom';
import Men from './components/Men/Men';
import Women from './components/Women/Women';
import Context from './Context';

const App = () => {
  return (
    <Context>
    <div>
      <Routes>
        <Route path='/' element = {<Page></Page>}></Route>
        <Route path='/women' element = {<Women></Women>}></Route>
        <Route path='/men' element={<Men></Men>}></Route>
      </Routes>
    </div>
    </Context>
  );
};

export default App;
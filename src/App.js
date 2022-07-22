import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import CategoryPage from './components/CategoryPage/CategoryPage';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/Technology" element={<CategoryPage></CategoryPage>}></Route>
      </Routes>
    </div>
  );
};

export default App;
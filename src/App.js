import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import CategoryPage from './components/CategoryPage/CategoryPage';
import ShowLaptop from './Share/ShowLaptop/ShowLaptop';
import AsusL from './Page/AsusL/AsusL';
import MacBook from './Page/MacBook/MacBook';
import HP from './Page/HP/HP';
import Lenovo from './Page/Lenovo/Lenovo';
import ShowSony from './components/ShowSony/ShowSony';
import LG from './Page/LG/LG';
import Dell from './Page/Dell/Dell';
import SamsungDesktop from './Page/SamsungDesktop/SamsungDesktop';
import Desktop from './Page/Desktop/Desktop';
import Phone from './Page/Phone/Phone';
import Relmi from './Page/Relmi/Relmi';
import Vivo from './Page/Vivo/Vivo';
import Apple from './Page/Apple/Apple';
import Walton from './Page/Walton/Walton';
import Samphony from './Page/Samphony/Samphony';
import Samsung from './Page/Samsung/Samsung';
import Camera from './Page/Camera/Camera';
import USB from './Page/USB/USB';
import Charger from './Page/Charger/Charger';
import KeyBoard from './Page/KeyBoard/KeyBoard';
import HardDrive from './Page/HardDrive/HardDrive';
import Mouse from './Page/Mouse/Mouse';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/Technology" element={<CategoryPage></CategoryPage>}></Route>
        <Route path="/All" element={<CategoryPage></CategoryPage>}></Route>
        <Route path="/Laptop" element={<ShowLaptop></ShowLaptop>}></Route>
        <Route path="/Asus" element={<AsusL></AsusL>}></Route>
        <Route path="/MacBook" element={<MacBook></MacBook>}></Route>
        <Route path="/HP" element={<HP></HP>}></Route>
        <Route path="/Lenovo" element={<Lenovo></Lenovo>}></Route>
        <Route path="/Sony" element={<ShowSony></ShowSony>}></Route>
        <Route path="/LG" element={<LG></LG>}></Route>
        <Route path="/Dell" element={<Dell></Dell>}></Route>
        <Route path="/Samsung" element={<SamsungDesktop></SamsungDesktop>}></Route>
        <Route path="/Desktop" element={<Desktop></Desktop>}></Route>
        <Route path="/Phone" element={<Phone></Phone>}></Route>
        <Route path="/Relmi" element={<Relmi></Relmi>}></Route>
        <Route path="/Vivo" element={<Vivo></Vivo>}></Route>
        <Route path="/iPhone" element={<Apple></Apple>}></Route>
        <Route path="/Walton" element={<Walton></Walton>}></Route>
        <Route path="/Samphony" element={<Samphony></Samphony>}></Route>
        <Route path="/SamsungPhone" element={<Samsung></Samsung>}></Route>
        <Route path="/Camera" element={<Camera></Camera>}></Route>
        <Route path="/USB" element={<USB></USB>}></Route>
        <Route path="/Charger" element={<Charger></Charger>}></Route>
        <Route path="/KeyBoard" element={<KeyBoard></KeyBoard>}></Route>
        <Route path="/HardDrive" element={<HardDrive></HardDrive>}></Route>
        <Route path="/Mouse" element={<Mouse></Mouse>}></Route>
      </Routes>
    </div>
  );
};

export default App;
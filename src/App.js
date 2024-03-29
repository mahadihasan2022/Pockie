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
import Sunglass from './Page/Sunglass/Sunglass';
import AllSun from './Page/AllSun/AllSun';
import Shoes from './Page/Shoes/Shoes';
import Jewellery from './Page/Jewellery/Jewellery';
import LuxuryFood from './Page/LuxuryFood/LuxuryFood';
import HomeLife from './Page/HomeLife/HomeLife';
import Watch from './Page/Watch/Watch';
import Cosmetic from './Page/Cosmetic/Cosmetic';
import Fashion from './Page/Fashion/Fashion';
import MenCollection from './Page/MenCollection/MenCollection';
import Women from './Page/Women/Women';
import Kids from './Page/Kids/Kids';
import SignUp from './Others/SignUp/SignUp';
import Login from './Others/Login/Login';

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
        <Route path="/SunGlass" element={<Sunglass></Sunglass>}></Route>
        <Route path="/SunGla" element={<AllSun></AllSun>}></Route>
        <Route path="/shoes" element={<Shoes></Shoes>}></Route>
        <Route path="/jewellery" element={<Jewellery></Jewellery>}></Route>
        <Route path="/LuxuryFood" element={<LuxuryFood></LuxuryFood>}></Route>
        <Route path="/HomeLife" element={<HomeLife></HomeLife>}></Route>
        <Route path="/watch" element={<Watch></Watch>}></Route>
        <Route path="/cosmetic" element={<Cosmetic></Cosmetic>}></Route>
        <Route path="/fashion" element={<Fashion></Fashion>}></Route>
        <Route path="/AllFashion" element={<Fashion></Fashion>}></Route>
        <Route path="/man" element={<MenCollection></MenCollection>}></Route>
        <Route path="/woman" element={<Women></Women>}></Route>
        <Route path="/child" element={<Kids></Kids>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
};

export default App;
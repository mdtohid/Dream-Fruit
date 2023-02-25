import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import { Route, Routes } from 'react-router';
import Home from './Component/Home/Home';
import Banner from './Component/Banner/Banner';
import Inventory from './Component/Inventory/Inventory';
import Login from './Component/Authentication/Login/Login';
import ItemInfo from './Component/ItemInfo/ItemInfo';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/banner' element={<Banner></Banner>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:id' element={<ItemInfo></ItemInfo>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer> 
    </div>
  );
}

export default App;

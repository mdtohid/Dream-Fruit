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
import ManageInventory from './Component/ManageInventory/ManageInventory';
import AddItem from './Component/AddItem/AddItem';
import Blogs from './Component/Blogs/Blogs';
import Error404 from './Component/Error404/Error404';
import Registration from './Component/Authentication/Registration/Registration';
import MyItem from './Component/MyItem/MyItem';
import RequireAuth from './Component/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/banner' element={<Banner></Banner>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:id' element={<ItemInfo></ItemInfo>}></Route>
        <Route path='/inventory:/id' element={<RequireAuth>
          <ManageInventory></ManageInventory>
        </RequireAuth>}></Route>
        <Route path='/myItem' element={<MyItem></MyItem>}></Route>
        <Route path='/addItem' element={<AddItem></AddItem>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/*' element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer> 
    </div>
  );
}

export default App;

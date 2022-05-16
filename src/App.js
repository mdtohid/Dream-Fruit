import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import ItemDetail from './Components/ItemDetail/ItemDetail';
import ManageItem from './Components/ManageItem/ManageItem';
import Login from './Components/Login/Login';
import ErrorMsg from './Components/ErrorMsg/ErrorMsg';
import About from './Components/About/About';

function App() {
  return (
    <div>
    <Header></Header>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/fruitItem/:id" element={<ItemDetail/>} />
          <Route path="/fruitItem/ManageItem" element={<ManageItem></ManageItem>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/about" element={<About/>} />
          <Route path="/*" element={<ErrorMsg></ErrorMsg>} />
        </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;

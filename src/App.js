import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
    <Header></Header>
      <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;

import './App.css';
import Banner from './Component/Banner/Banner';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Inventory from './Component/Inventory/Inventory';


function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Inventory></Inventory>
      <Footer></Footer>
    </div>
  );
}

export default App;

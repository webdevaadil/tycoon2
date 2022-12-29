import './App.css';
import Faqcontent from './Components/Faqcontent';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Homecotnent } from './Components/Homecotnent';
import { ProductSort } from './Components/ProductSort';
import { ProductSort1 } from './Components/Searchfilter';
import MobHeader from './Components/MobHeader';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <MobHeader/>
      <Homecotnent/>
      {/* <ProductSort/> */}
      <ProductSort1/>
      <Faqcontent/>
      <Footer/>
     
    </div>
  );
}

export default App;

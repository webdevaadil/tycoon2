import './App.css';
import Faqcontent from './Components/Faqcontent';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { Homecotnent } from './Components/Homecotnent';
import { ProductSort } from './Components/ProductSort';
import { ProductSort1 } from './Components/Searchfilter';
import MobHeader from './Components/MobHeader';
import { useEffect, useState } from 'react';

function App() {
  const [sorttypes, setSorttype] = useState();
  useEffect(() => {
    setSorttype(JSON.parse(localStorage.getItem("sorttype")))
  }, [localStorage]);
  console.log(sorttypes);
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

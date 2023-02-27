import React, { Fragment } from "react";
import Faqcontent from "./Faqcontent";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Homecotnent } from "./Homecotnent";
import MobHeader from "./MobHeader";
import "../App.css";

import { ProductSort1 } from "./Searchfilter";

export const Home = () => {
  return <Fragment>
     <div className="App">
        <Header />
        <MobHeader />
        <Homecotnent />
        {/* <ProductSort/> */}
        <ProductSort1 />
        <Faqcontent />
        <Footer />
      </div></Fragment>;
};

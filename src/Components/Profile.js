import React, { Fragment } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

import MobHeader from "./MobHeader";
import "../App.css";

import { User } from "./User";

export const Profile = () => {
  return <Fragment>
     <div className="App">
        <Header />
        <MobHeader />
        <User />

     
 
        <Footer />
      </div></Fragment>;
};

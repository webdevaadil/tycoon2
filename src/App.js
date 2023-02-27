import "./App.css";
import { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Home } from "./Components/Home";

function App() {
  const [sorttypes, setSorttype] = useState();
  useEffect(() => {
    setSorttype(JSON.parse(localStorage.getItem("sorttype")));
  }, [localStorage]);
  console.log(sorttypes);
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

import React from "react";
import "./App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Home from "./Home/Home";
import Contactanos from "./contactanos/contactanos"
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

const App = () => (
  <>
  <BrowserRouter>
    <Header />
    <Main>
      <Switch>
	     <Home />
       {/* <Contactanos /> */}
       </Switch>
    </Main>
    <Footer />
    </BrowserRouter>
  </>
);

export default App;

import React, { Fragment } from "react";
import Header from "./sections/Header";
import Banner from "./sections/Banner";
import Feature from "./sections/Feature";
import Hosting from "./sections/Hosting";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <Fragment>
      <div className="App">
        <Header />
        <Banner />
        <Feature />
        <Hosting />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </Fragment>
  );
};

export default App;

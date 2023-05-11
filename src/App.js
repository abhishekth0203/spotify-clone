import React, { Component } from "react";
import Top from "./Component/Top";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import Header2 from "./Component/Header2";
import Header3 from "./Component/Header3";
import Header4 from "./Component/Header4";
import Header5 from "./Component/Header5";

class App extends Component {
   render() {
    return (
      <div>
        <Top/>
        <Navbar/>
        <Header/>
        <Header2/>
        <Header3/>
        <Header4/>
        <Header5/>
      </div>
    );
   }
}



export default App;

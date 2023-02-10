import React, { Component } from "react";
import Top from "./Component/Top";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";

class App extends Component {
   render() {
    return (
      <div>
        <Top/>
        <Navbar/>
        <Header/>
      </div>
    );
   }
}



export default App;

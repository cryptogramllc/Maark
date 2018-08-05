import React from "react";
import ReactDOM from "react-dom";
import MenuComponent from './components/MenuComponent';

const Index = () => {


  return (
    <div className="main_cont">
         <MenuComponent />
    </div>
  );

};


ReactDOM.render(<Index />, document.getElementById("index"));

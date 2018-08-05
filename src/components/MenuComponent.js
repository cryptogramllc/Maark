import React, {Component} from "react";
import ReactDOM from "react-dom";

import './MenuComponent.scss';

class MenuComponent extends Component {
  constructor(){
    super();
    this.state = {
      selectedItem : 0,
      load: false
    }

  }


  componentDidMount(){
      this.setState((state) => ({ load: true}))

  }

  handleSelect = (e, key) => {
     this.setState((state) => ({ selectedItem: key}))
  }



  render(){
    let MenuOptions = ["Audiences", "Partners", "Brands"];
    let animate = this.state.selectedItem * 33.4 + '%';
    let options = MenuOptions.map((i,key) => {
       return(
         <li key={key}  onClick={(e) => this.handleSelect(e, key)}>
             <a href="#" className={key == this.state.selectedItem
                ? 'selected' : 'unselected'}>
                {i}
              </a>
         </li>
       )
    })
    return(
      <div className={`menu_cont ${this.state.load ? 'load' : '' }`}>
          <ul className="menu">
             {options}
          </ul>
          <div className="blue_bar" style={{left:animate}} ></div>
      </div>
    )

  }





}


export default MenuComponent;

import React from "react";
import { Link } from "react-router-dom";
import Favourite from "./Favourite";


export default class Navbar extends React.Component {
  render() {
    return (
      <div className = "navbar-container">
          <Link to ="/"  style={{textDecoration : "none"}}>  <h2 > Movies-App</h2> </Link>
          <Link to ="/favourites"  style={{textDecoration : "none"}}>  <h5 > Favourite</h5> </Link>
           
      </div>
    );
  }
}

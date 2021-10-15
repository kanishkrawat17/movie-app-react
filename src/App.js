import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MovieCard from "./components/MovieCard";
import Pagination from "./components/Pagination";
import Favourite from "./components/Favourite";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      
   <Router>
   
     <Navbar />
     <Route path="/"   exact component = {Banner} />
     <Route path="/"   exact component = {MovieCard} />
     <Route path="/favourites"  exact component = {Favourite}/> 
 
   </Router>
          
    </>
  );
}

export default App;

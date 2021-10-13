import React from "react";
import { movies } from "../movies";
export default class MovieCard extends React.Component {
  render() {
    let movie = movies.results;
    console.log(movie);
    return (
      <>
        
        {movie.map((movieDetails) => {
          return (<div class="card moviecard-container" style={{ width: "13rem" }}>
            {/* <img src="..." class="card-img-top" alt="..." /> */}
            <div class="card-body img-container">
              <img src={`http://image.tmdb.org/t/p/original${movieDetails.poster_path}`} alt={movieDetails.title}/>
              {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
              <a  class="btn btn-primary">
                Movie Plot
              </a>
            </div>
          </div>
         )
        })}
         
      </>
    );
  }
}





{
  /* 

movie.map((elt)=>{
    <img src ={`ksnksn`}/>
})


*/
}

import React from 'react';
import {movies} from "../movies.js";


export default class Banner extends React.Component {

    render() {
      let movie = movies.results[15]
    
        return (
            <div className = "banner-container">
                <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}/>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
            </div>
        )
    }
}

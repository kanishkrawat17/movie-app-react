import axios from "axios";
import React, { Component } from "react";
import { movies } from "../movies";

export default class Favourite extends Component {
  state = {
    favMovies: [],
    genresType: [],
  };

  componentDidMount() {
    let genres = {     28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary",   18: "Drama",  10: "Family",
                        14: "Fantasy", 36: "History", 27: "Horror",10: "Music",96: "Mystery",10: "Romance",87: "Science Fiction",10: "TV Movie",53: "Thriller",10: "War",37: "Western",878: "Superhero", };

    console.log("in did mount");
    let temp = [];

    let data = JSON.parse(localStorage.getItem("movies") || "[]");
    let tempArr = [];

    data.forEach((movie) => {
      if (!tempArr.includes(genres[movie.genre_ids[0]])) {
        tempArr.push(genres[movie.genre_ids[0]]);
      }
    });

    this.setState({
      favMovies : [...JSON.parse(localStorage.getItem('movies'))],
      genresType: [...tempArr],
    });
   
    console.log(tempArr);
    console.log(data);
  }

  deleteFromFav = (movie)=>{
    let ansArr = JSON.parse(localStorage.getItem('movies')).filter((m)=> {
            return m.id != movie.id
    })
    console.log(ansArr)
    localStorage.setItem('movies', JSON.stringify(ansArr))

    this.setState({
        ...this.state,
        favMovies : [...ansArr]
    })


  }

  render() {
    console.log(this.state.genresType);
    console.log(this.state.favMovies);

    console.log("in render");

    return (
      <div>
        <div class="container">
          <div class="row">
            <div
              class="col-2"
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ul class="list-group mt-4">
                <li
                  class="list-group-item"
                  style={{
                    background: "red",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  All genres
                </li>
                {this.state.genresType.map((genre) => {
                  return (
                    <li class="list-group-item" style={{ fontSize: "0.95rem" }}>
                      {genre}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div class="col-10">
              <div class="input-group mt-4">
                <input type="text" class="form-control" placeholder="Search" />
                <input type="text" class="form-control" />

                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Movies</th>
                      <th scope="col">Title</th>
                      <th scope="col">Vote Count</th>
                      <th scope="col">Genres</th>
                    </tr>
                  </thead>

                  <tbody>
                    {this.state.favMovies.map((movie) => {
                      return (
                        <tr>
                          <td>
                            {" "}
                            <img
                              src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
                              alt={movie.title}
                              style={{ height: "5rem", width: "4rem" }}
                            />
                          </td>
                          <td>{movie.title}</td>
                          <td>{movie.vote_count}</td>

                          <td
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <button
                              className="btn btn-primary"
                              style={{ backgroundColor: "red" }}
                              onClick = {()=>{
                                  this.deleteFromFav(movie)
                            }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <nav aria-label="Page navigation example ">
          <ul class="pagination" style={{ justifyContent: "center" }}>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

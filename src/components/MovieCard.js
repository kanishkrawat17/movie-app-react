import React from "react";
// import { movies } from "../movies";
import axios from "axios";

export default class MovieCard extends React.Component {
  state = {
    movies: [],
    pageArr: [1],
    currPage: 1,
    favourites : []
  };

  componentDidMount() {
    console.log("in mount");
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=447ec54a96ca863f96a69340268fbb18&language=en-US&page=${this.state.currPage}`
      )
      .then((response) => {
        console.log(response.data.results);
        this.setState({
          movies: [...response.data.results],
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  handleNext = () => {
    console.log("in next")
    let tempArr = [];
    tempArr = this.state.pageArr;
    tempArr.push(this.state.currPage + 1);

    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=447ec54a96ca863f96a69340268fbb18&language=en-US&page=${
          this.state.currPage + 1
        }`
      )
      .then((res) => {
        this.setState({
          ...this.state,
          currPage: this.state.currPage + 1,
          pageArr: tempArr,
          movies: [...res.data.results],
        });
      });
  };

  handlePrevious = async () => {
    console.log("in previous")
    if (this.state.currPage == 1) {
      return;
    }

    let tempArr = [];
    tempArr = this.state.pageArr;
    tempArr.pop(this.state.currPage - 1);

    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=447ec54a96ca863f96a69340268fbb18&language=en-US&page=${
          this.state.currPage - 1
        }`
      )
      .then((res) => {
        this.setState({
          ...this.state,
          currPage: this.state.currPage - 1,
          pageArr: tempArr,
          movies: [...res.data.results],
        });
      });
  };

  pageClick = (pageNO)=>{

    
    console.log("in page click")
    axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=447ec54a96ca863f96a69340268fbb18&language=en-US&page=${
        pageNO
      }`
    )
    .then((res) => {
      this.setState({
        movies: [...res.data.results],
      });
      console.log(this.state.movies);
    });
  }


  // handlePrevious = ()=>{

  //   if(this.state.currPage == 1){
  //     return ;
  //   }
  //   this.setState({
  //     currPage : this.state.currPage -1,
  //   })
  //   axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=447ec54a96ca863f96a69340268fbb18&language=en-US&page=${this.state.currPage}`)
  //   .then((res)=>{
  //       this.setState({
  //         ...this.state,
  //         currPage :  this.state.currPage+1,
  //         pageArr : tempArr,
  //         moviesArr : [...res.data.results]
  //       })
  //   })
  // }



  handleFavourites = (movie)=>{

    let oldArr  = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : [];
    if(this.state.favourites.includes(movie.id)){
      oldArr = this.state.favourites.filter((m)=>{
        return m.id != movie.id;
      })
      console.log(oldArr);
      this.setState({
        favourites : [...oldArr]
      })
      localStorage.setItem("movies", JSON.stringify(this.state.favourites))
    } else{
      oldArr.push(movie.id);
      console.log(oldArr)
      this.setState({
        favourites : [...oldArr]
      })
      localStorage.setItem("movies", JSON.stringify(this.state.favourites))
    }
    
      // let moviesArray = localStorage.getItem("movies") ? JSON.parse(localStorage.getItem("movies")) : [];
        
      // if(moviesArray.length == 0){
      //   moviesArray.push(movie);
      //   localStorage.setItem("movies", JSON.stringify(moviesArray))
      // } else if(!moviesArray.length == 0){
      //   moviesArray.map((movieObj) => {
      //     if(movieObj.id == movie.id){
      //       // localStorage.remove()
      //       return ;
      //     } else{
      //       moviesArray.push(movie);
      //       localStorage.setItem("movies", JSON.stringify(moviesArray))
      //     }
      //   })
      // }
     
  }

  render() {
    console.log("in render");
    // let movie = movies.results;
    // console.log(movie);
    return (
      <>
        {this.state.movies.length == 0 ? (
          "...loading"
        ) : (
          <div className="movieCard-box">
            {this.state.movies.map((movieDetails) => {
              return (
                <div
                  class="card moviecard-container"
                  style={{ width: "13rem" }}
                >
                  {/* <img src="..." class="card-img-top" alt="..." /> */}
                  <div class="card-body img-container">
                    <img
                      src={`http://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
                      alt={movieDetails.title}
                    />
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <a class="btn btn-primary" onClick= {()=>{
                      this.handleFavourites(movieDetails)
                    } }
                    >
                      {
                        this.state.favourites.includes(movieDetails.id) ? "Remove from Fav" : "Add to fav"   
                      }  
                      </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <nav aria-label="Page navigation example pagination-container">
          <ul class="pagination" style={{ justifyContent: "center" }}>
            <li class="page-item" href="#">
              <a class="page-link" onClick={this.handlePrevious}>
                Previous
              </a>
            </li>
            {this.state.pageArr.map((pageNO) => {
              return (
                <li class="page-item" key={pageNO}>
                  <a class="page-link" href="#" onClick = { ()=>{
                    this.pageClick(pageNO)
                  }}>
                    {pageNO}
                  </a>
                </li>
              );
            })}
            <li class="page-item" href="#">
              <a class="page-link" onClick={this.handleNext}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}


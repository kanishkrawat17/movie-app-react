import React, { Component } from 'react'
import { generatePath } from 'react-router';
import { movies } from '../movies'
export default class Favourite extends Component {
   
    
    
    
    
    render() {
        let movie = movies.results;
        console.log(movie);
        let tempArr = [];
        tempArr.push("All Genres");

        let genres =  [{"id":28,"name":"Action"},
        {"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},
        {"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},
        {"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},
        {"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},
        {"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},
        {"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}];

        return (
        <div>
            <div class="container">

                    <div class="row">
                        <div class="col-2">
                        <ul class="list-group mt-4">
                        <li class="list-group-item">All genres</li>
                            {
                               
                               genres.map((obj)=>{
                                   if(tempArr.includes(obj.name)){

                                   } else{
                                        tempArr.push(obj.name)
                                        return  <li class="list-group-item">{obj.name}</li>
                                   }
                               })
                               
                            }
                           
                        </ul>
                    </div>

                        <div class="col-10">
                        <div class="input-group mt-4">
                            <input type="text" class="form-control" placeholder="Search"  />
                            <input type="text" class="form-control"   />

                            <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Movies</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Vote Count</th>
                                    <th scope="col">Genres</th>
                                    </tr>
                                </thead>

                                <tbody >
                                    {movies.results.map((movie)=>{
                                        return  <tr>
                                        <td> <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} style={{ height : "5rem",width : "4rem"}} /></td>
                                        <td>{movie.title}</td>
                                        <td>{movie.vote_count}</td>
                                        
                                        {
                                            genres.map((obj)=>{
                                                let actionId  = movie.genre_ids[0]
                                                if(obj.id == actionId){
                                                    return <td> { obj.name}</td>
                                                } else{
                                                    <td></td>
                                                }
                                                 
                                            })

                                        
                                        }
                                        <td style= {{justifyContent:"center" , alignItems: "center"}}>
                                            <button className = 'btn btn-primary' style={{backgroundColor:"red"}}>Delete</button>
                                        </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                        </div>
                        
                    </div>
                   
            </div>


            <nav aria-label="Page navigation example " >
                <ul class="pagination" style = {{justifyContent : "center"}}>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                </ul>
            </nav>
            </div>
         
        )
    }
}

import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieServices';
class Movies extends Component {
    state = {
        movies:getMovies(),
      };
      handaleDelete=movie=>{
          const movies=this.state.movies.filter(m=>m._id!==movie._id);
          this.setState({movies});
      };
    render() { 
        return( 
            <table className="table">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Genre</td>
                        <td>Stock</td>
                        <td>Rate</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.movies.map(movie=>(
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><button onClick={()=>this.handaleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
 
export default Movies;
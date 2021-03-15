import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./like";
class Counter extends Component {
  state = {
    movies: getMovies(),
    display: { display: "unset" },
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((mv) => mv._id !== movie._id);
    this.setState({ movies });
    if (this.state.movies.length === 1)
      this.setState({ display: { display: "none" } });
  };
  movieCounter = () => {
    if (this.state.movies.length === 0) {
      return "There are no movies in the database";
    }
    return `Showing ${this.state.movies.length} movies in the database.`;
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  // list of movies with imported Like Component
  movieList = () => {
    return this.state.movies.map((movie) => {
      return (
        <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>
            <Like liked={movie.liked} onLike={() => this.handleLike(movie)} />
          </td>
          <td>
            <button
              onClick={() => this.handleDelete(movie)}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <p>{this.movieCounter()}</p>
        <table style={this.state.display} className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.movieList()}</tbody>
        </table>
      </div>
    );
  }
}

export default Counter;

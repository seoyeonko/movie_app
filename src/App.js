import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";

// Class Component
class App extends Component {
  // State
  state = { isLoading: true, movies: [] };

  // async/await 비동기 처리
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    // this.setState({ movies: movies });
    this.setState({ movies, isLoading: false });
  };

  // Called Immediately after component creation
  componentDidMount() {
    this.getMovies();
  }

  // render method
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
      </div>
    );
  }
}

export default App;

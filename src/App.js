import React, { Component } from "react";
import axios from "axios";

// Class Component
class App extends Component {
  // State
  state = { isLoading: true, movies: [] };

  // async/await 비동기 처리
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);
  };

  // Called Immediately after component creation
  componentDidMount() {
    this.getMovies();
  }

  // render method
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;

import React, { Component } from "react";

// Class Component
class App extends Component {
  // State
  state = { isLoading: true, movies: [] };

  // Called Immediately after component creation
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
    // data fetching from API --> movie render
  }

  // render method
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;

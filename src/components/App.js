import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import ImageList from "./ImageList";
//this onSubmit can be named anything unlike the one on form element

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID f4c5ae2d985d21a13811ddd09f96d84ee9f361a9d46326937e49190f0c626a98"
      }
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

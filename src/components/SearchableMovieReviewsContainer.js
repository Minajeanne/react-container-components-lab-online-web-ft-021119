import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    state = {
      searchTerm: "",
      reviews: []
    };
  }

  handleSearchChange = e => {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    fetch(URL)
    .then(resp => resp.json())
    .then(resp => this.setState({ reviews: resp.results }))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleSearchChange}></input>
          <button type="submit">Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;

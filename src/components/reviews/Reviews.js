import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
	renderReviews = () => this.props.reviews.map(review => <Review  key={review.id} 
																																	review={review} 
																																	removeReview={this.props.removeReview} />)

  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};




export default Reviews;
import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from 'react-redux'

class ReviewsContainer extends Component {
	filteredReviews = () => this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)

  render() {
    return (
      <div>
        <ReviewInput restaurant={this.props.restaurant} addReview={this.props.addReview}/>
        <Reviews reviews={this.filteredReviews()} removeReview={this.props.removeReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
	return{
		reviews: state.reviews
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addReview: review => dispatch({type: "ADD_REVIEW", payload: review}),
		removeReview: reviewId => dispatch({type: "REMOVE_REVIEW", reviewId})
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);

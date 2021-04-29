import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import {connect} from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} removeRestaurant={this.props.removeRestaurant}/>
      </div>
    )
  }
}

const mapStoreToProps = store => {
	return {restaurants: store.restaurants}
}

const mapDispatchToProps = dispatch => {
	return {
		addRestaurant: restaurant => dispatch({type: "ADD_RESTAURANT", payload: restaurant}),
		removeRestaurant: restaurantId => dispatch({type: "REMOVE_RESTAURANT", restaurantId})
	}
}

export default connect(mapStoreToProps, mapDispatchToProps)(RestaurantsContainer);

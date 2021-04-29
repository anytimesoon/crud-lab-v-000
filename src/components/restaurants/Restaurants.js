import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
	renderRestaurants = () => {
		return( this.props.restaurants.map((restaurant, i) => <Restaurant key={i} 
																																			restaurant={restaurant} 
																																			removeRestaurant={this.props.removeRestaurant}/>
																				)
						)
	}

  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};


export default Restaurants;
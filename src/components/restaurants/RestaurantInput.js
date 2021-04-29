import React, { Component } from 'react';
import cuid from 'cuid';

class RestaurantInput extends Component {
	state = {
		text: ''
	}

	submitHandler = (e) => {
		e.preventDefault()
		this.props.addRestaurant({...this.state,
																id: cuid()
																})
		this.setState({
			text: ''
		})
	}

  render() {
    return (
      <div>
        <h3>Restaurant Input</h3>
        <form onSubmit={ (e) => this.submitHandler(e) }>
        	<input type="text" onChange={(e) => this.setState({ text: e.target.value })} name="text" value={this.state.text}/>
        	<input type="submit" />
        </form>
      </div>
    );
  }
};



export default RestaurantInput;

import React, { Component } from 'react';
import Reviews from './Reviews';
import cuid from 'cuid'

class ReviewInput extends Component {
	state = {
		text: ''
	}

	submitHandler = e => {
		e.preventDefault()
		this.props.addReview({...this.state,
														id: cuid(),
														restaurantId: this.props.restaurant.id
													})
		this.setState({
			text: ''
		})
	}

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.submitHandler(e)}>
        	<input type="textArea" value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })}/>
        	<input type="submit" />
        </form>
      </div>
    );
  }
};


export default ReviewInput;

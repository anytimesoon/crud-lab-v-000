import cuid from 'cuid';

export const reviews = (state=[], action) => {
	switch (action.type) {
		case "ADD_REVIEW":
			
			return [...state, action.payload]
		case "REMOVE_REVIEW":
			const newState = state.filter(review => review.id !== action.reviewId)
			console.log(newState)
			return newState
		default:
			return state
	}
}
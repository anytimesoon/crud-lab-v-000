import cuid from 'cuid';

export const restaurants = (state=[], action) => {
	switch (action.type) {
		case "ADD_RESTAURANT":
			return [...state, action.payload]
		case "REMOVE_RESTAURANT":
			const newState = state.filter(restaurant => restaurant.id !== action.restaurantId)
			return newState
		default:
			return state
	}
}
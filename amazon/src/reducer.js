export const initialState = {
    basket: [{
        id : "12321346",
        title : "The Master Algorithm",
        price :  21.34,
        rating :  4,
        image : "https://images.pexels.com/photos/2909225/pexels-photo-2909225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }],
    user: null,
};

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            return { 
            ...state,
            basket: [...state.basket, action.item],
            }
        case 'REMOVE_FROM_BASKET':
            // Logic for Removing item from basket
            return { state }
        default:
            return state;
    }
}

export default reducer;
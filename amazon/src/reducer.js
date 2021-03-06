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

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);
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
            // we cloned the basket
            let newBasket = [...state.basket];
            // we check to see if product exists
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if(index >= 0){
                // item exists in basket, remove it...
                newBasket.splice(index,1);

            } else {
                console.warn(
                    `can't remove product (id: ${action.id}) as its now showing on the screen`
                )
            }
            return { 
                ...state,
                 basket: newBasket
                 }
        default:
            return state;
    }
}

export default reducer;
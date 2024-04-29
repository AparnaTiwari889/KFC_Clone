// Define action types
const ADD_TO_CART = 'ADD_TO_CART';
// Define action creators
const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};

// Define initial state
const initialState = {
  cartItems: []
};

// Define reducer function
 export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload.item]
      };
    default:
      return state;
  }
};

// Example usage of action creator
const productToAdd = { id: 1, name: 'Example Product', price: 10 };
const action = addToCart(productToAdd);
console.log(action);

// Example usage of reducer
const stateBefore = {
  cartItems: []
};
console.log("State before:", stateBefore);
const stateAfter = productReducer(stateBefore, action);
console.log("State after:", stateAfter);


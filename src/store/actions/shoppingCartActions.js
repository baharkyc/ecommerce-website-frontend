export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";



export const setCart = (cart) => {
    return {
        type: SET_CART,
        payload: cart,
    }
}

export const setPayment = (payment) => {
    return {
        type: SET_PAYMENT,
        payload: payment,
    }
}

export const setAddress = (address) => {
    return {
        type: SET_ADDRESS,
        payload: address,
    }
}

export const addToCart = (product) => (dispatch, getState) => {

    const state = getState();
    const cart = state.shoppingCart.cart;

    let updatedCart;

    const existingIndex = cart.findIndex(item => item.product.id === product.id);

    if(existingIndex !== -1) { //item already in cart, increase count.

        updatedCart = cart.map((item, index) => 
        index === existingIndex
            ? {...item, count : item.count + 1}
            : item
        );

    } else { //item not in cart, add to cart.

        updatedCart = [
            ...cart, 
            {
                count :1,
                checked: true,
                product,
            }
        ]

    } 
    console.log("cart: ", updatedCart);

    dispatch(setCart(updatedCart));
}

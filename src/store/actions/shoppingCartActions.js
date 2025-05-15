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

export const decreaseItemCount = (productId) => (dispatch, getState) => {
    const state = getState();
    const cart = state.shoppingCart.cart;

    const existingIndex = cart.findIndex(item => item.product.id === productId);

    if (existingIndex === -1) return; // ürün sepette değilse, işlem yapma

    const existingItem = cart[existingIndex];

    let updatedCart;

    if (existingItem.count > 1) {
        updatedCart = cart.map((item, index) =>
            index === existingIndex
                ? { ...item, count: item.count - 1 }
                : item
        );
    } else {
        // Adet 1'di, azaltınca sıfır olacağı için ürünü sepetten kaldır
        updatedCart = cart.filter((item, index) => index !== existingIndex);
    }

    dispatch(setCart(updatedCart));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
    const state = getState();
    const {cart} = state.shoppingCart;

    const updatedCart = cart.filter(item => item.product.id !== productId);

    dispatch(setCart(updatedCart));
};

export const toggleChecked = (productId) => (dispatch, getState) => {
    const state = getState();
    const {cart} = state.shoppingCart;

    const updatedCart = cart.map(item => 
        item.product.id === productId 
          ? { ...item, checked: !item.checked }  // Toggle checked
          : item
    );

    dispatch(setCart(updatedCart));
};

export const selectAllProducts = () => (dispatch, getState) => {
    const state = getState();
    const {cart} = state.shoppingCart;

    const updatedCart = cart.map(item =>
        ({ ...item, checked: true})
    );


    dispatch(setCart(updatedCart));
}

export const deselectProducts = () => (dispatch, getState) => {
    const state = getState();
    const {cart} = state.shoppingCart;

    const updatedCart = cart.map(item =>
        ({ ...item, checked: false})
    );


    dispatch(setCart(updatedCart));
}

import axiosInstance from "../../api/axiosInstance";
import { setLastOrder, setPastOrders } from "./clientActions";
import { setLoading } from "./globalActions";

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

export const createOrder = () => async(dispatch, getState) => {

    dispatch(setLoading(true));

    const state = getState();

    const {cart} = state.shoppingCart;
    const { selectedAddressId, selectedCardId, creditCards } = state.client;

    const checkedItems = cart.filter(item => item.checked); //Take checked items in account for order
    if (checkedItems.length === 0) return; //If none checked 

    const selectedCard = creditCards.find(card => card.id === selectedCardId); //Selected card information

    if (!selectedCard || !selectedAddressId) { //Make sure address and card info selected
        console.error("Card or address information not selected");
        return;
    }

    const productsTotalPrice = checkedItems.reduce((acc, item) => {
        return acc + item.product.price * item.count;
      }, 0);
      
      const totalPrice = productsTotalPrice < 1000 ? productsTotalPrice + 49 : productsTotalPrice;

    const order = {
        address_id: selectedAddressId,
        order_date: new Date().toISOString(), // şu anki zaman
        card_no: selectedCard.card_no,
        card_name: selectedCard.id,
        card_expire_month: selectedCard.expire_month,
        card_expire_year: selectedCard.expire_year,
        card_ccv: "***",
        price: totalPrice,
        products: checkedItems.map(item => ({
            product_id: item.product.id,
            count: item.count,
            detail: item.product.name,
        }))
    };

    try {
        const response = await axiosInstance.post("/order", 
            order);
            
        console.log("Order create success");

        dispatch(setCart([]));
        dispatch(setLastOrder(order));

    } catch (error) {
        console.error("Order create error", error.message);       

    } finally {
        dispatch(setLoading(false));
    }

}

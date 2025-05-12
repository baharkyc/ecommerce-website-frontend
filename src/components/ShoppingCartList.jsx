import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import ButtonMd from "./buttons/ButtonMd";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Trash } from "lucide-react";

import {
  addToCart,
  decreaseItemCount,
  removeFromCart,
  toggleChecked,
} from "../store/actions/shoppingCartActions";



const ShoppingCartList = () => {

  const { cart } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
  const history = useHistory();

  const totalPrice = cart
  .filter((item) => item.checked)  // Filter only checked items
  .reduce((acc, item) => acc + item.count * item.product.price, 0); 

  const totalCount = cart
  .filter((item) => item.checked)
  .reduce((acc, item) => acc + item.count, 0);
  
  const handleChecked = (id) => {
    dispatch(toggleChecked(id));
  }

  useEffect(() => {
    console.log(cart);
  }, cart);


  if (cart.length === 0) {
    return (
      <div className="bg-white text-second-text-color p-4 text-center  w-full text-sm font-semibold">
        Your shopping cart is empty.
      </div>
    );
  }

  return (
    <div className="bg-white p-4 shadow-lg rounded-md w-[800px] text-sm  space-y-4">

      <div className="text-text-color flex flex-row justify-between">
        <h2 className="text-lg font-semibold">My Shopping Cart</h2>
        <h2 className="text-lg font-semibold">({totalCount} Products)</h2>
      </div>
      

      {cart.map((item) => (
        <div
          key={item.product.id}
          className="border rounded-md p-4 flex flex-col md:flex-row items-center justify-between gap-4 bg-white shadow-sm"
        >

          {/* Checkbox */}
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => handleChecked(item.product.id)}
            className="mr-4"
          />

          {/* Image of Product */}
          <img
            src={item.product.images[0]?.url}
            alt={item.product.name}
            className="w-20 h-20 object-cover rounded-md"
          />

          {/* Product Information */}
          <div className=" flex-1 flex flex-col items-start">
            <p className="font-bold text-text-color">{item.product.name}</p>
            <p className="font-normal text-second-text-color">{item.product.description}</p>
            <p className="text-xs text-green-600 mt-1">Shipping tomorrow latest!</p>
          </div>

          {/* Count Control */}
          <div className="flex flex-row items-center justify-between border rounded-md px-2 py-1 w-20">
            <button
              onClick={() => dispatch(decreaseItemCount(item.product.id))}
              className="text-gray-600 hover:text-black text-lg font-bold"
            >
              −
            </button>
            <span className="px-2 ">{item.count}</span>
            <button
              onClick={() => dispatch(addToCart(item.product))}
              className="text-gray-600 hover:text-black text-lg font-bold"
            >
              +
            </button>
          </div>

          {/* Price */}
          <div className="text-primary-color font-semibold text-center w-24">
            ₺{(item.product.price * item.count).toFixed(2)}
          </div>

          {/* Delete */}
          <button
            onClick={() => dispatch(removeFromCart(item.product.id))}
            className="text-gray-400 hover:text-red-600 transition"
            title="Delete"
          >
            <Trash />
          </button>
        </div>
      ))}

      {/* Cart Total */}
      <div className="flex justify-end gap-16 items-center pt-4 border-t font-semibold text-base">
        <span>Total:</span>
        <span className="text-primary-color">₺{totalPrice.toFixed(2)}</span>
      </div>

      {/* Complete Order Button */}
      <div className="w-full flex items-center justify-end pt-2">
        <div className="w-48">
          <ButtonMd onClick={() => history.push("/checkout")} isFilled={true}>
            Complete Order
          </ButtonMd>
        </div>
        
      </div>
    </div>
  );
};

export default ShoppingCartList;

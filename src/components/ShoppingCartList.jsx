import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Trash } from "lucide-react";

import {
  addToCart,
  decreaseItemCount,
  deselectProducts,
  removeFromCart,
  selectAllProducts,
  toggleChecked,
} from "../store/actions/shoppingCartActions";



const ShoppingCartList = () => {

  const { cart } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
  const history = useHistory();

  const totalPrice = cart
  .filter((item) => item.checked)  // Filter only checked items
  .reduce((acc, item) => acc + item.count * item.product.price, 0); 

  const checkedCount = cart
  .filter((item) => item.checked)
  .reduce((acc, item) => acc + item.count, 0);

  const totalCount = cart.reduce((acc, item) => acc + item.count, 0);
  
  const handleChecked = (id) => {
    dispatch(toggleChecked(id));
  }

  if (cart.length === 0) {
    return (
      <div className="bg-white text-second-text-color py-32 text-center  w-full text-sm font-semibold">
        Your shopping cart is empty.
      </div>
    );
  }

  return (
    <div className="bg-white p-4 srounded-md md:w-[800px] text-sm  space-y-4">

      <div className="text-text-color text-lg font-semibold flex flex-row justify-between">
        <h2 >My Shopping Cart</h2>
        <h2 >{checkedCount} of {totalCount} Products Selected</h2>
      </div>
      

      {cart.map((item) => (
        <div
          key={item.product.id}
          className="md:min-h-[150px] border rounded-md p-4 flex flex-col md:flex-row items-center justify-between gap-4 bg-white shadow-sm"
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
            <p className="text-xs text-green-600 mt-1">Shipment in 2-3 business days</p>
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

      <div className="grid grid-cols-2 justify-between items-center text-normal py-2 px-6">
        <div className=" flex gap-1 md:gap-4">

          {/* Select All */}
          <div className=" hover:text-primary-color">
            <button onClick={() => dispatch(selectAllProducts())}>
              Select All
            </button>
          </div>

          <span>|</span>

          {/* Deselect All */}
          <div className=" hover:text-primary-color">
            <button onClick={() => dispatch(deselectProducts())}>
              Deselect All
            </button>
          </div>
        </div>
        
        {/* Cart Total */}
        <div className="flex text-lg justify-center md:justify-between gap-2 md:ml-48 items-center font-semibold ">
          <span>Total:</span>
          <span className="text-primary-color">{totalPrice.toFixed(2)}₺</span>
        </div>

      </div>
        
      
    </div>
  );
};

export default ShoppingCartList;

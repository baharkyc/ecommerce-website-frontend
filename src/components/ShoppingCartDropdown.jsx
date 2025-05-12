import { useSelector } from "react-redux";
import ButtonMd from "./buttons/ButtonMd";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ShoppingCartDropdown = () => {

  const { cart } = useSelector((state) => state.shoppingCart);

  const history = useHistory();

  if (cart.length === 0) {
    return (
      <div className="bg-white text-second-text-color p-4 text-center shadow-lg rounded-md w-full text-sm font-semibold">
        Your shopping cart is empty.
      </div>
    );
  }

  return (
    <div className="bg-white p-4 shadow-lg rounded-md w-full overflow-y-auto text-sm space-y-3">

      {/* Cart Title */}
      <div className="font-semibold text-lg mb-4">
        My Shopping Cart ({cart.reduce((acc, item) => acc + item.count, 0)} Products)
      </div>

      {cart.map((item) => (
        <div key={item.product.id} className="flex justify-between items-center space-x-4">

          {/* Product Image */}
          <div className="w-16 h-16">
            <img
              src={item.product.images[0]?.url}
              alt={item.product.name}
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col flex-grow">
            <p className="font-medium">{item.product.name}</p>
            <p className="text-gray-500">{item.count} x ₺{item.product.price.toFixed(2)}</p>
          </div>
    

          {/* Product Total Price */}
          <p className="font-semibold">₺{(item.count * item.product.price).toFixed(2)}</p>
        </div>
      ))}

      <hr />
      
      <div className="flex justify-between font-semibold pt-2">
        <span>Total:</span>
        <span>
          ₺{cart.reduce((acc, item) => acc + item.count * item.product.price, 0).toFixed(2)}
        </span>
      </div>

      {/* Buttons */}
      <div className="flex flex-row gap-2 mt-4">
        <ButtonMd onClick={() => {history.push("/cart")}} isFilled={false}>
          Go to Cart
        </ButtonMd>
        <ButtonMd onClick={() => {}} isFilled={true}>
          Complete Order
        </ButtonMd>
      </div>
    </div>
  );
};

export default ShoppingCartDropdown;

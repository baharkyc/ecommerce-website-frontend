import { useSelector } from "react-redux";


const ShoppingCartDropdown = () => {

    const { cart } = useSelector((state) => state.shoppingCart);
  
    if (cart.length === 0) {
      return (
        <div className="bg-white p-4 shadow-lg rounded-md w-72 text-sm">
          Sepetiniz boş.
        </div>
      );
    }
  
    return (
      <div className="bg-white p-4 shadow-lg rounded-md w-80 max-h-96 overflow-y-auto text-sm space-y-3">
        {cart.map((item) => (
          <div key={item.product.id} className="flex justify-between">
            <div>
              <p className="font-medium">{item.product.name}</p>
              <p className="text-gray-500">{item.count} x ₺{item.product.price.toFixed(2)}</p>
            </div>
            <p className="font-semibold">₺{(item.count * item.product.price).toFixed(2)}</p>
          </div>
        ))}
        <hr />
        <div className="flex justify-between font-semibold pt-2">
          <span>Toplam:</span>
          <span>
            ₺{cart.reduce((acc, item) => acc + item.count * item.product.price, 0).toFixed(2)}
          </span>
        </div>
      </div>
    );
  };

  export default ShoppingCartDropdown;
  
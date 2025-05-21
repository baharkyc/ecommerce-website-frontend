const OrderSuccessBox = ( {order} ) => {

    if (!order || !order.products) {
        return null;
      }

    console.log("order is", order);

    const totalItems = order.products.reduce((sum, p) => sum + p.count, 0);


    return (
        <div className="flex flex-col items-center bg-white p-8 border rounded-md md:w-[800px] border-light-gray-2 text-sm space-y-8 ">
    
          <div className="px-2 pt-2 text-2xl mb-4">
            <div className="font-bold text-md text-primary-color">
              Order Completed Successfully!
            </div>
          </div>
    
          <div className="px-2 space-y-4">
            <p><strong>Order Date : </strong> {new Date(order.order_date).toLocaleString()}</p>
            <p><strong>Total Price : </strong> {order.price} ₺</p>
            <p><strong>Shipping Address ID : </strong> {order.address_id}</p>
            <p><strong>Number of Items : </strong> {totalItems}</p>
          </div>
    
        
    
        </div>
      );
}

export default OrderSuccessBox;

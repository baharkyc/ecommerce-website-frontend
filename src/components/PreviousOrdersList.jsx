import React, { useState } from "react";

const PreviousOrdersList = ({ previousOrdersList }) => {


    if (!previousOrdersList || previousOrdersList.length === 0) {
        return (
            <div className="bg-white text-second-text-color py-32 text-center w-full text-sm font-semibold">
            You have no previous orders.
            </div>
        );
    }

  return (
    <div className="bg-white p-4 rounded-md md:w-[800px] text-sm space-y-6">
      <h2 className="text-text-color text-xl font-semibold">My Previous Orders</h2>

      {previousOrdersList
        .slice()
        .reverse()
        .map((order, index) => (
        
        <div
          key={order.id}
          className="border rounded-md p-4 bg-white shadow-sm space-y-4"
        >
            <div className="text-lg font-medium">Order #{order.id}</div>
            <div className="flex justify-between items-center text-second-text-color text-sm">
                Order Date: {new Date(order.order_date).toLocaleDateString()} -{" "}
                {new Date(order.order_date).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                })}

                <div className="flex flex-col gap-2 pr-8">
                    <div className="flex flex-row gap-2 justify-between">
                        <div className="">
                            Total :      
                        </div>
                        <div className="text-primary-color font-semibold">
                            {(order.price-49).toFixed(2)} ₺
                        </div>
                    </div>

                    
                    {order.price < 1000 && (
                        <div className="flex flex-row gap-2 justify-between">
                            <div className="">
                                Shipping :      
                            </div>
                            <div className="text-primary-color font-semibold">
                                49 ₺
                            </div>
                        </div>

                    )}
                </div>

                    
            </div>

          {order.products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row gap-4 items-center border rounded-md p-3"
            >
              <img
                src={product.images[0]?.url}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-md"
              />

              <div className="flex-1 flex flex-col items-start">
                <p className="font-bold text-text-color">{product.name}</p>
                <p className="text-second-text-color">{product.description}</p>
                <p className="text-sm text-gray-500 mt-1">Quantity: {product.count}</p>
              </div>

              <div className="text-primary-color font-semibold text-center w-24">
                ₺{(product.price * product.count).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PreviousOrdersList;

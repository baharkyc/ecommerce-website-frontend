import { useSelector } from "react-redux";
import ButtonMd from "./buttons/ButtonMd";
import { useState, useEffect } from "react";

const OrderSummaryBox = () => {

    const [freeShipping, setFreeShipping] = useState(false);
    const { cart } = useSelector(state => state.shoppingCart);

    const totalPrice = cart
        .filter((item) => item.checked)
        .reduce((acc, item) => acc + item.count * item.product.price, 0); 

    useEffect(() => {
        setFreeShipping(totalPrice >= 1000);
    }, [totalPrice]);

    const shippingFee = freeShipping || totalPrice === 0 ? 0 : 49;
    const sum = (totalPrice + shippingFee).toFixed(2);

    return(
        <div className="flex flex-col justify-between gap-8 pt-16">
            <div className="flex flex-col items-start text-text-color border p-4 bg-white shadow-md border-light-gray-2 rounded-md w-[300px]">
                <div className="text-lg">Order Summary</div>

                <div className="text-sm flex flex-row w-full justify-between pt-4">
                    <span>Products Total:</span>
                    <span className="font-semibold">{totalPrice.toFixed(2)} ₺</span>
                </div>

                {totalPrice > 0 && (
                    <div className="text-sm flex flex-row w-full justify-between pt-2">
                        <span>Shipping:</span>
                        <span className="font-semibold">{shippingFee} ₺</span>
                    </div>
                )}

                {freeShipping && (
                    <div className="text-sm flex flex-row w-full justify-between pt-2">
                        <span>Free Shipping above 1000₺</span>
                        <span className="font-bold text-orange-400">-49 ₺</span>
                    </div>
                )}

                <hr className="w-full border-text-color my-4 self-stretch" />

                <div className="text-sm flex flex-row w-full justify-between pt-2">
                    <span className="font-bold text-lg">Total:</span>
                    <span className="text-lg text-orange-400 font-bold">{sum} ₺</span>
                </div>
            </div>

            <div className="w-full">
                <ButtonMd isFilled={true}>
                    Complete Order!
                </ButtonMd>
            </div>
        </div>
    )
}

export default OrderSummaryBox;

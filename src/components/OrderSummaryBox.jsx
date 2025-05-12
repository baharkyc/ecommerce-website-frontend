import { ChevronRight } from "lucide-react";
import ButtonMd from "./buttons/ButtonMd";

const OrderSummaryBox = () => {
    return(
        <div className="flex flex-col justify-between gap-8">
            <div className="text-text-color text-xl border p-4 bg-white border-light-gray-2 rounded-md w-[300px] h-[300px]">
                Order Summary
            </div>
            <div className="w-full ">
                <ButtonMd isFilled={true}>
                    Complete Order!
                </ButtonMd>
            </div>
            
        </div>
        
    )
}

export default OrderSummaryBox;
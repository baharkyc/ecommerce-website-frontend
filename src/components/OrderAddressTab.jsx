import { useState } from "react";
import ButtonMd from "./buttons/ButtonMd";
import AddressForm from "./forms/AddressForm";

const OrderAddressTab = () => {

    const [showAddressForm, setShowAddressForm] = useState(false);

    return (
        <div className="bg-white p-4 border rounded-md md:w-[800px]  border-light-gray-2 text-sm space-y-4">
            Address
            <ButtonMd 
                onClick={() => setShowAddressForm(true)}>
                +
            </ButtonMd>
            
            {showAddressForm && (
                <div className="fixed inset-[-14px] z-50 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-[450px] max-w-lg relative">

                        {/* Close Button */}
                        <button
                        onClick={() => setShowAddressForm(false)}
                        className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
                        >
                        &times;
                        </button>

                        {/* Address Form */}
                        <AddressForm />
                    </div>
                </div>
            )}


        </div>
    )
}

export default OrderAddressTab;
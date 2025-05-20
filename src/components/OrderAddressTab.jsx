import { useEffect, useState } from "react";
import ButtonMd from "./buttons/ButtonMd";
import AddressForm from "./forms/AddressForm";
import AddressCard from "./cards/AddressCard";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedAddressId, setSelectedBillingAddressId } from "../store/actions/clientActions";

const OrderAddressTab = ({ addressList, onAddressSaved}) => {

    const [showAddressForm, setShowAddressForm] = useState(false);
    const [billingSameAsShipping, setBillingSameAsShipping] = useState(false);
    const [selectedAddressForEdit, setSelectedAddressForEdit] = useState(null);

    const hasAddresses = addressList && addressList.length > 0;

    const dispatch = useDispatch();

    const { selectedAddressId, selectedBillingAddressId } = useSelector(state => state.client);

    const handleAddressSelection = (addressId) => {

        dispatch(setSelectedAddressId(addressId));
        
        if(billingSameAsShipping) {
            dispatch(setSelectedBillingAddressId(addressId));
        }
    }

    const handleBillingAddressSelection = (billingAddressId) => {
        dispatch(setSelectedBillingAddressId(billingAddressId));
    }

    const handleBillingSameChange = () => {
        setBillingSameAsShipping(prev => !prev);
    };
    
    useEffect(() => {

        if (billingSameAsShipping) {
            dispatch(setSelectedBillingAddressId(selectedAddressId));
        } else {
            dispatch(setSelectedBillingAddressId(null));
        }

    }, [billingSameAsShipping, selectedAddressId, dispatch]);

    const handleAddressEdit = (address) => {
        setSelectedAddressForEdit(address);
        setShowAddressForm(true);
        console.log(address);
    }


    return (
        <div className="bg-white p-4 border rounded-md md:w-[800px] border-light-gray-2 text-sm space-y-4">

            {/* Shipping Addresses */}
            <div className="w-full flex justify-between px-2 pt-2 text-2xl mb-4">
                <div className="font-bold text-md">
                    Select Address
                </div>
                <div className="w-16">
                    <ButtonMd 
                        onClick={() => {
                            setShowAddressForm(true)
                            setSelectedAddressForEdit(null);}}>
                        +
                    </ButtonMd>
                </div>
                
            </div>

            {!hasAddresses && (
                <div className="text-second-text-color">Please Add an Address</div>
            )}

            {hasAddresses && (
                <div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {addressList.map((address) => (
                            <AddressCard
                                key={address.id}
                                name={"shipping address"}
                                address={address}
                                selectedAddressId={selectedAddressId}
                                onSelect={handleAddressSelection}
                                onEdit={handleAddressEdit}
                            />
                        ))}
                    </div>

                    {/* Checkbox: Billing same as Shipping */}
                    <label className="mb-4 flex items-center space-x-2 self-start cursor-pointer">
                        <input
                            type="checkbox"
                            checked={!!billingSameAsShipping}
                            onChange={handleBillingSameChange}
                            className="form-checkbox h-4 w-4 text-primary-color"
                        />
                        <span>Billing address is same as Shipping</span>
                    </label>

                </div>
            )}

            

            {/* Billing Addresses only if checkbox unchecked */}
            {!billingSameAsShipping && hasAddresses && (
                <div className="w-full mt-4">
                    <h3 className="mb-2 font-semibold">Billing Addresses</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {addressList.map((address) => (
                            <AddressCard
                                key={`billing-${address.id}`}
                                name={"billing address"}
                                address={address}
                                selectedAddressId={selectedBillingAddressId}
                                onSelect={handleBillingAddressSelection}
                                onEdit={handleAddressEdit}
                            />
                        ))}
                    </div>
                </div>
            )}

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
                        <AddressForm
                            initialValues={selectedAddressForEdit}
                            onSuccess={() => {
                                setShowAddressForm(false);
                                if (onAddressSaved) onAddressSaved();
                            }}
                        />
                    </div>
                </div>
            )}

        </div>
    )
}

export default OrderAddressTab;

import { useEffect, useState } from "react";
import OrderPaymentTab from "./OrderPaymentTab";
import OrderAddressTab from "./OrderAddressTab";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddresses, fetchCards } from "../store/actions/clientActions";

const CreateOrderDetailTabs = () => {

    const [selectedTab, setSelectedTab] = useState("address");
    
    const dispatch = useDispatch();
    const { addressList, creditCards, selectedAddressId, selectedCardId } = useSelector(state => state.client);

    useEffect(() => {

        dispatch(fetchAddresses());
        dispatch(fetchCards());

    }, []);

    const selectedAddress = addressList.find(item => item.id === selectedAddressId);
    const selectedCard = creditCards.find(item => item.id === selectedCardId);

    return (
        <div className="flex flex-col gap-y-8 ">

            {/* Tab Selection */}
            <div className="flex flex-row items-end justify-between  bg-white border border-light-gray-2 pt-4 gap-x-4 md:w-[800px] md:mt-16 rounded-md text-lg font-bold">
                <button
                    className={`text-start px-8 pb-20 w-full h-[50px] border-b-2 transition-all duration-200 ${
                        selectedTab === "address"
                            ? "border-b-orange-500 text-text-color"
                            : "border-b-transparent text-second-text-color opacity-70"
                    }`}
                    onClick={() => setSelectedTab("address")}>
                    Address

                    { /* Selected Address */}
                    <div className="text-sm font-normal pt-2">
                        {selectedAddress ? (
                            <>
                            {selectedAddress.name} {selectedAddress.surname},{" "}
                            {selectedAddress.city}
                            </>
                        ) : (
                            "No address selected"
                        )}
                    </div>
                    
                </button>
                
                <button
                    className={`text-start px-8 pb-20 w-full h-[50px] border-b-2 transition-all duration-200 ${
                        selectedTab === "payment"
                            ? "border-b-orange-500 text-text-color"
                            : "border-b-transparent text-second-text-color opacity-70"
                    }`}
                    onClick={() => setSelectedTab("payment")}>
                    Payment

                    { /* Selected Card */}
                    <div className="text-sm font-normal pt-2">
                        {selectedCard ? (
                            <>
                            Card #{selectedCard.id}
                            </>
                        ) : (
                            "No card selected"
                        )}
                    </div>
                </button>
            </div>

            {/* Tabs */}
            {selectedTab == "address" && (
                <OrderAddressTab 
                    addressList={addressList}
                />
            )}

            {selectedTab == "payment" && (
                <OrderPaymentTab
                    cardList={creditCards}/>
            )}
            
        </div>
    )
}

export default CreateOrderDetailTabs;
import { useState } from "react";

const CreateOrderDetailTabs = () => {

    const [selectedTab, setSelectedTab] = useState("address");

    return (
        <div className="flex flex-col gap-y-8">

            {/* Tab Selection */}
            <div className="flex flex-row items-end justify-between bg-white border border-light-gray-2 pt-4 gap-x-4 md:w-[800px] md:mt-16 rounded-md text-lg font-bold">
                <button
                    className={`w-full h-[50px] border-b-2 transition-all duration-200 pb-4 ${
                        selectedTab === "address"
                            ? "border-b-orange-500 text-text-color"
                            : "border-b-transparent text-second-text-color opacity-70"
                    }`}
                    onClick={() => setSelectedTab("address")}>
                    Address
                </button>
                <button
                    className={`w-full h-[50px] border-b-2 transition-all duration-200 pb-4 ${
                        selectedTab === "payment"
                            ? "border-b-orange-500 text-text-color"
                            : "border-b-transparent text-second-text-color opacity-70"
                    }`}
                    onClick={() => setSelectedTab("payment")}>
                    Payment
                </button>
            </div>

            {/* Tabs */}
            {selectedTab == "address" && (
                <div className="bg-white p-4 border rounded-md md:w-[800px] border-light-gray-2 text-sm space-y-4">
                    Adres
                </div>
            )}

            {selectedTab == "payment" && (
                <div className="bg-white p-4 srounded-md md:w-[800px] text-sm  space-y-4">
                    Ödeme
                </div>
            )}
            
        </div>
    )
}

export default CreateOrderDetailTabs;
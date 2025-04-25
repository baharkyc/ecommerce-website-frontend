import { useState } from "react";

const TabMenu = ({ activeTab, handleTabClick,reviews }) => {
    return (
        <div className="flex space-x-6 border-b justify-center border-gray-200 mb-6">
            <button
                className={`py-2 px-4 text-sm font-semibold ${
                    activeTab === "description" ? "border-b-2 border-second-text-color" : ""
                }`}
                onClick={() => handleTabClick("description")}
            >
                Description
            </button>
            <button
                className={`py-2 px-4 text-sm font-semibold ${
                    activeTab === "additionalInfo" ? "border-b-2 border-second-text-color" : ""
                }`}
                onClick={() => handleTabClick("additionalInfo")}
            >
                Additional Information
            </button>
            <button
                className={`py-2 px-4 text-sm font-semibold ${
                    activeTab === "reviews" ? "border-b-2 border-second-text-color" : ""
                }`}
                onClick={() => handleTabClick("reviews")}
            >
                Reviews {"(" + reviews.length + ")"}
            </button>
        </div>
    );
};

export default TabMenu;

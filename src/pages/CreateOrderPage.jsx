// CreateOrderPage.jsx
//
// Handles the order creation.
// Checks if all required details(adress, card, billing) are selected before creating the order.
// Displays order details and summary.

import { useSelector } from "react-redux";
import CreateOrderDetailTabs from "../components/CreateOrderDetailTabs";
import OrderSummaryBox from "../components/OrderSummaryBox";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import PageContent from "../layout/PageContent";
import { useEffect, useState } from "react";

const CreateOrderPage = () => {

    //Get necessary info from global store.
    const {selectedAddressId, selectedCardId, selectedBillingAddressId} = useSelector(state => state.client);
    const [ canOrder, setCanOrder ] = useState(false);

    //Check if all information selected to order properly
    useEffect(() => {
        const allSelected = selectedAddressId && selectedCardId && selectedBillingAddressId; 
        setCanOrder(allSelected);

    }, [selectedAddressId, selectedCardId, selectedBillingAddressId]);

    return (
        <div>
        <Header/>
        <PageContent>
            <div className="w-full flex flex-col items-center gap-x-4 md:flex-row md:gap-x-16 md:items-start md:justify-center p-4">
                <CreateOrderDetailTabs/>
                <OrderSummaryBox canOrder={canOrder}/>
            </div>
        </PageContent>
        <Footer/>
    </div>
    )
}

export default CreateOrderPage;
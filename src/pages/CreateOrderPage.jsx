import { useSelector } from "react-redux";
import CreateOrderDetailTabs from "../components/CreateOrderDetailTabs";
import OrderSummaryBox from "../components/OrderSummaryBox";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import PageContent from "../layout/PageContent";
import { useEffect, useState } from "react";

const CreateOrderPage = () => {

    const {selectedAddressId, selectedCardId, selectedBillingAddressId} = useSelector(state => state.client);
    const [ canOrder, setCanOrder ] = useState(false);

    useEffect(() => {

        const allSelected = selectedAddressId && selectedCardId && selectedBillingAddressId; //Is all information selected to order properly
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
import { useSelector } from "react-redux";
import OrderSuccessBox from "../components/OrderSuccessBox";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import PageContent from "../layout/PageContent";

const OrderSuccessPage = () => {

    const { pastOrders } = useSelector(state => state.client);

    const lastOrder = pastOrders[pastOrders.length - 1];

    return (
        <div>
        <Header/>
        <PageContent>
            <div className="w-full flex flex-col items-center gap-x-4 md:flex-row md:gap-x-16 md:items-start md:justify-center p-4">
                {lastOrder ? (
                    <OrderSuccessBox order={lastOrder} />
                ) : (
                    <div className="text-center text-gray-500">No order information available.</div>
                )}
      
            </div>
        </PageContent>
        <Footer/>
    </div>
    )
}

export default OrderSuccessPage;
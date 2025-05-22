import { useSelector } from "react-redux";
import OrderSuccessBox from "../components/OrderSuccessBox";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import PageContent from "../layout/PageContent";
import ButtonMd from "../components/buttons/ButtonMd";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Loading from "../components/Loading";  

const OrderSuccessPage = () => {

    const { lastOrder } = useSelector(state => state.client); 
    const { isLoading } = useSelector(state => state.global); 
    const history = useHistory();

    const handleMyOrdersButtonClick = () => {
        history.push("/previousOrders");
    }

    if (isLoading) {
        return (
            <div className="pt-64">
                <Loading />
            </div>
            
        ) 
    }

    return (
        <div>
            <Header/>
            <PageContent>
                <div className="w-full flex flex-col items-center gap-y-8 gap-x-4 md:gap-x-16 md:justify-center p-4">
                    {lastOrder ? (
                        <OrderSuccessBox order={lastOrder} />
                    ) : (
                        <div className="text-center text-gray-500 md:pt-32">No order information available.</div>
                    )}
                    <div className="w-48 pb-32">
                        <ButtonMd onClick={handleMyOrdersButtonClick}>
                            My Orders
                        </ButtonMd>
                    </div>
                </div>
            </PageContent>
            <Footer/>
        </div>
    )
}

export default OrderSuccessPage;

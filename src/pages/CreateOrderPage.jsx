import CreateOrderDetailTabs from "../components/CreateOrderDetailTabs";
import OrderSummaryBox from "../components/OrderSummaryBox";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import PageContent from "../layout/PageContent";

const CreateOrderPage = () => {

    return (
        <div>
        <Header/>
        <PageContent>
            <div className="w-full flex flex-col items-center gap-x-4 md:flex-row md:gap-x-16 md:items-start md:justify-center p-4">
                <CreateOrderDetailTabs/>
                <OrderSummaryBox/>
            </div>
        </PageContent>
        <Footer/>
    </div>
    )
}

export default CreateOrderPage;
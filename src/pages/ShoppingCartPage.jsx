import LoginForm from "../components/forms/LoginForm";
import OrderSummaryBox from "../components/OrderSummaryBox";
import ShoppingCartList from "../components/ShoppingCartList";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import PageContent from "../layout/PageContent";

const ShoppingCartPage = () => {

  return (
    <div>
        <Header/>
        <PageContent>
            <div className="w-full flex flex-row gap-x-16 items-start justify-center  p-4">
                <ShoppingCartList/>
                <OrderSummaryBox/>
            </div>
        </PageContent>
        <Footer/>
        
    </div>
  );
};

export default ShoppingCartPage;

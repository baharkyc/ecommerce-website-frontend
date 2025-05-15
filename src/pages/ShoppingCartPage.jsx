import { useSelector } from "react-redux";
import LoginForm from "../components/forms/LoginForm";
import OrderSummaryBox from "../components/OrderSummaryBox";
import ShoppingCartList from "../components/ShoppingCartList";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import PageContent from "../layout/PageContent";

const ShoppingCartPage = () => {

  const {cart} = useSelector(state => state.shoppingCart);



  return (
    <div>
        <Header/>
        <PageContent>
            <div className="w-full flex flex-col items-center gap-x-4 md:flex-row md:gap-x-16 md:items-start md:justify-center p-4">
                <ShoppingCartList/>
                {cart.length > 0 && (
                  <OrderSummaryBox/>
                )}
                
            </div>
        </PageContent>
        <Footer/>
        
    </div>
  );
};

export default ShoppingCartPage;


import { useDispatch, useSelector } from "react-redux";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import PageContent from "../layout/PageContent";
import { useEffect } from "react";
import { fetchPastOrders } from "../store/actions/clientActions";
import PreviousOrdersList from "../components/PreviousOrdersList";
import Loading from "../components/Loading";

const PreviousOrdersPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPastOrders());
        console.log(pastOrders)
    }, []);

    const { pastOrders } = useSelector(state => state.client);
    const { isLoading } = useSelector(state => state.global); 


    return (
        <div>
        <Header/>
        <PageContent>
            {isLoading && (
                <div className="pt-64">
                    <Loading />
                </div>
            )}
            <div className="w-full flex flex-col items-center pt-8">
                <PreviousOrdersList previousOrdersList={pastOrders}/>
            </div>
            
        </PageContent>
        <Footer/>
    </div>
    )
}

export default PreviousOrdersPage;
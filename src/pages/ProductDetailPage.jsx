import BestSellers from "../components/BestSellers";
import ProductDetailCard from "../components/cards/ProductDetailCard";
import Clients from "../components/banners/Clients";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import PageContent from "../layout/PageContent";
import clothes from "../data/clothes.json";
import ProductDetailPane from "../components/ProductDetailPane";
import Breadcrumb from "../components/menus/Breadcrumb";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/actions/productActions";
import Loading from "../components/Loading";
import { ChevronLeft } from "lucide-react";

const ProductDetailPage = () => {

    const { productId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, [productId]);

    const { selectedProduct } = useSelector(state => state.product);
    const { isLoading } = useSelector(state => state.global);

    const handleBackClick = () => {
        history.goBack();
    }

    if (isLoading || !selectedProduct) {
        return <Loading/>;
    }

    return (
        <div>
            <Header/>
            <PageContent>
                <Breadcrumb />
                { /* Back Button */}
                <button 
                    className="hidden fixed w-full xl:pl-16 pl-6 pt-8 lg:flex flex-row"
                    onClick={handleBackClick}
                    >
                        <ChevronLeft/>
                        Back
                </button>

                {selectedProduct ? (
                    <ProductDetailCard product={selectedProduct}/>
                ) : <Loading/>}
                
                <ProductDetailPane product={selectedProduct}/>
                <BestSellers/>
                <Clients/>
            </PageContent>
            <Footer/>
        </div>
        
    )
}

export default ProductDetailPage;
import BestSellers from "../components/BestSellers";
import ProductDetailCard from "../components/cards/ProductDetailCard";
import Clients from "../components/banners/Clients";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import PageContent from "../layout/PageContent";
import clothes from "../data/clothes.json";
import ProductDetailPane from "../components/ProductDetailPane";
import Breadcrumb from "../components/menus/Breadcrumb";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/actions/productActions";
import Loading from "../components/Loading";

const ProductDetailPage = () => {

    const { productId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, [productId]);

    const { selectedProduct } = useSelector(state => state.product);
    const { isLoading } = useSelector(state => state.global);

    if (isLoading) {
        return (<Loading/>);
    }

    return (
        <div>
            <Header/>
            <PageContent>
                <Breadcrumb />
                <ProductDetailCard product={selectedProduct}/>
                <ProductDetailPane/>
                <BestSellers/>
                <Clients/>
            </PageContent>
            <Footer/>
        </div>
        
    )
}

export default ProductDetailPage;
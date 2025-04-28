import BestSellers from "../components/BestSellers";
import ProductDetailCard from "../components/cards/ProductDetailCard";
import Clients from "../components/banners/Clients";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import PageContent from "../layout/PageContent";
import clothes from "../data/clothes.json";
import ProductDetailPane from "../components/ProductDetailPane";
import Breadcrumb from "../components/menus/Breadcrumb";

const ProductDetailPage = () => {

    return (
        <div>
            <Header/>
            <PageContent>
                <Breadcrumb />
                <ProductDetailCard product={clothes[7]}/>
                <ProductDetailPane/>
                <BestSellers/>
                <Clients/>
            </PageContent>
            <Footer/>
        </div>
        
    )
}

export default ProductDetailPage;
import PageContent from "../layout/PageContent";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Clients from "../components/banners/Clients";
import CategoryBanner from "../components/Banners/CategoryBanner";
import ListProducts from "../components/ListProducts"
import clothes from "../data/clothes.json"
import categories from "../data/categories.json"
import ProductFilterRow from "../components/ProductFilterRow";

const ShopPage = () => {

    return (
        <div >
            <Header/>
            <PageContent>
                <CategoryBanner/>
                <ProductFilterRow products={clothes} visibleProducts={12}/>
                <ListProducts products={clothes} category={categories[0]}/>
                <Clients/>
                
            </PageContent> 
            <Footer/>
        </div>
    )
}

export default ShopPage;
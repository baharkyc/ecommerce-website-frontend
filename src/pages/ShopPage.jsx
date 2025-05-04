import PageContent from "../layout/PageContent";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Clients from "../components/banners/Clients";
import CategoryBanner from "../components/banners/CategoryBanner";
import ListProducts from "../components/ListProducts"
import clothes from "../data/clothes.json"
import categories from "../data/categories.json"
import ProductFilterRow from "../components/ProductFilterRow";
import Breadcrumb from "../components/menus/Breadcrumb";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/productActions";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


const ShopPage = () => {

    const { gender, categoryPath, categoryId } = useParams(); //get URL parameters to fetch products based on selected category.

    const [viewMode, setViewMode] = useState("grid");
    const [ sort, setSort ] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts(categoryId, sort));
    }, [categoryId, sort]);

    const productList = useSelector((state) => state.product.productList);
    const isLoading = useSelector((state) => state.global.isLoading);


    return (
        <div>
            <Header />
            <PageContent>
                <Breadcrumb/>
                <CategoryBanner />
                <ProductFilterRow
                    onViewChange={(mode) => setViewMode(mode)}
                    onSortChange={(newSort) => setSort(newSort)}
                />
                {isLoading ? (
                    <Loading />
                ) : (
                    <ListProducts
                        products={productList}
                        viewMode={viewMode}
                />)
                }
                <Clients />
            </PageContent>
            <Footer />
        </div>
    );
};


export default ShopPage;

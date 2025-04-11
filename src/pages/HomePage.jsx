import Hero from "../components/Hero.jsx";
import ProductCard from "../components/ProductCard.jsx";
import ShopCard from "../components/ShopCard.jsx";
import Header from "../layout/Header.jsx";
import PageContent from "../layout/PageContent.jsx";
import Clients from "../components/Clients.jsx";
import CallToAction from "../components/CallToAction.jsx";
import Features from "../components/Features.jsx";
import Blog from "../components/Blog.jsx";
import Footer from "../layout/Footer.jsx";
import CategoryPick from "../components/CategoryPick.jsx";

const HomePage = () => {

    return (
        <div className="">
            <Header/>
            <PageContent>
                <Hero/>
                <Clients/>
                <CategoryPick/>
                <ProductCard/>
                <CallToAction/>
                <Features/>
                <Blog/>
            </PageContent> 
            <Footer/>
         
        </div>
    )
}

export default HomePage;
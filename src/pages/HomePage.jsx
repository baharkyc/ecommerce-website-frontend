import Hero from "../components/Hero.jsx";
import Header from "../layout/Header.jsx";
import PageContent from "../layout/PageContent.jsx";
import Clients from "../components/banners/Clients.jsx";
import ClickToAction from "../components/banners/ClickToAction.jsx";
import Features from "../components/banners/Features.jsx";
import Blog from "../components/banners/Blog.jsx";
import Footer from "../layout/Footer.jsx";
import CategoryPick from "../components/CategoryPick.jsx";
import BestSellers from "../components/BestSellers.jsx"


const HomePage = () => {

    return (
        <div className="">
            <Header/>
            <PageContent>
                <Hero/>
                <CategoryPick/>
                <Clients/>
                <BestSellers/>
                <ClickToAction/>
                <Features/>
                <Blog/>
            </PageContent> 
            <Footer/>
         
        </div>
    )
}

export default HomePage;
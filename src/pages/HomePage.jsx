import Hero from "../components/Hero.jsx";
import Header from "../layout/Header.jsx";
import PageContent from "../layout/PageContent.jsx";
import Clients from "../components/Clients.jsx";
import ClickToAction from "../components/ClickToAction.jsx";
import Features from "../components/Features.jsx";
import Blog from "../components/Blog.jsx";
import Footer from "../layout/Footer.jsx";
import CategoryPick from "../components/CategoryPick.jsx";
import BestSellers from "../components/BestSellers.jsx"

const HomePage = () => {

    return (
        <div className="">
            <Header/>
            <PageContent>
                <Hero/>
                <Clients/>
                <CategoryPick/>
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
import AboutBanner from "../components/banners/AboutBanner";
import QuoteBanner from "../components/banners/QuoteBanner";
import Breadcrumb from "../components/menus/Breadcrumb";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import PageContent from "../layout/PageContent";
import Stats from "../components/banners/Stats";
import ClickToActionGradient from "../components/banners/ClickToActionGradient";
import Clients from "../components/banners/Clients";

const AboutPage = () => {

    return (
        <div>
            <Header/>
            <PageContent>
                <Breadcrumb />
                <AboutBanner />
                <QuoteBanner 
                    header={"Define your style. Own your story."} 
                    quote={"Style is a way to say who you are without having to speak."} 
                    description={"Fashion isn't just about what you wear — it's about expressing your identity, your mood, and your values. Discover pieces that speak for you."}
                />
                <Stats/>
                <ClickToActionGradient/>
                <Clients/>
            </PageContent>
            <Footer/>
        </div>
    )
}
export default AboutPage;
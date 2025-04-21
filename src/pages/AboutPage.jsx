import Breadcrumb from "../components/menus/Breadcrumb";
import Footer from "../layout/Footer"
import Header from "../layout/Header"
import PageContent from "../layout/PageContent";

const AboutPage = () => {

    return (
        <div>
            <Header/>
            <PageContent>
                <Breadcrumb />
            </PageContent>
            <Footer/>
        </div>
    )
}
export default AboutPage;
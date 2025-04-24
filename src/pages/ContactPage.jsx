import ContactBanner from "../components/banners/ContactBanner"
import Breadcrumb from "../components/menus/Breadcrumb"
import Footer from "../layout/Footer"
import Header from "../layout/Header"
import PageContent from "../layout/PageContent"

const ContactPage = () => {
    return (
        <div>
            <Header/>
            <PageContent>
                <ContactBanner/>
            </PageContent>
            <Footer/>
        </div>
    )
}
export default ContactPage;
// ContactPage.jsx
//
// Displays the contact page layout.
// Composed of Header, main content (ContactBanner), and Footer.

import ContactBanner from "../components/banners/ContactBanner"
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
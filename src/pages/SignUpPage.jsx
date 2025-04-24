import SignUpForm from "../components/forms/SignUpForm";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import PageContent from "../layout/PageContent";

const SignUpPage = () => {

  return (
    <div>
        <Header/>
        <PageContent>
            <SignUpForm/>
        </PageContent>
        <Footer/>
        
    </div>
  );
};

export default SignUpPage;

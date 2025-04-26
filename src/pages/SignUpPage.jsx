import SignUpForm from "../components/forms/SignUpForm";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import PageContent from "../layout/PageContent";

const SignUpPage = () => {

  return (
    <div>
        <Header/>
        <PageContent>
          <div className="h-full w-full flex items-center justify-center bg-gray-50 py-8">
            <SignUpForm/>
          </div>
        </PageContent>
        <Footer/>
        
    </div>
  );
};

export default SignUpPage;

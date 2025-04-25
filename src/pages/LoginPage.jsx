import LoginForm from "../components/forms/LoginForm";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import PageContent from "../layout/PageContent";

const LoginPage = () => {

  return (
    <div>
        <Header/>
        <PageContent>
            <div className="h-[600px] w-full flex items-center justify-center bg-gray-50 p-4">
              <LoginForm/>
            </div>
        </PageContent>
        <Footer/>
        
    </div>
  );
};

export default LoginPage;

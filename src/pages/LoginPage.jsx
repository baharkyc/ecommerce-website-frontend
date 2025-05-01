import LoginForm from "../components/forms/LoginForm";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import PageContent from "../layout/PageContent";

const LoginPage = () => {

  return (
    <div>
        <Header/>
        <PageContent>
            <div className="w-full h-[500px] flex items-center justify-center  p-4">
              <div className="w-[400px]">
                <LoginForm/>  
              </div>
            </div>
        </PageContent>
        <Footer/>
        
    </div>
  );
};

export default LoginPage;

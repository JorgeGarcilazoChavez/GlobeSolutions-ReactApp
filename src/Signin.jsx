import { SignInContent, SignUpContent } from './signInContent';
import Footer from './footer'
import Header from './header'
import NavBar from './navigation'

function SignIn() {
  return (
   <div className="min-h-screen flex flex-col">
    <Header/>
    <NavBar/>
    <div className="flex-grow">
    <SignInContent />
    </div>
    <Footer/>
    </div>
  );
};

function SignUp(){
  return (
    <div className="min-h-screen flex flex-col">
    <Header/>
    <NavBar/>
    <div className="flex-grow">
    <SignUpContent />
    </div>
    <Footer/>
    </div>
  );
};

export {SignIn, SignUp};
import AboutContent from './aboutContent';
import Footer from './footer'
import Header from './header'
import NavBar from './navigation'

function About() {
  return (
    <div className="min-h-screen flex flex-col">
    <Header/>
    <NavBar/>
    <div className="flex-grow">
    <AboutContent />
    </div>
    <Footer/>
    </div>
  );
};

export default About;
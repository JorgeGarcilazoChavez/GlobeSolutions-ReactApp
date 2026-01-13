import ImageReel from './imageReel'
import Footer from './footer'
import Header from './header'
import NavBar from './navigation'

function App() {
  return (
   <div className="min-h-screen flex flex-col">
    <Header/>
    <NavBar/>
    <div className="flex-grow">
    <ImageReel />
    </div>
    <Footer/>
    </div>
  );
};

export default App;

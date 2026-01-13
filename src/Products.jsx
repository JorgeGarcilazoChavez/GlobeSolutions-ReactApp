import Footer from './footer'
import Header from './header'
import NavBar from './navigation'
import ProductsContent from './productsContent';

function Products() {
  return (
    <div className="min-h-screen flex flex-col">
    <Header/>
    <NavBar/>
    <div className="flex-grow">
    <ProductsContent />
    </div>
    <Footer/>
    </div>
  );
};

export default Products;
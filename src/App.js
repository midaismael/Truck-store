import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './Component/Nav';
import Carousels from './Component/Carousel';
import Featured from './Component/Featured';
import Sale from './Component/Sale';
import Footer from './Component/Footer';

function App() {
  return (
    <>
    <Navbar1 />
    <Carousels />
    <Featured />
    <Sale />
    <Footer />
    </>
  );
}

export default App;

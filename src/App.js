import Home from './components/Home/Home';
import {Routes, Route} from "react-router-dom";
import TOS from './components/TermOfUse/TermofUse';
import About from './components/About/About';
import Leadership from './components/Leadership/Leadership';
import Platform from './components/Platform/Platform';
import Accessibility from './components/Accessibility/Accessibility';
import Privacy from './components/Privacy Policy/Privacy';
import Sustainability from './components/Sustainability/Sustainability';
import Charter from './components/Policies and charter/Charter';
import Vision from './components/Vision Mision/vision';
import Policy from './components/Policies and charter/Charter';
import Contact from './components/Contact/Contact';
import Overview from './components/Overview/Overview';
import Login from './components/Login/Login';
import Customer from './components/Customer/Customer';
import Art from './pages/Subpages/GraphicDesign/Art';
import Cosmic from './pages/Subpages/GraphicDesign/Cosmic';
import Doodle from './pages/Subpages/GraphicDesign/Doodle';
import Brochure from './pages/Subpages/GraphicDesign/Brochure';
import Arch from './pages/Subpages/GraphicDesign/Arch';
import Apparel from './pages/Subpages/GraphicDesign/Apparel';
import Twod from './pages/Subpages/Cinematography/Twod';
import Instructional from './pages/Subpages/Cinematography/Instructional';
import Corporate from './pages/Subpages/Cinematography/Corporate';
import AppPromo from './pages/Subpages/Cinematography/AppPromo';
import Logo from './pages/Subpages/Cinematography/Logo';
import Product from './pages/Subpages/Photography/Product';
import Portrait from './pages/Subpages/Photography/Portrait';
import Events from './pages/Subpages/Photography/Events';
import Fashion from './pages/Subpages/Photography/Fashion';
import PhotoEdit from './pages/Subpages/Photography/PhotoEdit';
import Blogs from './pages/Subpages/ContentWriting/Blogs';
import Website from './pages/Subpages/ContentWriting/Website';
import ProductDesc from './pages/Subpages/ContentWriting/Product';
import Social from './pages/Subpages/ContentWriting/Social';
import Copy from './pages/Subpages/ContentWriting/Copy';
import Book from './pages/Subpages/ContentWriting/Book';
import Film from './pages/Subpages/SpaceAndStudio/Film';
import Recording from './pages/Subpages/SpaceAndStudio/Recording';
import Mastering from './pages/Subpages/SpaceAndStudio/Mastering';
import Radio from './pages/Subpages/SpaceAndStudio/Radio';
import Television from './pages/Subpages/SpaceAndStudio/Television';
import Styling from './pages/Subpages/SpaceAndStudio/Styling';
import ForCreators from './components/ForCreators/ForCreators';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/art' element={<Art />} />
        <Route path='/cosmic' element={<Cosmic />} />
        <Route path='/doodle' element={<Doodle />} />
        <Route path='/brochure' element={<Brochure />} />
        <Route path='/architecture' element={<Arch />} />
        <Route path='/apparel' element={<Apparel />} />
        <Route path='/twod' element={<Twod />} />
        <Route path='/instructional' element={<Instructional />} />
        <Route path='/corporate' element={<Corporate />} />
        <Route path='/' element={<AppPromo />} />
        <Route path='/logo' element={<Logo />} />
        <Route path='/product' element={<Product />} />
        <Route path='/portrait' element={<Portrait />} />
        <Route path='/events' element={<Events />} />
        <Route path='/fashion' element={<Fashion />} />
        <Route path='/photoedit' element={<PhotoEdit />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/website' element={<Website />} />
        <Route path='/productdesc' element={<ProductDesc />} />
        <Route path='/social' element={<Social />} />
        <Route path='/copy' element={<Copy />} />
        <Route path='/book' element={<Book />} />
        <Route path='/film' element={<Film />} />
        <Route path='/recording' element={<Recording />} />
        <Route path='/mastering' element={<Mastering />} />
        <Route path='/radio' element={<Radio />} />
        <Route path='/television' element={<Television />} />
        <Route path='/styling' element={<Styling />} />
        <Route path='/tos' element={<TOS />} />
        <Route path='/about' element={<About />} />
        <Route path='/platform' element={<Platform />} />
        <Route path='/access' element={<Accessibility />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/sustain' element={<Sustainability />} />
        <Route path='/charter' element={<Charter />} />
        <Route path='/vision' element={<Vision />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/leadership' element={<Leadership />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/customer' element={<Customer />} />
        <Route path='/forcreators' element={<ForCreators />} />
        <Route path='/login' element={<Login />} />
    </Routes>
    </div>
  );
}

export default App;
import './App.css';
import SiteNavbar from "./components/SiteNavbar";
import NewsApp from "./components/NewsApp";
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'
import NotFoundPage from './Pages/NotFoundPage'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

function App(){
  return(
 <div className="appShell">
<SiteNavbar/>
<Routes>
  <Route path="/" element={<HomePage />}/>
  <Route path="/news" element={<NewsApp />}/>
  <Route path="/about" element={<AboutPage />}/>
  <Route path="/contact" element={<ContactPage />}/>
  <Route path="*" element={<NotFoundPage />}/>
</Routes>
<Footer/>
 </div>
  );
}
export default App;
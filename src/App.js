import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavigationBar from '././components/NavigationBar';
import HeroSection from './components/heroSection/HeroSection'
import ContactForm from './components/contactForm/ContactForm';
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route exact path='/' element={<HeroSection />}></Route>
        <Route exact path='/contact' element={<ContactForm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import HeroSection from './components/heroSection/HeroSection'
import ContactForm from './components/contactForm/ContactForm';
function App() {
  return (
    <Router>
      <div className="App">
      </div>
      <Routes>
        <Route exact path='/' element={<HeroSection />}></Route>
        <Route exact path='/contact' element={<ContactForm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

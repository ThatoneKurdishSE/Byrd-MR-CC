import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import HeroSection from './components/heroSection/HeroSection'
function App() {
  return (
    <Router>
      <div className="App">
      </div>
      <Routes>
        <Route exact path='/' element={<HeroSection />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

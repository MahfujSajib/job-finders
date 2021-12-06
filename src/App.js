import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/AboutUS/AboutUS';
import FindJobs from './components/FindJobs/FindJobs'
import Header from './components/Header/Header';
import Feedback from './components/FeedBack/Feedback';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';
import Company from './components/Company/Company';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/findjob" element={<FindJobs />} />
        <Route path="/company" element={<Company />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

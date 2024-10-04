import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropertyPage from './screens/PropertyPage';
import Index from './screens/Index';
import Listing from './screens/Listing';
import BiddingPage from './screens/BiddingPage';
import SignUp from './components/SignUp/SignUp';
import Login from './components/LoginComponents/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/property" element={<PropertyPage />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/bidding" element={<BiddingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;

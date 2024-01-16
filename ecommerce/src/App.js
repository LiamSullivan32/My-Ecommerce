import logo from './logo.svg';
import './App.css';
import ShopPage from './Shop/Shop';
import HomePage from './Homepage/Homepage';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
                // Other routes...
      </Routes>
    </Router>
  );

}

export default App;

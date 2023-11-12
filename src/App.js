import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './compenants/Nav';
import Calculatrice  from './compenants/Calculatrice'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Calculatrice />} />
          <Route path="/Calculatrice" element={<Calculatrice />} />
          {/* You can define more routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

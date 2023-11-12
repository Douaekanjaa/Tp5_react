import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './compenants/Nav';
import Calculatrice from './compenants/Calculatrice';
import TodoList from './compenants/TodoList';
import Weather from './compenants/weather';
import Slider from './compenants/Slider';
import ErrorComponent from './compenants/ErrorComponent'; // Assuming you have an ErrorComponent

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/Calculatrice" element={<Calculatrice />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

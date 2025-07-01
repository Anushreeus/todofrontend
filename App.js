import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './Todo';
import Signup from './Signup';
import Login from './Login';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

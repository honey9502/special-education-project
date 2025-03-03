import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import UserList from './pages/UserList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main style={{ padding: '0 1rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
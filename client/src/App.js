import './App.css';

import { useState } from 'react';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { CreateFile } from './components/CreateFile/CreateFile';
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-file' element={<CreateFile />} />
      </Routes>
    </div>
  );
}

export default App;

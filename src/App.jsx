import React from 'react';
import Register from './auth/Registration';
import {Routes, Route, Link} from 'react-router-dom'
function App() {
  return (
    <>
      <header className="App">
        <Link to="/reg">Sign up</Link>
      </header>
      <Routes>
        <Route path='/reg' element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
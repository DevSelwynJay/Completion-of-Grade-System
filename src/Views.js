import {  Route, Routes } from 'react-router-dom';
import Registration from './pages/Registration';
import Login from './pages/Login';

function Views() {
  return (
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/login" element={<Login/>}/>
      </Routes>
  );
}

export default Views;

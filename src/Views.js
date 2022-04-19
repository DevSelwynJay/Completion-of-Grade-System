import {  Route, Routes } from 'react-router-dom';
import Registration from './pages/Registration';
import Login from './pages/Login';
import DashboardAdmin from './pages/DashboardAdmin';
import DashboardFaculty from './pages/DashboardFaculty';
import DashboardStudent from './pages/DashboardStudent';

function Views() {
  return (
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard-admin" element={<DashboardAdmin/>}/>
          <Route path="/dashboard-faculty" element={<DashboardFaculty/>}/>
          <Route path="/dashboard-student" element={<DashboardStudent/>}/>
      </Routes>
  );
}

export default Views;

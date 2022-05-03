import {  Route, Routes } from 'react-router-dom';
import Registration from './pages/Registration';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import StudentDashboard from './pages/StudentDashboard';
import StudentAccountSettings from './pages/StudentAccountSettings';
import StudentPreviousRequests from './pages/StudentPreviousRequests';
import FacultyAccountSettings from './pages/FacultyAccountSettings';
import FacultApprovedTracker from './pages/FacultApprovedTracker';
import FacultyRejectedTracker from './pages/FacultyRejectedTracker';

function Views() {
  return (
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="admin/dashboard" element={<AdminDashboard/>}/>
          <Route path="faculty/dashboard" element={<FacultyDashboard/>}/>
          <Route path="faculty/account-settings" element={<FacultyAccountSettings/>}/>
          <Route path="faculty/approved-tracker" element={<FacultApprovedTracker/>}/>
          <Route path="faculty/rejected-tracker" element={<FacultyRejectedTracker/>}/>
          <Route path="student/dashboard" element={<StudentDashboard/>}/>
          <Route path="student/account-settings" element={<StudentAccountSettings/>}/>
          <Route path="student/student-previous-requests" element={<StudentPreviousRequests/>}/>
      </Routes>
  );
}

export default Views;

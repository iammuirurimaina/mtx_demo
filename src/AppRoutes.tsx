import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Login from './components/Login';
import Overview from './components/Overview';
import Trends from './components/Trends';
import MatXAI from './components/MatXAI';
import Locations from './components/Locations';
import Notifications from './components/Notifications';
import Settings from './components/Settings';
import Logout from './components/Logout';
import Authentication from './components/Login/Autrhenitication';


function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      <Route path="/auth" element={<Authentication />} />
      
      <Route element={<Layout />}>
      <Route path="/" element={<Overview />} />
        <Route path="/trends" element={<Trends />} />
        <Route path="/matx-ai" element={<MatXAI />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
      
      </Route>
    </Routes>
  );
}

export default AppRoutes;
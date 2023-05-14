import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import LoginPage from './components/LoginPage';
import SensorSet from './routes/SensorSet/SensorSet'
import AddSensor from './routes/SensorSet/AddSensor'
import EditSensor from './routes/SensorSet/EditSensor'
import DeviceStatus from './routes/DeviceStatus/DeviceStatus'
import SimulationPage from './routes/UserPage/SimulationPage';
import PasswordSet from './routes/PasswordSet/PasswordSet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Sidebar />
            <Routes>
                <Route path="LoginPage" element={<LoginPage/>}/>
                <Route path="SensorSet" element={<SensorSet/>}/>
                <Route path="SensorSet/AddSensor" element={<AddSensor/>}/>
                <Route path="SensorSet/EditSensor" element={<EditSensor/>}/>
                <Route path="DeviceStatus" element={<DeviceStatus/>}/>
                <Route path="UserPage/SimulationPage" element={<SimulationPage/>}/>
                <Route path="PasswordSet/PasswordSet" element={<PasswordSet/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
reportWebVitals();

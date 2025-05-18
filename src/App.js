import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './public/pages/Dashboard';
import Login from './public/pages/Login';
import ForgotPass from './public/pages/ForgotPass';
import AuthLayout from './components/AuthLayout';
import './App.css';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<Login />} />
                    <Route path="forgot-pass" element={<ForgotPass />} />
                </Route>
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}
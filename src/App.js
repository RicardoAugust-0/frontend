import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import Dashboard from './public/pages/Dashboard';
import Login from './public/pages/Login';
import ForgotPass from './public/pages/ForgotPass';
import AuthLayout from './components/AuthLayout';
import Usuarios from './public/pages/Usuarios';
import Animais from './public/pages/Animais';
import Vacinas from './public/pages/Vacinas';
import Aplicacoes from './public/pages/Aplicacoes';
import MeuPerfil from './public/pages/MeuPerfil';
import './App.css';

export default function App() {
    return (
        <BrowserRouter>
                <Analytics mode='auto'/>
                <SpeedInsights />
            <Routes>
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<Login />} />
                    <Route path="forgot-pass" element={<ForgotPass />} />
                </Route>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/usuarios" element={<Usuarios />} />
                <Route path="/animais" element={<Animais />} />
                <Route path="/vacinas" element={<Vacinas />} />
                <Route path="/aplicacoes" element={<Aplicacoes />} />
                <Route path="/meu-perfil" element={<MeuPerfil />} />
            </Routes>
        </BrowserRouter>
    );
}
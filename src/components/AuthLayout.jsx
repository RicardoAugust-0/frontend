import BackgroundVideo from '../components/BackgroundVideo';
import { Outlet, useLocation } from 'react-router-dom';
import PageLoader from './PageLoader';
import React, { useEffect, useState } from 'react';

function AuthLayout() {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 500); // tempo mínimo para o loading aparecer
        return () => clearTimeout(timeout);
    }, [location]);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">
            <BackgroundVideo />
            {loading && <PageLoader />}
            {/* Conteúdo das páginas de autenticação */}
            <div className="relative z-30 flex justify-center items-center h-full">
                <Outlet /> {/* O Outlet renderiza o componente da rota correspondente */}
            </div>
        </div>
    );
}

export default AuthLayout;
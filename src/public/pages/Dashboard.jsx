// public/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Sidebar from '../../components/Sidebar';
import PageLoader from '../../components/PageLoader';

function Dashboard() {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        setShowContent(false);
        const timeout = setTimeout(() => {
            setLoading(false);
            setTimeout(() => setShowContent(true), 100); // pequeno delay para animação
        }, 700); // tempo do loading
        return () => clearTimeout(timeout);
    }, [location]);

    const handleSidebarToggle = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    return (
        <div>
            {loading && <PageLoader />}
            <Helmet>
                <title>Moovox | Dashboard</title>
                <meta name='description' content='Moovox Dashboard' />
            </Helmet>
            <div className="flex bg-gray-100">
                <Sidebar onToggle={handleSidebarToggle} isExpanded={isSidebarExpanded} showContent={showContent} />
                <main
                    className={`flex-grow p-4 bg-amber-200 transition-all duration-300 ease-in-out
                        ${isSidebarExpanded ? 'pl-72' : 'pl-16'}
                        lg:pl-72`}
                >
                    {/* Animação de entrada dos elementos principais */}
                    <div className={`transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h2 className="mb-4 text-gray-800 font-bold">Painel do Administrador</h2>
                        <div>
                            <p className="text-gray-800">Conteúdo principal do Dashboard aqui...</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
// public/pages/Dashboard.jsx
import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';

function Dashboard() {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    return (
        <div className="flex bg-gray-100">
            <Sidebar onToggle={handleSidebarToggle} isExpanded={isSidebarExpanded} />
            <main
                className={`flex-grow p-4 bg-amber-200 transition-all duration-300 ease-in-out ${
                    isSidebarExpanded ? 'pl-72' : 'pl-16'
                }`}
            >
                <h2 className="mb-4 text-gray-800 font-bold">Painel do Administrador</h2>
                {/* Conteúdo principal do Dashboard */}
                <div>
                    <p className="text-gray-800">Conteúdo principal do Dashboard aqui...</p>
                    
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
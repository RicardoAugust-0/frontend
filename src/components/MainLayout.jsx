import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';

/**
 * Layout principal com sidebar e loader
 * @param {{ title?: string, description?: string, children?: React.ReactNode }} props
 */

function MainLayout({ title, description, children }) {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setShowContent(false);
        const timeout = setTimeout(() => setShowContent(true), 100);
        return () => clearTimeout(timeout);
    }, [location]);

    return (
        <div
            className="flex bg-gray-100 min-h-screen"
            style={showContent ? {
                backgroundImage: "url('/imgs/wood-texture.webp')",
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto'
            } : {}}
        >
            <Sidebar onToggle={() => setIsSidebarExpanded(!isSidebarExpanded)} isExpanded={isSidebarExpanded} showContent={showContent} />
            <main className="flex-grow p-4 bg-white/80 transition-all duration-200 ease-in-out">
                <header className={`mb-6 flex items-center gap-4 border-b-2 border-[#e5d3b3] pb-4 relative transition-all duration-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <img src="/imgs/logo-moovox-redimensionado.png" alt="Logo Moovox" className="w-12 h-12 ml-12 object-contain drop-shadow-md bg-[#f9e7c2] rounded-full border border-[#bfa77a]" />
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#7c5a3a] font-poppins tracking-tight drop-shadow-sm">{title}</h2>
                        {description && <p className="text-sm text-[#a97c50] font-poppins mt-1">{description}</p>}
                    </div>
                    <div className="absolute right-0 top-0 flex items-center gap-2">
                        {/* Espaço para ações futuras, como botões ou avatar */}
                    </div>
                </header>
                <div className={`transition-all duration-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {children}
                </div>
            </main>
        </div>
    );
}

MainLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

MainLayout.defaultProps = {
  title: '',
  description: '',
};

export default MainLayout;

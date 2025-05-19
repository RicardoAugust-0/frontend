import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import PageLoader from './PageLoader';

/**
 * Layout principal com sidebar e loader
 * @param {{ title?: string, description?: string, children?: React.ReactNode }} props
 */

function MainLayout({ title, description, children }) {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        setShowContent(false);
        const timeout = setTimeout(() => {
            setLoading(false);
            setTimeout(() => setShowContent(true), 100);
        }, 700);
        return () => clearTimeout(timeout);
    }, [location]);

    return (
        <div className="flex bg-gray-100 min-h-screen">
            {loading && <PageLoader />}
            <Sidebar onToggle={() => setIsSidebarExpanded(!isSidebarExpanded)} isExpanded={isSidebarExpanded} showContent={showContent} />
            <main className={`flex-grow p-4 bg-white transition-all duration-300 ease-in-out ${isSidebarExpanded ? 'pl-72' : 'pl-16'} lg:pl-72`}>
                <h2 className={`mb-4 text-gray-800 font-bold transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{title}</h2>
                <div className={`transition-all duration-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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

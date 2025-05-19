// src/components/Sidebar.jsx
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    Droplets,
    Package,
    User,
    ArrowLeftFromLine,
    Icon,
    Menu
} from 'lucide-react';
import { cowHead } from '@lucide/lab';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

/**
 * Sidebar de navegação principal
 * @param {{ onToggle?: () => void, isExpanded?: boolean, showContent?: boolean }} props
 */
function Sidebar({ onToggle, isExpanded, showContent }) {
    const isDesktop = useIsDesktop();
    const expanded = isDesktop ? true : isExpanded;
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    // Classes calculadas
    const asideBase = 'relative bg-[#4e2e13]/95 text-[#fff8f0] min-h-screen flex flex-col shadow-lg border-r-2 border-[#bfa77a] top-0 left-0 z-40 transition-all duration-300 ease-in-out';
    const asideExpanded = expanded ? 'translate-x-0 w-64' : '-translate-x-0 w-0';
    const asideDesktop = 'lg:translate-x-0 lg:w-64';
    const asideShowContent = isDesktop ? (showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8') : '';
    const asidePointer = !expanded && !isDesktop ? 'pointer-events-none select-none' : '';
    const asideClass = `${asideBase} ${asideExpanded} ${asideDesktop} transition-all duration-700 ${asideShowContent} ${asidePointer}`;

    // Função para sair
    function handleLogout() {
        setOpen(false);
        navigate('/');
    }

    return (
        <>
            {/* Overlay escuro ao abrir a sidebar no mobile */}
            {!isDesktop && expanded && (
                <div
                    className="fixed inset-0 bg-black/40 z-30 transition-opacity duration-300"
                    onClick={onToggle}
                    tabIndex={0}
                    role="button"
                    aria-label="Fechar menu lateral"
                />
            )}

            {/* Botão de menu (mobile) */}
            <button
                onClick={onToggle}
                aria-label="Abrir menu lateral"
                className="bg-gradient-to-br from-[#bfa77a] via-[#f9e7c2] to-[#a97c50] text-[#7c5a3a] p-2 rounded-xl shadow-lg fixed top-4 left-4 z-50 block lg:hidden active:scale-90 transition-transform duration-150 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#bfa77a]"
                style={{ boxShadow: '0 2px 8px 0 #bfa77a55' }}
            >
                <Menu className="w-7 h-7" />
            </button>

            {/* Sidebar */}
            <motion.aside
                className={asideClass}
                style={{
                    willChange: 'transform, width',
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'auto',
                    boxShadow: '2px 0 12px 0 #bfa77a'
                }}
                initial={{ x: isDesktop ? 0 : -300, opacity: 0 }}
                animate={{ x: expanded ? 0 : -300, opacity: expanded ? 1 : 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 20, duration: 0.5 }}
            >
                {/* Overlay bege translúcido */}
                <div className="absolute inset-0 bg-[#4e2e13]/80 pointer-events-none z-0" />

                {/* Logo */}
                <div className={`relative z-10 p-4 flex items-center justify-center ${!expanded && !isDesktop ? 'hidden' : ''} ${!isDesktop ? 'mt-4 ml-12' : ''}`}>
                    <Link to="/dashboard" className="flex items-center text-xl font-bold text-[#fff8f0]">
                        <Icon iconNode={cowHead} className="h-8 w-8 transition-opacity duration-300 opacity-100 text-[#ffe6c7] drop-shadow" />
                        <span className={`ml-2 transition-opacity duration-300 font-poppins tracking-wide ${expanded ? 'opacity-100' : 'opacity-0'} lg:opacity-100 text-[#fff8f0]`}>Moovox</span>
                    </Link>
                </div>

                {/* Navegação */}
                <nav className={`relative z-10 mt-6 flex flex-col gap-0 ${!expanded && !isDesktop ? 'hidden' : ''}`}>
                    {menuItems.map(({ to, icon, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            tabIndex={0}
                            className={({ isActive }) =>
                                `flex items-center p-4 rounded-lg mx-2 my-1 font-semibold border border-[#ffe6c7]/60 bg-transparent hover:bg-[#fff8f0]/10 hover:text-[#fff8f0] transition-colors duration-200 ${isActive ? 'bg-[#bfa77a] text-[#4e2e13] shadow-md border-l-4 border-[#fff8f0]' : 'text-[#fff8f0]'}`
                            }
                        >
                            {icon}
                            <span className={`transition-opacity duration-300 ${expanded ? 'opacity-100' : 'opacity-0'} lg:opacity-100 text-[#fff8f0]`}>{label}</span>
                        </NavLink>
                    ))}

                    {/* Botão Sair */}
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <button
                                className="flex items-center p-4 rounded-lg mx-2 my-1 font-semibold border border-[#ffe6c7]/60 bg-transparent hover:bg-[#fff8f0]/10 hover:text-[#fff8f0] transition-colors duration-200 text-[#fff8f0]"
                                tabIndex={0}
                                aria-label="Abrir diálogo de sair"
                            >
                                <ArrowLeftFromLine className="mr-2 w-5 h-5" />
                                <span className={`transition-opacity duration-300 ${expanded ? 'opacity-100' : 'opacity-0'} lg:opacity-100 text-[#fff8f0]`}>Sair</span>
                            </button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogTitle>Deseja realmente sair?</DialogTitle>
                            <DialogDescription>Você será deslogado e voltará para a tela de login.</DialogDescription>
                            <div className="flex justify-end gap-2 mt-4">
                                <button
                                    className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-[#4e2e13]"
                                    onClick={() => setOpen(false)}
                                    tabIndex={0}
                                >
                                    Cancelar
                                </button>
                                <button
                                    className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
                                    onClick={handleLogout}
                                    tabIndex={0}
                                >
                                    Sair
                                </button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </nav>

                {/* Rodapé */}
                <div className={`relative z-10 p-4 mt-auto text-center text-xs text-[#ffe6c7] transition-opacity duration-300 ${!expanded && !isDesktop ? 'hidden' : ''}`}>
                    <span className={`${expanded ? 'opacity-100' : 'opacity-0'}`}>© 2025 Moovox</span>
                </div>
            </motion.aside>
        </>
    );
}

// Hook customizado para detectar desktop responsivo
function useIsDesktop() {
    const [isDesktop, setIsDesktop] = React.useState(() => typeof window !== 'undefined' && window.innerWidth >= 1024);
    React.useEffect(() => {
        function handleResize() {
            setIsDesktop(window.innerWidth >= 1024);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return isDesktop;
}

// Ícones memoizados
const dashboardIcon = <LayoutDashboard className="mr-2 w-5 h-5" />;
const usersIcon = <Users className="mr-2 w-5 h-5" />;
const animaisIcon = <Icon iconNode={cowHead} className="mr-2 w-5 h-5" />;
const vacinasIcon = <Droplets className="mr-2 w-5 h-5" />;
const aplicacoesIcon = <Package className="mr-2 w-5 h-5" />;
const perfilIcon = <User className="mr-2 w-5 h-5" />;

// Itens do menu
const menuItems = [
    {
        to: '/dashboard',
        icon: dashboardIcon,
        label: 'Dashboard',
    },
    {
        to: '/usuarios',
        icon: usersIcon,
        label: 'Usuários',
    },
    {
        to: '/animais',
        icon: animaisIcon,
        label: 'Animais',
    },
    {
        to: '/vacinas',
        icon: vacinasIcon,
        label: 'Vacinas',
    },
    {
        to: '/aplicacoes',
        icon: aplicacoesIcon,
        label: 'Aplicações',
    },
    {
        to: '/meu-perfil',
        icon: perfilIcon,
        label: 'Meu Perfil',
    },
];

Sidebar.propTypes = {
    onToggle: PropTypes.func,
    isExpanded: PropTypes.bool,
    showContent: PropTypes.bool,
};

Sidebar.defaultProps = {
    onToggle: () => {},
    isExpanded: false,
    showContent: false,
};

export default Sidebar;
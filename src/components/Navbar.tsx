import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Link as LinkReact } from 'react-router-dom';


export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', href: '#home', isExternal: false },
        { label: 'About', href: '#about', isExternal: false },
        { label: 'Projects', href: '#projects', isExternal: false },
        { label: 'Services', href: '#services', isExternal: false },
        { label: 'Contact', href: '#contact', isExternal: false },
        { label: 'Login', href: '/login', isExternal: true },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'glass-effect shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        className="text-2xl font-bold gradient-text"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        SA
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            item.isExternal ? (
                                <LinkReact to="/login">Login</LinkReact>
                            ) :
                                <Link to={item.href.substring(1)} smooth={true} duration={500}>
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ y: 0 }}
                                    >
                                        {item.label}
                                    </motion.a>
                                </Link>

                        ))}

                        {/* Theme Toggle */}
                        <motion.button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                            whileHover={{ scale: 1.1, rotate: 180 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5 text-yellow-500" />
                            ) : (
                                <Moon className="w-5 h-5 text-gray-700" />
                            )}
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-5 h-5 text-yellow-500" />
                            ) : (
                                <Moon className="w-5 h-5 text-gray-700" />
                            )}
                        </button>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-effect border-t border-gray-200 dark:border-gray-800"
                    >
                        <div className="px-4 py-4 space-y-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

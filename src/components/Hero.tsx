import { motion } from 'framer-motion';
import { Mail, ChevronDown, Download, Briefcase } from 'lucide-react';
import { Link } from 'react-scroll';

const profilePhoto = '/cv/profile.jpeg'; // Taruh foto Anda di folder public/ dengan nama profile.jpg

const GithubIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
);

const LinkedinIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

const stats = [
    { value: '7+', label: 'Years Exp.' },
    { value: '40+', label: 'Projects Done' },
    { value: '15+', label: 'Happy Clients' },
    { value: '100%', label: 'Job Success' },
];

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* ── LEFT: Text Content ── */}
                    <div className="order-2 lg:order-1">
                        {/* Available badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-full mb-6"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                            </span>
                            <span className="text-sm font-medium text-green-700 dark:text-green-400">
                                Available for freelance & full-time
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <p className="text-gray-500 dark:text-gray-400 text-lg mb-1">Hi, I'm</p>
                            <h1 className="text-5xl md:text-6xl font-bold mb-3 leading-tight">
                                <span className="gradient-text">Saleh Attamimi</span>
                            </h1>
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-5">
                                Full Stack Developer
                            </h2>
                        </motion.div>

                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-8 max-w-lg"
                        >
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                                Need more than just a website? I build{' '}
                                <span className="font-semibold text-primary-600 dark:text-primary-400">high-performance web solutions</span>{' '}
                                that are fast, scalable, and designed to support real business growth.
                            </p>
                            <ul className="space-y-2 mb-4">
                                {[
                                    'Clean, modern & professional design',
                                    'Optimized performance & speed',
                                    'Fully responsive across all devices',
                                    'Built with scalability in mind',
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center text-primary-600 dark:text-primary-400 text-xs font-bold">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-700 dark:text-gray-300 font-medium">
                                From concept to deployment — let's turn your idea into a{' '}
                                <span className="text-primary-600 dark:text-primary-400">powerful digital product</span> 🚀
                            </p>
                        </motion.div>

                        {/* Tech Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap gap-2 mb-8"
                        >
                            {['React', 'Next.js', 'Laravel', 'Node.js', 'TypeScript', 'PostgreSQL'].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap gap-3 mb-8"
                        >
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold shadow-lg shadow-primary-500/30 transition-colors"
                            >
                                <Briefcase className="w-5 h-5" />
                                Hire Me
                            </motion.a>
                            <Link to="projects" smooth={true} duration={500}>
                                <motion.a
                                    href="/cv/CV-SalehAttamimi.pdf"
                                    download
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white rounded-xl font-semibold transition-all"
                                >
                                    <Download className="w-5 h-5" />
                                    Download CV
                                </motion.a>
                                <motion.a
                                    href="#projects"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl font-semibold transition-colors"
                                >
                                    View Work
                                </motion.a>
                            </Link>

                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex items-center gap-3"
                        >
                            <span className="text-sm text-gray-500 dark:text-gray-400">Find me on:</span>
                            {[
                                { icon: GithubIcon, href: 'https://github.com/salehattamimi', label: 'GitHub' },
                                { icon: LinkedinIcon, href: 'https://linkedin.com/in/salehattamimi', label: 'LinkedIn' },
                                { Icon: Mail, href: 'mailto:hello@salehattamimi.com', label: 'Email' },
                            ].map((s) => (
                                <motion.a
                                    key={s.label}
                                    href={s.href}
                                    target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -4, scale: 1.15 }}
                                    className="p-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 rounded-lg transition-all text-gray-600 dark:text-gray-300"
                                    aria-label={s.label}
                                >
                                    {s.icon ? <s.icon /> : s.Icon ? <s.Icon className="w-5 h-5" /> : null}
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    {/* ── RIGHT: Photo ── */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 40 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Outer glow ring */}
                            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary-400 via-blue-500 to-purple-600 opacity-30 blur-2xl animate-float" />

                            {/* Gradient border ring */}
                            <div className="relative p-1 rounded-full bg-gradient-to-br from-primary-400 via-blue-500 to-purple-500 shadow-2xl">
                                <div className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 bg-gray-200 dark:bg-gray-700">
                                    <img
                                        src={profilePhoto}
                                        alt="Saleh Attamimi — Full Stack Developer"
                                        className="w-full h-full object-cover object-center"
                                        onError={(e) => {
                                            // Fallback: show initials if photo missing
                                            const target = e.currentTarget;
                                            target.style.display = 'none';
                                            const parent = target.parentElement!;
                                            parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-400 to-blue-600 text-white text-6xl font-bold">SA</div>`;
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Available for work badge on photo */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full shadow-lg text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2"
                            >
                                <span className="text-green-500">●</span> Open to Work
                            </motion.div>

                            {/* Floating skill card — top right */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-3 shadow-xl"
                            >
                                <p className="text-xs text-gray-500 dark:text-gray-400">Experience</p>
                                <p className="text-xl font-bold text-primary-600 dark:text-primary-400">7+ Years</p>
                            </motion.div>

                            {/* Floating skill card — bottom left */}
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-3 shadow-xl"
                            >
                                <p className="text-xs text-gray-500 dark:text-gray-400">Projects Done</p>
                                <p className="text-xl font-bold text-primary-600 dark:text-primary-400">40+ Projects</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* ── Stats Row ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-gray-200 dark:border-gray-800"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                            className="text-center"
                        >
                            <p className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="flex justify-center mt-10"
                >
                    <motion.a
                        href="#about"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-gray-400 dark:text-gray-600 hover:text-primary-500 transition-colors"
                    >
                        <ChevronDown className="w-8 h-8" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}

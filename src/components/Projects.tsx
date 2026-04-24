import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { useState } from 'react';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    featured: boolean;
    category: string;
    link?: string;
    github?: string;
    caseStudy?: {
        problem: string;
        solution: string;
        impact: string;
        tech: string[];
    };
}

export default function Projects() {
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            id: 1,
            title: 'e-Rusun Surabaya — Public Housing MIS',
            description: 'Full-stack management information system built for DPRKPP Surabaya (City Housing & Settlements Agency), managing the complete lifecycle of public apartment blocks — from tenant application to billing and government financial reporting.',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
            tags: ['Laravel 8', 'Postgresql', 'Bootstrap 5', 'Laravel Passport', 'Firebase FCM', 'QRIS'],
            featured: true,
            category: 'Full Stack',
            link: 'https://erusun.dprkpp.web.id/dashboard',
            caseStudy: {
                problem: 'DPRKPP Surabaya managed thousands of public housing units (Rumah Susun) with entirely manual, paper-based processes — no unified system for tenant applications, billing, arrears tracking, government document generation, or multi-level approval workflows across 10 operational roles and multiple regional offices.',
                solution: 'Built e-Rusun — a production MIS covering the full tenant lifecycle: multi-level application workflow (Kelurahan → Rayon → Bidang → Kepala); complete occupancy management with family data, identity documents, and lease agreements; monthly rent & electricity billing with SKRD/TBP government document generation; Virtual Account & QRIS payment integration; arrears and PAD (Local Revenue) monitoring dashboards; 20+ Excel export classes for government reporting; and role-based access for 10 distinct roles. Integrated with 4+ external government APIs: Kantorku SSO (OAuth2), IGAHP (national housing ministry sync), Cekin Wargaku, Capil civil registry, and Firebase FCM for mobile push notifications.',
                impact: 'Actively used in production by DPRKPP Surabaya city government, managing 5,239 housing units with 4,814 active tenants (91.9% occupancy), 4,226 family cards, and 11,238 residents. Handles monthly billing cycles, real-time PAD target tracking (106%+ achievement), and multi-agency data sync at both city and national government level across 170+ database migrations built over 4+ years.',
                tech: ['Laravel 8', 'Postgresql', 'Bootstrap 5', 'Laravel Passport', 'Laravel Sanctum', 'Firebase FCM', 'QRIS', 'Maatwebsite Excel', 'DomPDF', 'Yajra DataTables', 'Google reCAPTCHA', 'Kantorku SSO', 'IGAHP API', 'Capil API'],
            },
        },
        {
            id: 2,
            title: 'Sibengki — Automotive Service Management',
            description: 'Production-grade Automotive Service Management System (SIMS) digitalizing end-to-end workshop operations — from customer intake to financial reporting — under a single role-secured platform.',
            image: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80',
            tags: ['Laravel 8', 'Postgresql', 'Bootstrap 5', 'Algolia', 'Spatie', 'DomPDF'],
            featured: true,
            category: 'Full Stack',
            caseStudy: {
                problem: 'Automotive workshops operated entirely on manual, paper-based processes — no unified system existed for work orders, spare parts inventory, mechanic performance tracking, customer relations, purchasing, payroll, or financial reporting. Accountability was near-zero and scaling was impossible.',
                solution: 'Built Sibengki — a comprehensive, production-grade platform covering the full workshop lifecycle: a 6-stage Work Order Engine (Draft → Verification → On Process → Done → Payment → Completion) with OTP-based customer agreement signing; granular RBAC (50+ permissions across Superadmin, Admin, Supervisor, Mekanik, Kasir roles) via Spatie Permission; a Mechanic EXP & leveling system with automated income splitting and half-monthly payroll; double-entry accounting with auto-generated journal entries, P&L, and Balance Sheet reports; full purchasing & inventory flow with QR/barcode tracking; QR-based employee attendance with daily auto-generated codes and late-penalty calculation; full-text search via Algolia Scout; PDF export via DomPDF; WhatsApp & email notifications; and a complete audit trail using Spatie Activity Log across all 63+ Eloquent models.',
                impact: 'Actively used in production across an automotive workshop, managing the complete service lifecycle with 200+ database migrations evolved over 2+ years. Reduced administrative overhead dramatically, eliminated paper-based work orders, enabled real-time financial visibility through integrated accounting, and enforced accountability across all roles via audit trails and activity logging.',
                tech: ['Laravel 8', 'Postgresql', 'Bootstrap 5', 'Algolia Scout', 'Spatie Permission', 'Spatie Activity Log', 'Laravel Sanctum', 'DomPDF', 'QR/Barcode', 'WhatsApp API'],
            },
        },
        {
            id: 3,
            title: 'SIMPEG Kota Madiun — Civil Servant MIS',
            description: 'Enterprise-grade Human Resources Information System for Kota Madiun city government, managing the full civil servant lifecycle — from onboarding and career progression to retirement — integrated with the national BKN/SIASN civil service agency.',
            image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80',
            tags: ['Laravel 8', 'MySQL', 'JWT Auth', 'BKN API', 'DomPDF', 'Queue'],
            featured: false,
            category: 'Full Stack',
            caseStudy: {
                problem: 'Government HR departments across dozens of agencies (OPD) operated with scattered spreadsheets, manual paperwork, and isolated databases — leading to data inconsistency, slow approval pipelines, and inability to comply with national BKN civil service regulations for thousands of PNS, PPPK, and contract employees.',
                solution: 'Built SIMPEG — a comprehensive enterprise MIS covering 35+ history record types (ranks, positions, performance, training, leave, disciplinary), real-time dual-state org chart (live + monthly frozen snapshots via queue jobs), 15+ multi-level document request workflows, multi-level electronic signature (TTE) at 4 authority levels (OPD Head → SEKDA → BKPSDM → Mayor), and bi-directional BKN/SIASN national API sync with a staging system for data review. Dual-layer REST API (JWT + Basic Auth) serves mobile clients and government integrations. RBAC across 8+ roles with Hashids ID obfuscation and WhatsApp notification on every workflow transition.',
                impact: 'Deployed in production for Kota Madiun city government, serving all OPD agencies with a single source of truth for every civil servant record. Eliminated spreadsheet chaos, enabled national BKN compliance, and reduced HR processing time dramatically across 250+ database tables built over multiple years of continuous government requirements.',
                tech: ['Laravel 8', 'MySQL', 'JWT (tymon/jwt-auth)', 'Laravel Sanctum', 'SSO', 'DomPDF', 'PDF Merger', 'Maatwebsite Excel', 'Yajra DataTables', 'Laravel Queues', 'Hashids', 'Guzzle HTTP', 'BKN/SIASN API', 'WhatsApp Business API', 'WebDAV', 'ZipStream'],
            },
        },
        {
            id: 4,
            title: 'E-Commerce Platform',
            description: 'Modern e-commerce solution with payment gateway integration, inventory management, and analytics dashboard.',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
            tags: ['React', 'Laravel', 'MySQL', 'Stripe'],
            featured: false,
            category: 'Full Stack',
        },
        {
            id: 5,
            title: 'Real-Time Chat Application',
            description: 'Scalable chat application with WebSocket support, file sharing, and real-time notifications.',
            image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80',
            tags: ['Node.js', 'Socket.io', 'React', 'MongoDB'],
            featured: false,
            category: 'Full Stack',
        },
        {
            id: 6,
            title: 'Analytics Dashboard',
            description: 'Interactive data visualization dashboard for business intelligence and reporting.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
            featured: false,
            category: 'Frontend',
        },
        {
            id: 7,
            title: 'Learning Management System',
            description: 'Educational platform with course management, progress tracking, and interactive assessments.',
            image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
            tags: ['Laravel', 'Vue.js', 'MySQL', 'FFmpeg'],
            featured: false,
            category: 'Full Stack',
        },
    ];

    const categories = ['all', 'Full Stack', 'Frontend', 'Backend'];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    const featuredProjects = projects.filter(p => p.featured);

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Showcasing impactful solutions from 15+ completed projects
                    </p>
                </motion.div>

                {/* Featured Projects - Large Cards */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold mb-8 flex items-center">
                        <Star className="w-6 h-6 text-yellow-500 mr-2 fill-yellow-500" />
                        Spotlight Projects
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="glass-effect rounded-2xl overflow-hidden group cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-medium rounded-full flex items-center">
                                            <Star className="w-3 h-3 mr-1 fill-white" />
                                            Featured
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <button className="text-primary-600 dark:text-primary-400 font-medium flex items-center group-hover:gap-2 transition-all">
                                        View Case Study
                                        <ExternalLink className="w-4 h-4 ml-1 group-hover:ml-0" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Filter */}
                <div className="flex justify-center gap-4 mb-10">
                    {categories.map((cat) => (
                        <motion.button
                            key={cat}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${filter === cat
                                ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/50'
                                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                                }`}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </motion.button>
                    ))}
                </div>

                {/* All Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="glass-effect rounded-xl overflow-hidden group cursor-pointer"
                            onClick={() => project.caseStudy && setSelectedProject(project)}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {project.featured && (
                                    <div className="absolute top-3 right-3">
                                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                    </div>
                                )}
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Case Study Modal */}
            {selectedProject?.caseStudy && (
                <CaseStudyModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}

interface CaseStudyModalProps {
    project: Project;
    onClose: () => void;
}

function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
    if (!project.caseStudy) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header Image */}
                <div className="relative h-64 md:h-80">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                        ×
                    </button>
                </div>

                <div className="p-8 md:p-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                        {project.title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                        {project.description}
                    </p>

                    {/* Problem */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                            Challenge
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {project.caseStudy.problem}
                        </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                            Solution
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {project.caseStudy.solution}
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                            Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.caseStudy.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Impact */}
                    <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6">
                        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                            Impact & Results
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {project.caseStudy.impact}
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

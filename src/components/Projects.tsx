import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-scroll';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
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
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            id: 1,
            title: 'e-Rusun Surabaya — Public Housing MIS',
            description: 'Full-stack management information system built for DPRKPP Surabaya (City Housing & Settlements Agency), managing the complete lifecycle of public apartment blocks — from tenant application to billing and government financial reporting.',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
            tags: ['Laravel 8', 'Postgresql', 'Bootstrap 5', 'Laravel Passport', 'Firebase FCM', 'QRIS'],
            category: 'Government',
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
            description: 'Production-grade Automotive Service Management System digitalizing end-to-end workshop operations — from customer intake to financial reporting — under a single role-secured platform.',
            image: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80',
            tags: ['Laravel 8', 'Postgresql', 'Bootstrap 5', 'Algolia', 'Spatie', 'DomPDF'],
            category: 'Enterprise',
            caseStudy: {
                problem: 'Automotive workshops operated entirely on manual, paper-based processes — no unified system existed for work orders, spare parts inventory, mechanic performance tracking, customer relations, purchasing, payroll, or financial reporting. Accountability was near-zero and scaling was impossible.',
                solution: 'Built Sibengki — a comprehensive, production-grade platform covering the full workshop lifecycle: a 6-stage Work Order Engine (Draft → Verification → On Process → Done → Payment → Completion) with OTP-based customer agreement signing; granular RBAC (50+ permissions across Superadmin, Admin, Supervisor, Mekanik, Kasir roles) via Spatie Permission; a Mechanic EXP & leveling system with automated income splitting and half-monthly payroll; double-entry accounting with auto-generated journal entries, P&L, and Balance Sheet reports; full purchasing & inventory flow with QR/barcode tracking; QR-based employee attendance with daily auto-generated codes and late-penalty calculation; full-text search via Algolia Scout; PDF export via DomPDF; WhatsApp & email notifications; and a complete audit trail using Spatie Activity Log across all 63+ Eloquent models.',
                impact: 'Actively used in production across an automotive workshop, managing the complete service lifecycle with 200+ database migrations evolved over 2+ years. Reduced administrative overhead dramatically, eliminated paper-based work orders, enabled real-time financial visibility through integrated accounting, and enforced accountability across all roles via audit trails and activity logging.',
                tech: ['Laravel 8', 'Postgresql', 'Bootstrap 5', 'Algolia Scout', 'Spatie Permission', 'Spatie Activity Log', 'Laravel Sanctum', 'DomPDF', 'QR/Barcode', 'WhatsApp API'],
            },
        },
        {
            id: 3,
            title: 'ACCO — Medical Education Platform',
            description: 'Web-based Medical Education Platform for ACCO (acco.edu.au, Australia) — built with Laravel 10, featuring an online exam system, certificate generation, workshop & membership management, and participant administration for medical professionals.',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
            tags: ['Laravel 10', 'PHP 8', 'PostgreSql', 'Bootstrap', 'Laravel Sanctum', 'DomPDF'],
            category: 'Enterprise',
            link: 'https://acco.edu.au',
            caseStudy: {
                problem: 'A medical education organisation in Australia needed a centralised platform for medical professionals (doctors, clinicians) to register for workshops, sit online exams, obtain certifications, and manage memberships — all previously handled through fragmented, manual processes with no unified system for scheduling, payments, or certificate issuance.',
                solution: 'Built ACCO — a full-featured medical education platform covering public landing pages (workshops, certifications, melanoma specialisation, event calendar, publications & retracted articles); a complete admin dashboard for managing workshops (CRUD, visibility, pricing, multi-tier descriptions, image uploads), certifications, online exams (grouped questions, auto-scoring, timer, Australia/Sydney timezone), participants (filtered by workshop, membership, status), memberships, payments, schedules, people profiles, evaluations, gallery, and global site settings; and a participant portal with timed online exams, post-exam PDF certificate generation, and member profile management. Implemented multi-role auth (admin vs participant), ID encryption (encrypt/decrypt), CSRF, rate limiting, Excel import for bulk member data, and mobile device detection.',
                impact: 'Deployed in production at acco.edu.au, actively serving medical professionals across Australia for workshop registration, online examinations, and certification. Handles real-time exam sessions with automatic scoring and instant PDF certificate generation, export to PDF/Excel/Word, and end-to-end participant lifecycle from registration through payment confirmation to certified completion.',
                tech: ['Laravel 10', 'PHP 8', 'PostgreSql', 'Blade Templates', 'Bootstrap', 'Laravel Sanctum', 'Maatwebsite Excel', 'DomPDF', 'PHPWord', 'Intervention Image', 'Yajra DataTables', 'LaravelDaily Invoices'],
            },
        },
    ];

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-4"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Selected <span className="gradient-text">Work</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A few project highlights from 40+ production systems I've built across enterprise, governments, and private sectors.
                    </p>
                </motion.div>

                {/* Highlight notice */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="flex justify-center mb-14"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-full text-sm text-primary-700 dark:text-primary-300">
                        <span className="w-2 h-2 rounded-full bg-primary-500 inline-block" />
                        These are selected examples only — click any card to see the full case study
                    </span>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="glass-effect rounded-2xl overflow-hidden group cursor-pointer flex flex-col"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="relative h-52 overflow-hidden flex-shrink-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute top-3 right-3">
                                    <span className="px-2.5 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-snug">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.tags.slice(0, 4).map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 4 && (
                                        <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs rounded-full">
                                            +{project.tags.length - 4} more
                                        </span>
                                    )}
                                </div>
                                <button className="text-primary-600 dark:text-primary-400 font-medium flex items-center gap-1 text-sm group-hover:gap-2 transition-all mt-auto">
                                    View Case Study
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl p-10 border border-primary-100 dark:border-primary-800"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                        Got a project in mind?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto">
                        Whether it's a management system, business app, or custom web platform — I'll turn your idea into a production-ready product.
                    </p>
                    <Link to="contact" smooth={true} duration={500}>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold shadow-lg shadow-primary-500/30 transition-colors"
                        >
                            Let's Build It Together
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>
                    </Link>
                </motion.div>
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

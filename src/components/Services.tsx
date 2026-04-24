import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Sparkles, Wrench } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: Globe,
            title: 'Full Stack Development',
            description: 'End-to-end web application development from frontend to backend, delivering complete solutions tailored to your needs.',
            features: ['React/Next.js Apps', 'Laravel/PHP Backend', 'RESTful APIs', 'Database Design'],
        },
        {
            icon: Code,
            title: 'Frontend Development',
            description: 'Modern, responsive, and interactive user interfaces using the latest JavaScript frameworks and best practices.',
            features: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Performance Optimization'],
        },
        {
            icon: Database,
            title: 'Backend Development',
            description: 'Robust server-side applications with secure APIs, efficient data management, and scalable architecture.',
            features: ['Laravel/PHP', 'Node.js/Express', 'API Development', 'Authentication & Security'],
        },
        {
            icon: Wrench,
            title: 'Database Solutions',
            description: 'Comprehensive database design, optimization, and management for both SQL and NoSQL systems.',
            features: ['MySQL/PostgreSQL', 'MongoDB', 'Query Optimization', 'Data Modeling'],
        },
        {
            icon: Sparkles,
            title: 'AI Integration',
            description: 'Integrate modern AI capabilities into your applications to enhance user experience and automation.',
            features: ['ChatGPT Integration', 'AI-Powered Features', 'Automation', 'Smart Analytics'],
        },
        {
            icon: Smartphone,
            title: 'Tech Consultation',
            description: 'Expert guidance on technology stack selection, architecture design, and best practices for your project.',
            features: ['Tech Stack Advice', 'Code Review', 'Architecture Planning', 'Best Practices'],
        },
    ];

    return (
        <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900/50">
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
                        What I <span className="gradient-text">Do</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Comprehensive development services from concept to deployment
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="glass-effect rounded-2xl p-8 group"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                                <service.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                {service.description}
                            </p>

                            <ul className="space-y-2">
                                {service.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center text-gray-700 dark:text-gray-300"
                                    >
                                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <div className="glass-effect rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                            Ready to bring your project to life?
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                            Available for freelance work, contract positions, and full-time opportunities
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium shadow-lg shadow-primary-500/50 transition-colors"
                            >
                                Get In Touch
                            </motion.a>
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-transparent border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white rounded-lg font-medium transition-all"
                            >
                                View Portfolio
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

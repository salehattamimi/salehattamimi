import { motion } from 'framer-motion';
import { Code2, Database, Layers, Sparkles } from 'lucide-react';

export default function About() {
    const techStack = {
        frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
        backend: ['Laravel', 'Node.js', 'PHP', 'Express', 'REST APIs'],
        database: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
        tools: ['Git', 'Docker', 'Supabase', 'Vercel', 'AI Integration'],
    };

    const highlights = [
        {
            icon: Code2,
            title: 'Multi-Stack Mastery',
            description: 'Proficient across multiple technologies, from modern JavaScript frameworks to robust backend systems.',
        },
        {
            icon: Layers,
            title: 'End-to-End Development',
            description: 'Full-stack capability covering frontend, backend, database design, and deployment.',
        },
        {
            icon: Database,
            title: 'Database Expert',
            description: 'Experience with SQL and NoSQL databases, optimization, and complex data modeling.',
        },
        {
            icon: Sparkles,
            title: 'Innovation Focused',
            description: 'Integrating modern technologies including AI capabilities to build cutting-edge solutions.',
        },
    ];

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
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
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        I build production-ready web applications that solve real business problems — on time, on budget, and built to last.
                    </p>
                </motion.div>

                {/* Story */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-16 max-w-4xl mx-auto"
                >
                    <div className="glass-effect rounded-2xl p-8 md:p-10">
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            I'm a <span className="font-semibold text-primary-600 dark:text-primary-400">Full Stack Developer</span> with over{' '}
                            <span className="font-semibold">7 years of freelance & professional experience</span> since mid-2019. I've delivered{' '}
                            <span className="font-semibold">40+ production systems</span> — from government MIS platforms to enterprise business apps — each one shipped, used, and maintained in the real world.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            I take ownership of the entire build — architecture, backend, frontend, database, and deployment. You get a dedicated developer who cares about your product's success, not just writing code. Currently expanding into{' '}
                            <span className="font-semibold text-primary-600 dark:text-primary-400">Golang</span> and{' '}
                            <span className="font-semibold text-primary-600 dark:text-primary-400">AI integrations</span> to bring even more value to every project.
                        </p>
                    </div>
                </motion.div>

                {/* Highlights Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            whileHover={{ y: -5 }}
                            className="glass-effect rounded-xl p-6 text-center"
                        >
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-lg mb-4">
                                <item.icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
                        Tech Stack <span className="gradient-text">Arsenal</span>
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {Object.entries(techStack).map(([category, technologies], catIndex) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * catIndex }}
                                className="glass-effect rounded-xl p-6"
                            >
                                <h4 className="text-lg font-semibold mb-4 capitalize text-primary-600 dark:text-primary-400">
                                    {category}
                                </h4>
                                <ul className="space-y-2">
                                    {technologies.map((tech, techIndex) => (
                                        <motion.li
                                            key={tech}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.1 * catIndex + 0.05 * techIndex }}
                                            className="flex items-center text-gray-700 dark:text-gray-300"
                                        >
                                            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                                            {tech}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

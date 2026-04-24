import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-gray-600 dark:text-gray-400 flex items-center mb-4 md:mb-0"
                    >
                        Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-red-500" /> by Saleh Attamimi
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-gray-600 dark:text-gray-400"
                    >
                        © {currentYear} All rights reserved.
                    </motion.p>
                </div>
            </div>
        </footer>
    );
}

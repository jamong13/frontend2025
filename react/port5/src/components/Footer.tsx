import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-black/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React
            and Tailwind CSS
          </p>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}


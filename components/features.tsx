"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Cpu, Globe, Layers, Wallet, Zap } from "lucide-react"

const features = [
  {
    icon: <Zap className="h-10 w-10 text-purple-500" />,
    title: "High Performance",
    description: "Process up to 65,000 transactions per second with sub-second finality.",
  },
  {
    icon: <Wallet className="h-10 w-10 text-blue-500" />,
    title: "Low Transaction Costs",
    description: "Average transaction cost of $0.00025, making microtransactions viable.",
  },
  {
    icon: <Code className="h-10 w-10 text-purple-500" />,
    title: "Developer Friendly",
    description: "Build with familiar languages like Rust, C, and C++ with comprehensive documentation.",
  },
  {
    icon: <Globe className="h-10 w-10 text-blue-500" />,
    title: "Growing Ecosystem",
    description: "Join a thriving community of developers, projects, and users.",
  },
  {
    icon: <Cpu className="h-10 w-10 text-purple-500" />,
    title: "Energy Efficient",
    description: "Environmentally friendly proof-of-stake consensus mechanism.",
  },
  {
    icon: <Layers className="h-10 w-10 text-blue-500" />,
    title: "Composable Architecture",
    description: "Build complex applications with modular, reusable components.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export const Features = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="w-full py-20 md:py-32 bg-muted/50" ref={ref}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">Solana</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Solana combines cutting-edge technology with user-friendly design to create the most accessible blockchain
            platform.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-md"
              variants={itemVariants}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
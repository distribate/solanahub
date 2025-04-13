"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, DiscIcon as Discord, Globe } from "lucide-react"

export const CommunitySection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="community" className="w-full py-20 md:py-32 bg-muted/50" ref={ref}>
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Community
            </span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Connect with developers, creators, and enthusiasts building the future of decentralized applications on
            Solana.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="outline" className="gap-2">
              <Twitter className="h-4 w-4" />
              Twitter
            </Button>
            <Button variant="outline" className="gap-2">
              <Discord className="h-4 w-4" />
              Discord
            </Button>
            <Button variant="outline" className="gap-2">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline" className="gap-2">
              <Globe className="h-4 w-4" />
              Forum
            </Button>
          </div>
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter to receive the latest updates, news, and announcements.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                Subscribe
              </Button>
            </form>
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">Developer Resources</h3>
            <p className="text-muted-foreground mb-4">
              Access documentation, tutorials, and tools to start building on Solana.
            </p>
            <Button variant="outline" className="w-full">
              Explore Docs
            </Button>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">Hackathons & Events</h3>
            <p className="text-muted-foreground mb-4">
              Participate in global hackathons and connect at Solana events worldwide.
            </p>
            <Button variant="outline" className="w-full">
              View Calendar
            </Button>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-3">Grants Program</h3>
            <p className="text-muted-foreground mb-4">
              Apply for funding to support your project built on the Solana blockchain.
            </p>
            <Button variant="outline" className="w-full">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
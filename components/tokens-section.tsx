"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react"
import { useQuery } from "@tanstack/react-query"
import { getSolanaTokens } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export const TokensSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { data: tokens, isLoading, error } = useQuery({
    queryKey: ["solanaTokens"],
    queryFn: getSolanaTokens,
  })

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

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      notation: num > 1000000 ? "compact" : "standard",
      maximumFractionDigits: num > 1 ? 2 : 6,
    }).format(num)
  }

  return (
    <section id="tokens" className="w-full py-20 md:py-32" ref={ref}>
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Solana{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                Ecosystem
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover the top tokens built on the Solana blockchain, featuring real-time prices and market data.
            </p>
          </div>
          <Button className="mt-4 md:mt-0 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
            View All Tokens
            <TrendingUp className="ml-2 h-4 w-4" />
          </Button>
        </div>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-3 w-12" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="h-6 w-32" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : error ? (
          <div className="text-center p-8 bg-muted rounded-lg">
            <p className="text-lg text-muted-foreground">Failed to load token data. Please try again later.</p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {tokens?.map((token, index) => (
              <motion.div key={token.id} variants={itemVariants}>
                <Card className="overflow-hidden hover:shadow-md transition-all duration-300 h-full">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full overflow-hidden bg-muted">
                            <Image
                              src={token.image || "/placeholder.svg"}
                              alt={token.name}
                              width={40}
                              height={40}
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold">{token.name}</h3>
                            <p className="text-xs text-muted-foreground">{token.symbol}</p>
                          </div>
                        </div>
                        <div
                          className={`flex items-center text-sm font-medium ${token.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}`}
                        >
                          {token.price_change_percentage_24h >= 0 ? (
                            <ArrowUpRight className="h-4 w-4 mr-1" />
                          ) : (
                            <ArrowDownRight className="h-4 w-4 mr-1" />
                          )}
                          {Math.abs(token.price_change_percentage_24h).toFixed(2)}%
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-2xl font-bold">{formatNumber(token.current_price)}</p>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <p className="text-muted-foreground">Market Cap</p>
                            <p className="font-medium">{formatNumber(token.market_cap)}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Volume (24h)</p>
                            <p className="font-medium">{formatNumber(token.total_volume)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
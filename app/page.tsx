import { Suspense } from "react"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { TokensSection } from "@/components/tokens-section"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"
import { LoadingFallback } from "@/components/loading-fallback"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <Features />
      <Suspense fallback={<LoadingFallback />}>
        <TokensSection />
      </Suspense>
      <CommunitySection />
      <Footer />
    </main>
  )
}
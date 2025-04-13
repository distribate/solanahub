export interface TokenData {
  id: string
  name: string
  symbol: string
  image: string
  current_price: number
  price_change_percentage_24h: number
  market_cap: number
  total_volume: number
}

export interface SolanaData {
  solana: TokenData
  price: number
  price_change_percentage_24h: number
  market_cap: number
  total_volume: number
}

export async function getSolanaData(): Promise<SolanaData> {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    solana: {
      id: "solana",
      name: "Solana",
      symbol: "SOL",
      image: "/placeholder.svg?height=50&width=50",
      current_price: 148.32,
      price_change_percentage_24h: 5.23,
      market_cap: 64582930451,
      total_volume: 2345678901,
    },
    price: 148.32,
    price_change_percentage_24h: 5.23,
    market_cap: 64582930451,
    total_volume: 2345678901,
  }
}

export async function getSolanaTokens(): Promise<TokenData[]> {
  await new Promise((resolve) => setTimeout(resolve, 1500))

  return [
    {
      id: "solana",
      name: "Solana",
      symbol: "SOL",
      image: "/placeholder.svg?height=50&width=50",
      current_price: 148.32,
      price_change_percentage_24h: 5.23,
      market_cap: 64582930451,
      total_volume: 2345678901,
    },
    {
      id: "serum",
      name: "Serum",
      symbol: "SRM",
      image: "/placeholder.svg?height=50&width=50",
      current_price: 0.32,
      price_change_percentage_24h: 2.45,
      market_cap: 160000000,
      total_volume: 25000000,
    },
    {
      id: "raydium",
      name: "Raydium",
      symbol: "RAY",
      image: "/placeholder.svg?height=50&width=50",
      current_price: 0.48,
      price_change_percentage_24h: -1.23,
      market_cap: 240000000,
      total_volume: 35000000,
    },
    {
      id: "step-finance",
      name: "Step Finance",
      symbol: "STEP",
      image: "/placeholder.svg?height=50&width=50",
      current_price: 0.05,
      price_change_percentage_24h: 7.89,
      market_cap: 25000000,
      total_volume: 8000000,
    },
    {
      id: "mango-markets",
      name: "Mango Markets",
      symbol: "MNGO",
      image: "/placeholder.svg?height=50&width=50",
      current_price: 0.023,
      price_change_percentage_24h: -3.45,
      market_cap: 23000000,
      total_volume: 5000000,
    },
    {
      id: "orca",
      name: "Orca",
      symbol: "ORCA",
      image: "/placeholder.svg?height=50&width=50",
      current_price: 0.67,
      price_change_percentage_24h: 4.56,
      market_cap: 134000000,
      total_volume: 28000000,
    },
  ]
}
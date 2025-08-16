export interface CryptocurrencyResponse {
  cryptocurrencies: Cryptocurrency[]
}



export interface MarketDataResponse {
  cryptocurrencies: Cryptocurrency[]
  forex_pairs: Forexpairs[]
  stocks: Stocks[]
}

export interface Stocks {
  name: string
  price: number
  image: string
}

export interface Forexpairs {
  currency: string
  rate: number
  image: string
}

export interface Cryptocurrency {
  name: string
  symbol: string
  price: number
  image: string
  change_1h: number
}
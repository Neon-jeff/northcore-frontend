export interface ExpertResponse {
  experts: Experts[]
}

export interface Experts {
  id: number
  name: string
  avatar: string
  created_at: string
  profit_share: number
  total_profit: number
  win_rate: number
  followers: number
  followers_profit_average: number
  all_time_profit: number
  minimum_investment: number
  preferred_currency: string
  market_domain: string
}

export interface ExpertTradesResponse {
  trades: Trade[]
}

export interface Trade {
  id: number
  expert_id: number
  entry_price: number
  exit_price: number
  profit_loss: number
  date: string
  currency: string
  market_domain: string
}
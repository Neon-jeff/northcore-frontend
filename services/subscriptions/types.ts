export interface SubscriptionResponse {
  subscriptions: Subscriptions[]
}

export interface Subscriptions {
  id: number
  user_id: number
  expert_id: number
  start_date: string
  end_date: string
  is_active: boolean
}

export interface CreatSubscriptionBody {
  expert_id: number
  is_active: boolean
}
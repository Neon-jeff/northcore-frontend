export interface Transaction {
  id: number;
  user_id: number;
  amount: number;
  transaction_type: string;
  created_at: string;
  name: string;
  status:"pending" | "active" | "cancelled"
  currency:string
}

export interface CreateTransactionBody{
  currency:string
  amount:number
  transaction_type: 'deposit' | 'withdrawal';
}

export interface NotificationResponse {
  notifications: Notification[]
}

export interface Notification {
  id: number
  user_id: number
  title: string
  message: string
  is_read: boolean
  notification_type: string
  created_at: string
}
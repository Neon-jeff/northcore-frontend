export interface Transaction {
  id: number;
  user_id: number;
  amount: number;
  transaction_type: string;
  created_at: string;
  name: string;
  status: "pending" | "active" | "cancelled";
  currency: string;
}

export interface CreateTransactionBody {
  currency: string;
  amount: number;
  transaction_type: "debit" | "credit";
  name: "deposit" | "withdrawal";
  withdrawal_address?: string;
}

export interface NotificationResponse {
  notifications: Notification[];
}

export interface Notification {
  id: number;
  user_id: number;
  title: string;
  message: string;
  is_read: boolean;
  notification_type: string;
  created_at: string;
}

export interface UpgradeRequestResponse {
  id: number;
  user_id: number;
  status: string;
  amount: number;
  payment_proof: string;
  created_at: string;
  updated_at: string;
}

export interface AdminWallet {
  id: number;
  name: string;
  address: string;
  image: string;
  qr_code: string;
}

export interface AdminWalletListResponse {
  wallets: AdminWallet[];
}

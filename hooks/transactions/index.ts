import { TransactionService } from "@/services/transactions";
import { CreateTransactionBody } from "@/services/transactions/types";
import { useMutation, useQuery } from "@tanstack/react-query";

const transactionService = new TransactionService();

export function useCreateTransaction() {
  return useMutation({
    mutationFn: async (data: CreateTransactionBody) =>
      transactionService.create_transaction(data),
  });
}

export function useGetTransactions() {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: async () => transactionService.get_transactions(),
    staleTime: 1000 * 60 * 30,
    refetchOnMount: true,
    refetchOnWindowFocus: true
  });
}

export function useGetNotifications(){
  return useQuery({
    queryKey: ["notifications"],
    queryFn: async () => transactionService.getUserNotifications(),
    staleTime: 1000 * 60 * 30,
    refetchOnMount: true,
    refetchOnWindowFocus: true
  });
}

export function useCreateUpgradeRequest() {
  return useMutation({
    mutationFn: async (data: FormData) =>
      transactionService.createUpgradeRequest(data),
  });
}

export function useGetUpgradeRequests() {
  return useQuery({
    queryKey: ["upgrade-requests"],
    queryFn: async () => transactionService.getUpgradeRequests(),
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    retry: false,
  });
}

export function useGetAdminWallets() {
  return useQuery({
    queryKey: ["admin-wallets"],
    queryFn: async () => transactionService.get_admin_wallets(),
    staleTime: 1000 * 60 * 30,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
}
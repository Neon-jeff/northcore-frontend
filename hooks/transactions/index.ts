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
import { http } from "@/api/http";
import { endpoints } from "@/api/endpoints";
import { CreateTransactionBody, Transaction } from "./types";

export class TransactionService {
  public async create_transaction(data: CreateTransactionBody) {
    try {
      const response = http
        .post(endpoints.accounts.transactions, {
          json: data,
        })
        .json<Transaction>();
      return response;
    } catch (error) {
      throw error;
    }
  }
  public async get_transactions() {
    try {
      const response = http
        .get(endpoints.accounts.transactions)
        .json<{transactions: Transaction[]}>();
      return response;
    } catch (error) {
      throw error;
    }
  }

}

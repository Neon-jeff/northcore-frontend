import { http } from "@/api/http";
import { endpoints } from "@/api/endpoints";
import { CreatSubscriptionBody, SubscriptionResponse, Subscriptions } from "./types";
// import { HTTPError } from "ky";

export class SubscriptionService {
  public async createSubscription(data: CreatSubscriptionBody) {
    try {
      const response = http
        .post(endpoints.subscription.create, { json: data })
        .json<Subscriptions>();
      return response;
    } catch (error) {
      throw error;
    }
  }
  public async getUserSubscription(params?: {
    user_id?: number;
    active_only: boolean;
  }) {
    try {
      const response = http
        .get(endpoints.subscription.create, {
          searchParams: params,
        })
        .json<SubscriptionResponse>();
      return response;
    } catch (error) {
      throw error;
    }
  }
}

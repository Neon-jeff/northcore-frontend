import { endpoints } from "@/api/endpoints";
import { http } from "@/api/http";
import { ExpertResponse, ExpertTradesResponse } from "./types";



export class ExpertService {
  public async getAllExperts() {
    try {
      const response = await http.get(endpoints.experts.getAll).json<ExpertResponse>();
      return response;
    } catch (error) {
      throw error;
    }
  }

  public async getUserExperts (){
    try {
      const response = await http.get(endpoints.experts.getAll).json<ExpertResponse>();
      return response;
    } catch (error) {
      throw error;
    }
  }

  public async getExpertTrades(params: { expertId: number }) {
    try {
      const response = await http.get(endpoints.experts.trades,{
        searchParams: params
      }).json<ExpertTradesResponse>();
      return response;
    } catch (error) {
      throw error;
    }
  }
}

import { endpoints } from "@/api/endpoints";
import { http } from "@/api/http";
import { ExpertResponse } from "./types";



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
}

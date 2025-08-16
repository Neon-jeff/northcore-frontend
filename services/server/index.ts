import { endpoints } from "@/api/endpoints";
import { http } from "@/api/http";
import { HTTPError } from "ky";

export class ServerService {
    private static instance: ServerService;
    public async startServer() {
        try {
            const response = await http.get(endpoints.server.status).json()
            return response;
        } catch (error) {
            if(error instanceof HTTPError){
                const response = await error.response.json()
                throw new Error(`Server error: ${response.message}`);
            }
            throw error;
        }
    }

 
}
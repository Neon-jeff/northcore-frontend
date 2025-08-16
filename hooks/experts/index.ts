import { ExpertService } from "@/services/expert";
import { useQuery } from "@tanstack/react-query";

const expertService = () => new ExpertService();

export function useExperts(){
    return useQuery({
        queryKey: ["experts"],
        queryFn: async () => expertService().getAllExperts(),
        staleTime: 1000 * 60 * 30,
        refetchOnMount: true,
        refetchOnWindowFocus: true
    });
}
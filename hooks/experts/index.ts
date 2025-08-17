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

export function useExpertTrades(expertId: number) {
    return useQuery({
        queryKey: ["expertTrades", expertId],
        queryFn: async () => expertService().getExpertTrades({ expertId }),
        staleTime: 1000 * 60 * 30,
        refetchOnMount: true,
        refetchOnWindowFocus: true
    });
}

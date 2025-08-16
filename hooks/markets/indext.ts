import { CryptocurrencyResponse, MarketDataResponse } from "@/services/market-data/types";
import { useQuery } from "@tanstack/react-query";
import { MarketService } from "@/services/market-data/index";

const marketService = () => new MarketService();

export function useCryptocurrencyData() {
  const { data, error, isLoading } = useQuery<CryptocurrencyResponse>(
   {
    queryKey: ["cryptocurrencies"],
    queryFn: async () => {
      return await marketService().getcryptodata();
    },
    refetchOnWindowFocus: false,
    retry: 1,
    staleTime: 1000 * 60 * 5, // 5 minutes
   }
  );

  return {
    data,
    error,
    isLoading,
  };
}

export function useMarketData() {
  const { data, error, isLoading } = useQuery<MarketDataResponse>(
    {
      queryKey: ["marketData"],
      queryFn: async () => {
        return await marketService().GetMarketData();
      },
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 * 5, // 5 minutes
    }
  );

  return {
    data,
    error,
    isLoading,
  };
}
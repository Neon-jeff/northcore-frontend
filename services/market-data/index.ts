import { http } from "@/api/http";
import { endpoints } from "@/api/endpoints";
// import { HTTPError } from "ky";
import { CryptocurrencyResponse, MarketDataResponse } from "./types";

export class MarketService {
  public async getcryptodata() {
    try {
      const response = http
        .get(endpoints.marketData.getCryptocurrencies)
        .json<CryptocurrencyResponse>();
      return response;
    } catch (error) {
      throw error;
    }
  }
  public async GetMarketData() {
    try {
      const response = http
        .get(endpoints.marketData.getAllMarketData)
        .json<MarketDataResponse>();
      return response;
    } catch (error) {
      throw error;
    }
  }
}

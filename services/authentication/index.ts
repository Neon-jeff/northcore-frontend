import { http } from "@/api/http";
import {
  AuthSuccessResponse,
  LoginRequestBody,
  RegisterRequestBody,
} from "./types";
import { endpoints } from "@/api/endpoints";
import { HTTPError } from "ky";

export class AuthService {
  public async login(data: LoginRequestBody) {
    try {
      const response = http
        .post(endpoints.auth.login, {
          json: data,
        })
        .json<AuthSuccessResponse>();
      return response;
    } catch (error) {
      throw error;
    }
  }
  public async register(data: RegisterRequestBody) {
    try {
      const response = http
        .post(endpoints.auth.register, {
          json: data,
        })
        .json<AuthSuccessResponse>();
      return response;
    } catch (error) {
      if (error instanceof HTTPError) {
        console.error("Registration error:", error);
        const errorResponse = await error.response.json();
        throw new Error(
          errorResponse.message || "An error occurred during registration"
        );
      }
      throw error;
    }
  }
  public async requestOTP(email: string) {
    try {
      const response = http
        .post(endpoints.auth.requestOTP, {
          json: { email },
        })
        .json<{ message: string }>();
      return response;
    } catch (error) {
      throw error;
    }
  }
  public async verifyOTP(data: { email: string; otp: string }) {
    try {
      const response = http
        .post(endpoints.auth.verifyOTP, {
          json: data,
        })
        .json<AuthSuccessResponse>();
      return response;
    } catch (error) {
      throw error;
    }
  }
}

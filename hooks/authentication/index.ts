import { AuthService } from "@/services/authentication";
import { LoginRequestBody, RegisterRequestBody } from "@/services/authentication/types";
import { useMutation, useQuery } from "@tanstack/react-query";

const authService = () => new AuthService();

export function useRegister(){
    return useMutation({
        mutationKey: ['register'],
        mutationFn: async(data:RegisterRequestBody)=>authService().register(data)
    })
}

export function useRequestOTP(){
    return useMutation({
        mutationKey: ['requestOTP'],
        mutationFn: async(email:string)=>authService().requestOTP(email)
    })
}

export function useLogin(){
    return useMutation({
        mutationKey: ['login'],
        mutationFn: async(data:LoginRequestBody)=>authService().login(data)
    })
}

export function useVerifyOTP(){
    return useMutation({
        mutationKey: ['verifyOTP'],
        mutationFn: async(data:{
            email:string;
            otp:string;
        })=>authService().verifyOTP(data)
    })
}

export function useGetUser(){
    return useQuery({
        queryKey: ['getUser'],
        queryFn: async()=>authService().getProfileData(),
        refetchInterval: 1000 * 60 * 60,
        retryOnMount:false,
        retry: false,
    })
}
import { SubscriptionService } from "@/services/subscriptions";
import { CreatSubscriptionBody } from "@/services/subscriptions/types";
import { useMutation, useQuery } from "@tanstack/react-query";

const subscriptionService = () => new SubscriptionService();

export function useCreateSubscription() {
    return useMutation({
        mutationFn: (data: CreatSubscriptionBody) => subscriptionService().createSubscription(data),
    })
}

export function useGetUserSubscription(params?: { user_id?: number; active_only: boolean }) {
    return useQuery({
        queryKey: ['userSubscription', params],
        queryFn: () => subscriptionService().getUserSubscription(params),
        retry:2
    })
}

export function useIsExpertSubscribed(expert_id:number) {
    const { data, isLoading } = useGetUserSubscription({ active_only: true });
    const isSubscribed = data?.subscriptions?.some(subscription => subscription.expert_id === expert_id);
    return { isSubscribed, isLoading };
}
import { SubscriptionService } from "@/services/subscriptions";
import { CreatSubscriptionBody } from "@/services/subscriptions/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useExperts } from "../experts";

const subscriptionService = () => new SubscriptionService();

export function useCreateSubscription() {
  return useMutation({
    mutationFn: (data: CreatSubscriptionBody) =>
      subscriptionService().createSubscription(data),
  });
}

export function useGetUserSubscription(params?: {
  user_id?: number;
  active_only: boolean;
}) {
  return useQuery({
    queryKey: ["userSubscription", params],
    queryFn: () => subscriptionService().getUserSubscription(params),
    retry: 2,
  });
}

export function useIsExpertSubscribed(expert_id: number) {
  const { data, isLoading } = useGetUserSubscription();
  const isSubscribed = data?.subscriptions?.some(
    (subscription) => subscription.expert_id === expert_id
  );
  return { isSubscribed, isLoading };
}

export function useUserExperts() {
  const { data } = useGetUserSubscription();
  const { data: expertsData } = useExperts();
  const experts =
    expertsData?.experts?.filter((expert) =>
      data?.subscriptions?.some(
        (subscription) => subscription.expert_id === expert.id
      )
    ) || [];

  return experts.map((expert) => ({
    ...expert,
    isActive: data?.subscriptions?.some(
      (subscription) =>
        subscription.expert_id === expert.id && subscription.is_active
    ),
  }));
}

import { useMutation } from "@tanstack/react-query";

export function useCopyToClipboard() {
  return useMutation({
    mutationFn: async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
      } catch (error) {
        console.error("Failed to copy text: ", error);
      }
    },
  });
}

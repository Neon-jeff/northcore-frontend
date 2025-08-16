import { User } from "@/services/authentication/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface UserData {
  token: string;
  isAuthenticated: boolean;
  data: User | null;
  rehydrated: boolean;
  setRehydrated: () => void;
}

interface UserActions {
  login: (token: string, user: User) => void;
  logout: () => void;
}

const initialState: UserData = {
  token: "",
  isAuthenticated: false,
  data: null,
  rehydrated: false,
  setRehydrated: () => {},
};

export const useUserStore = create<UserData & UserActions>()(
  persist(
    (set) => ({
      ...initialState,
      data: null,
      login: (token, user) => set({ token, isAuthenticated: true, data: user }),
      logout: () => set({ token: "", isAuthenticated: false, data: null }),
      setRehydrated: () => set({ rehydrated: true }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setRehydrated(); 
      },
    }
  )
);

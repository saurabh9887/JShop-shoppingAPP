import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useDialogStoreAdmin = create(
  persist(
    (set) => ({
      user: null,

      // ✅ When login/signup success
      authSuccess: (userData) => {
        set({ user: userData });
      },

      // ✅ Logout
      logout: () => {
        set({ user: null });
      },
    }),
    {
      name: "Admin_User", // key in localStorage
    }
  )
);

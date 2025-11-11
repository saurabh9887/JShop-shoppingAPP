import { create } from "zustand";

export const useDialogStoreAdmin = create((set) => ({
  user: null, // store actual user data instead of just boolean

  // ✅ When login/signup success
  authSuccess: (userData) => {
    // Store in localStorage
    localStorage.setItem("Admin_User", JSON.stringify(userData));

    // Update Zustand store
    set({
      user: userData,
    });
  },

  // ✅ Optional: load user from localStorage on app start
  loadUserFromStorageAdmin: () => {
    const storedUser = localStorage.getItem("Admin_User");
    if (storedUser) {
      set({ user: JSON.parse(storedUser) });
    }
  },

  // ✅ Optional: logout
  logout: () => {
    localStorage.removeItem("Admin_User");
    set({ user: null });
  },
}));

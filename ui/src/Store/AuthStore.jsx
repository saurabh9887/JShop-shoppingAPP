import { create } from "zustand";

export const useDialogStore = create((set) => ({
  isLoginOpen: false,
  isSignupOpen: false,
  user: null, // store actual user data instead of just boolean

  openLogin: () =>
    set({
      isLoginOpen: true,
      isSignupOpen: false,
    }),

  closeLogin: () => set({ isLoginOpen: false }),

  openSignup: () =>
    set({
      isSignupOpen: true,
      isLoginOpen: false,
    }),

  closeSignup: () => set({ isSignupOpen: false }),

  // ✅ When login/signup success
  authSuccess: (userData) => {
    // Store in localStorage
    localStorage.setItem("user", JSON.stringify(userData));

    // Update Zustand store
    set({
      user: userData,
      isLoginOpen: false,
      isSignupOpen: false,
    });
  },

  // ✅ Optional: load user from localStorage on app start
  loadUserFromStorage: () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      set({ user: JSON.parse(storedUser) });
    }
  },

  // ✅ Optional: logout
  logout: () => {
    localStorage.removeItem("user");
    set({ user: null });
  },
}));

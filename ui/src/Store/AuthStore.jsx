import { create } from "zustand";

export const useDialogStore = create((set) => ({
  isLoginOpen: false,
  isSignupOpen: false,

  openLogin: () =>
    set({
      isLoginOpen: true,
      isSignupOpen: false, // ensure only one open at a time
    }),
  closeLogin: () => set({ isLoginOpen: false }),

  openSignup: () =>
    set({
      isSignupOpen: true,
      isLoginOpen: false,
    }),
  closeSignup: () => set({ isSignupOpen: false }),
}));

import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: 'dark',
  toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
  setTheme: (theme) => set({ theme }),
}));

export const useNavigationStore = create((set) => ({
  activeSection: 'hero',
  setActiveSection: (section) => set({ activeSection: section }),
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
}));

export const useContactStore = create((set) => ({
  isSubmitting: false,
  submitStatus: null, // 'success' | 'error' | null
  setSubmitting: (status) => set({ isSubmitting: status }),
  setSubmitStatus: (status) => set({ submitStatus: status }),
  resetStatus: () => set({ submitStatus: null }),
}));

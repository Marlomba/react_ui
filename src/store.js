import create from 'zustand';

const useStore = create(set => ({
  username: '',
  password: '',
  currentForm: 'login',
  setUsername: (username) => set({ username }),
  setPassword: (password) => set({ password }),
  setCurrentForm: (currentForm) => set({ currentForm }),
}));

export default useStore;

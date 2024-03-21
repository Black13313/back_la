import { defineStore } from 'pinia';
import { UserModel } from '../models/UserModel.ts';

// Define UserModel if not already defined

const dbUsers: UserModel[] = [
  {
    name: 'Vixar',
    email: 'vixar@gmail.com',
    password: '123123',
    role: 'ADMIN'
  },
  {
    name: 'Black',
    email: 'black@gmail.com',
    password: '111111',
    role: 'STAFF'
  },
];

export const userStore = defineStore('user', {
  state: () => ({
    users: dbUsers.map(user => ({ ...user })), // Create a shallow copy of each user
    user: {} as UserModel,
    otp: {
      email: '',
      code: ''
    }
  }),
  actions: {
    isEmailAlreadyExist(email: string): boolean {
      return this.users.some(user => user.email === email);
    },
    login(email: string, password: string) {
      const user = this.users.find(u => u.email === email && u.password === password);

      this.user = { ...user }; // Set the logged-in user
      return 0; // Success
    },
    updateUser(updatedUser: UserModel) {
      const index = this.users.findIndex(user => user.email === updatedUser.email);
      if (index !== -1) {
        // Update user using spread syntax to maintain immutability
        this.users[index] = { ...this.users[index], ...updatedUser };
      }
    }
  },
  persist: {
    storage: localStorage
  }
});

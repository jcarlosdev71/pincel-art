// Utilities
import { defineStore } from 'pinia'
import accountService, { RegisterUserResponse, RegisterUserRequest } from '@/services/account.service';

export type AccountState = {
  user : RegisterUserResponse
}

export const defaultUser : RegisterUserResponse = {
  id : '',
  name : '',
  lastName: '',
  password: '',
  confirmPassword: '',
  dni : '',
  email : '',
}

export const useAccountStore = defineStore('app', {
  state: () => ({
    user : {...defaultUser} ,
  } as AccountState),
  actions: {
    async register(user: RegisterUserRequest){
      try{
        this.user = await accountService.register(user)
      } catch (error){
        return Promise.reject(error)
      }
    },
  }
})

import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID)

export const account = new Account(client);

export default client

// import {Client,Account,ID} from "appwrite"

// export class AuthService {
//     client = new Client()
//     account

//     constructor(){
//         this.client
//         .setEndpoint(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID)
//         .setProject(import.meta.env.VITE_APP_APPWRITE_URL);
//         this.account = new Account(this.client)
//     }
//     async createAccount({email,password,name}){
//         try{
//            const userAccount =  await this.account.create(ID.unique(),email,password,name)
//             if(userAccount){
//                 return this.login({email,password})
//             }
//             else{
//                 return userAccount
//             }
//         }
//         catch(error){
//             throw error;
//         }
//     }

//     async login({email,password}){
//         try{
//         return await this.account.createEmailPasswordSession(email,password)}
//         catch(error){
//             throw error
//         }
//     }

//     async getCurentUser(){
//         try{
//             return await this.account.get()

//         }
//         catch(error){
//             console.log("Appwrite service::getCurrentUser",error)
//         }
//         return null;
//     }

//     async logout(){
//         try{
//             this.account.deleteSessions()
//         }
        
//         catch(error){
//             console.log("logout errror",error)
//         }
//     }

// }

// const authService = new AuthService()

// export default authService



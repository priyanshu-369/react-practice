import config from "../config/config.js"

import { Client, Account, ID } from "appwrite";
// from the official document
// const client = new Client()
//     .setProject(config.appwriteProjectId); // Your project ID

// const account = new Account(client);

// const promise = account.create('[USER_ID]', 'email@example.com', '');

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });


export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            
            if(userAccount){
                //method will be called soon 
            this.login({email, password})
            }else{
                return userAccount
            }
        } catch (error) {
            throw error   
        }
    }

    async login({email, password}){
        try {
        return await this.account.createEmailPasswordSession(email, password)            
    } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: ERROR :: ",error)
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: ERROR :: ",error)
        }
        return null
    }

    async logout(){
        try {
            await this.account.deleteSession()
        } catch (error) {
            console.log("Appwrite service :: logout ERROR :: ",error)
        }
    }
}

const authService = new AuthService()
export default authService
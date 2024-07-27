import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint(import.meta.env.VITE_APP_APPWRITE_URL)
    .setProject(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID)

export const account = new Account(client);

export default client

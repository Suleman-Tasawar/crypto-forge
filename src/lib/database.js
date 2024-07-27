import { Client,Databases } from "appwrite";

const client = new Client()
    .setEndpoint(import.meta.env.VITE_APP_APPWRITE_URL)
    .setProject(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID)

export const databases = new Databases(client);

export default client
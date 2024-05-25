import { Client, Databases } from 'appwrite';
const client = new Client();

client
    .setEndpoint(import.meta.VITE_ENDPOINT)
    .setProject(import.meta.VITE_PROJECT_ID);

const databases = new Databases(client);

export { client, databases };
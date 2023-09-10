import axios from 'axios';

export const api  = axios.create({
    baseURL: SUPABASE_URL,
    headers: {
        apikey: SUPABASE_KEY,
        authorization: SUPABASE_AUTH
    }
})
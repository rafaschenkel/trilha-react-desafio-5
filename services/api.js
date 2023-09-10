import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://ojzhcxrufolkyqfgdwmi.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qemhjeHJ1Zm9sa3lxZmdkd21pIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NDMwMzQ1OSwiZXhwIjoyMDA5ODc5NDU5fQ.akD5buAjTZlZEX97_sDupwYAZs3VC33k-M6w6EDmXAo",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qemhjeHJ1Zm9sa3lxZmdkd21pIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NDMwMzQ1OSwiZXhwIjoyMDA5ODc5NDU5fQ.akD5buAjTZlZEX97_sDupwYAZs3VC33k-M6w6EDmXAo"
    }
})
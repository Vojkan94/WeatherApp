const headers = {
    'Content-Type': 'application/json',
}
class ApiService {
    async get(API_ENDPOINT){
        console.log("ej")
        const response = await fetch(API_ENDPOINT);
        return await response.json();

        
    }
}

export const apiService = new ApiService();

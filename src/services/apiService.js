class ApiService {
    async get(API_ENDPOINT){
        const response = await fetch(API_ENDPOINT);
        return await response.json();
    }
}

export const apiService = new ApiService();

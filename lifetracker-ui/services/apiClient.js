import axios from "axios"

class ApiClient {
    constructor(remoteHostUrl){
        this.remoteHostUrl = remoteHostUrl
        this.token = null
    }
    setToken(token){
        this.token = token
    }

    async request({endpoint, method = 'GET', data ={}}){
        const url = `${this.remoteHostUrl}/${endpoint}`

        const headers ={
            "Content-Type": "application/json"
        }
        if(this.token){
            headers["Authorization"] = `Bearer ${this.token}`
        }

        try {
            const res = await axios({url, method, data, headers});
            return {data: res.data, error:null};
        }
        catch(err){
            console.log(err);
            return {data:null, error:err};
        
        }
    }
     //Sends a request to Auth/Login
     static async login(credentials){
        return await this.request({endpoint: 'auth/login', method:'POST', data:credentials})
    }

    static async signup(credentials){
        return await this.request({endpoint: 'auth/register', method:'POST', data:credentials})
    }
    
    static async fetchUserFromToken(){
        try {
            const request = await this.request("http://localhost:3001/auth/me")
            return request.data;
        }
        catch(err){
            return err;
        }
    }
}

export default new ApiClient(process.env.REACT_APP_REMOTE_HOST_URL || "http://localhost:3001")
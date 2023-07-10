import axios, { type AxiosInstance } from "axios"
import { env } from '$env/dynamic/public';

export class Client {
    private http: AxiosInstance
    constructor() {
        this.http = axios.create({baseURL: env.PUBLIC_SERVER_ID})
    }

    async getWatches() {
        return await this.http.get("watch")
    }

    async getWatch(id: string) {
        return await this.http.get("watch", {params: { id }})
    }

    async createWatch(data: object) {
        return await this.http.post("watch", 
            data
        )
    }

    async updateWatch(data: object) {
        return await this.http.put("watch", data)
    }

    async deleteWatch(data: object) {
        return await this.http.delete("watch", { data })
    }

}
import axios, { type AxiosInstance } from "axios"
import { env } from '$env/dynamic/public';
import WatchRoute from "./watch";

export class Client {
    private http: AxiosInstance
    public watch: WatchRoute
    constructor() {
        this.http = axios.create({baseURL: env.PUBLIC_SERVER_ID})
        this.watch = new WatchRoute(this.http)
    }


}


const client = new Client()
export default client
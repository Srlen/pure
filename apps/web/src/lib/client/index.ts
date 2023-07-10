import axios from "axios"
import { env } from '$env/dynamic/public';

export class Client {
    constructor(private ip: string) {
        this.http = axios.create({baseURL: env.PUBLIC_SERVER_IP})

    }
}
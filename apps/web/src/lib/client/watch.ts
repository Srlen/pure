import type { AxiosInstance } from 'axios';

export default class WatchRoute {
	public route: string = 'watch';
	constructor(private http: AxiosInstance) {}
	async getWatches() {
		return await this.http.get(this.route);
	}

	async getWatch(id: string) {
		return await this.http.get(this.route, { params: { id } });
	}

	async createWatch(data: object) {
		return await this.http.post(this.route, data);
	}

	async updateWatch(data: object) {
		return await this.http.put(this.route, data);
	}

	async deleteWatch(id: string) {
		return await this.http.delete(this.route, { data: { id } });
	}
}

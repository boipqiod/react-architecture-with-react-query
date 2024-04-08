import {Request} from "../core/module/Request.ts";

export class RequestImpl implements Request {
    async get<T>(url: string): Promise<T> {
        const response = await fetch(url);
        return await response.json() as T;
    }
}

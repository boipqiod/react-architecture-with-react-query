export interface Request{
    get: <T>(url: string) => Promise<T>;
}

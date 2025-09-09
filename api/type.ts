export interface APIResponse<T> {
    success: boolean;
    message?: string;
    data?: T;
    error?: string;
    status?: number;
    detail?: string;
}
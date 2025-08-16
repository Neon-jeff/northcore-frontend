import { HTTPError, KyRequest, NormalizedOptions } from "ky";
import { APIResponse } from "./type";

export class APIError extends HTTPError {
    status: number;
    data: APIResponse<unknown>;
    request: KyRequest;
    response: Response;
    options: NormalizedOptions;

    constructor(message: string, status: number, data: APIResponse<unknown>, request: KyRequest, response: Response, options: NormalizedOptions) {
        super(response, request, options);
        this.name = "APIError";
        this.status = status;
        this.data = data;
        this.request = request;
        this.response = response;
        this.options = options;
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
    }

    toString() {
        return `${this.name} (status ${this.status}): ${this.message}`;
    }
}
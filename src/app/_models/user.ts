import { Observable } from "rxjs";
import { INTEREST } from "./interests";

export class USER {
    id?: number;
    username: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    interests?: any;
}
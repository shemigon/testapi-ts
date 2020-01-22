import { IClientData } from "./IClientData";

export class ClientData implements IClientData {
    clientId: string;
    firstName: string;
    lastName: string;

    constructor(data: string) {
        this.parse(data);
    }

    static isValid(data: string): boolean {
        return data.length === 25;
    }

    parse(data: string) {
        if (!ClientData.isValid) {
            throw new Error("Error parsing client data");
        }
        this.firstName = data.slice(0, 8);
        this.lastName = data.slice(8, 18);
        this.clientId = data.slice(18);
    }

}

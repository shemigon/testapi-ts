import { ClientData } from "./ClientData";

export class ClientDataV2 extends ClientData {
    parse(data: string) {
        super.parse(data);

        const trimRight = (s: string): string => {
            return s.replace(new RegExp("[0]+$"), "");
        };

        this.firstName = trimRight(this.firstName);
        this.lastName = trimRight(this.lastName);
        const currentClientId = this.clientId;
        this.clientId = currentClientId.slice(0, 3) + "-" + currentClientId.slice(3);
    }
}

import express from "express";
import { ClientData } from "./classes/ClientData";
import { ClientDataV2 } from "./classes/ClientDataV2";

import { Version } from "./types/Version";

export function parseRequest(version: Version = Version.v1) {
    const getParsingClass = () => {
        switch (version) {
            case Version.v1:
                return ClientData;
            case Version.v2:
                return ClientDataV2;
            default:
                throw new Error("Unknown API version");
        }
    };
    return (req: express.Request, res: express.Response) => {
        // assuming incoming data is a fixed-width string
        try {
            const data = req.body.data;
            if (!ClientData.isValid(data)) {
                return res.sendStatus(400);
            }
            return res.json({
                'statusCode': 200,
                'data': new (getParsingClass())(data),
            });

        } catch (e) {
            return res.sendStatus(400);
        }
    };
}

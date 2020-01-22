import express from "express";
import { ClientData, ClientDataV2 } from "./classes";

function getVersioned(req: express.Request, arg1: any, ...args: any[]) {
    const version = parseInt(req.params.V, 10);
    if (version === undefined) {
        throw new Error("Url ${url} must contain version (:V) parameter.");
    }
    if (version === 1) {
        return arg1;
    }
    return args[(version - 1) - 1] || args[args.length - 1];
}

export function parseClient(req: express.Request, res: express.Response) {
    const parsingClass = getVersioned(req, ClientData, ClientDataV2);

    try {
        const data = req.body.data;
        if (!ClientData.isValid(data)) {
            return res.sendStatus(400);
        }
        return res.json({
            'statusCode': 200,
            'data': new parsingClass(data),
        });

    } catch (e) {
        return res.sendStatus(400);
    }
}

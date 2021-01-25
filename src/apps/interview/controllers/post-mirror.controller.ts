import { Request, Response } from "express";
import { injectable } from "inversify";

@injectable()
export class PostMirrorController {
    async run(req: Request, res: Response): Promise<void> {
        const { body }: any = req;
        res.send(body);
    }
}

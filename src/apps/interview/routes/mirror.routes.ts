import { Request, Response, Router } from "express";
import { PostMirrorController } from "../controllers/post-mirror.controller";
import {container} from '../dependency-injection/inversify.config';
import { TYPES } from "../dependency-injection/types";

export function register(router: Router): void {
    const postMirrorController = container.get<PostMirrorController>(TYPES.PostMirrorController);
    router.post('/mirror', (req: Request, res: Response) => postMirrorController.run(req, res));
}
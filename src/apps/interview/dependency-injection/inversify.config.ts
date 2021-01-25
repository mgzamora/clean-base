import "reflect-metadata";
import { Container } from "inversify";
import { PostMirrorController } from '../controllers/post-mirror.controller'
import { TYPES } from "./types";

const container = new Container();
container.bind<PostMirrorController>(TYPES.PostMirrorController).to(PostMirrorController);

export { container };
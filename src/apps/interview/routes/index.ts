import { Router } from 'express';
import { register as mirrorRegister }   from './mirror.routes';

export function registerRoutes(router: Router) : void {
    mirrorRegister(router);
}
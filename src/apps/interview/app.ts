import bodyParser from 'body-parser';
import express, { Router, Request, Response } from 'express';
import { registerRoutes } from './routes';

const app: express.Express  = express();
const port : number = 3000;
app.set('port', port);

const router : Router = Router();
registerRoutes(router);

app.use(bodyParser.json())
app.use(router);

app.use((err: any, req: Request, res: Response) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

export default app;
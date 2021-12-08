import express, { Request, Response, Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';

import { serviceRoutes } from './routes/serviceRoutes';

export const getApplication = (): Express => {
  const app = express()
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(morgan('dev'))
    .use(compression())
    .get('/', (req: Request, res: Response) => {
      res.status(200).send('OK');
    })
    .use('/api/v1/services', serviceRoutes);
  return app;
};

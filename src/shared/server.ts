import 'reflect-metadata';

import express from 'express';
import swaggerUI from 'swagger-ui-express';

import { routes } from '@shared/routes';

import swaggerDocs from './swagger.json';

import '@shared/typeorm';
import '@shared/container';

const app = express();

app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);

app.listen(3333, () => console.log('🚀 Server started on port 3333!!!'));

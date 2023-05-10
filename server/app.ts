import * as dotenv from 'dotenv';
dotenv.config();
import * as express from 'express';
import * as morgan from 'morgan';
import * as path from 'path';

import { connectToMongo } from './mongo';
import setRoutes from './routes';

const app = express();
app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

setRoutes(app);

const main = async (): Promise<any> => {
  try {
    await connectToMongo();
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    app.listen(app.get('port'), '0.0.0.0', () => console.log(`Max Rougue listening on port ${app.get('port')}`));
  } catch (err) {
    console.error(err);
  }
};
console.log('env', process.env.NODE_ENV );
if (process.env.NODE_ENV !== 'test') {
  main();
}

export { app };

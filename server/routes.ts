import { Router, Application } from 'express';

import FileCtrl from './controllers/fileCtrl';

const setRoutes = (app: Application): void => {
  const router = Router();
  const fileCtrl = new FileCtrl();

  //Upload & Donwlaod
  router.route('/upload/file').post(fileCtrl.upload);
  router.route('/file/:file').get(fileCtrl.getFile);
  router.route('/download/file/:file').get(fileCtrl.getFileDownload);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

};

export default setRoutes;

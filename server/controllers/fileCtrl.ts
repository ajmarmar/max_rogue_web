// getFile

import * as multer from 'multer';
import * as fs from 'fs';
import * as path from 'path';
import { Request, Response } from 'express';

export default class FileCtrl {

  private storage = multer.diskStorage({
      destination:  (req: any, file: any, cb: any) => {
        console.log('destination');
        if (!fs.existsSync(process.env.UPLOADFILES || '')) {
          fs.mkdirSync(process.env.UPLOADFILES || '');
        }
        cb(null, process.env.UPLOADFILES);
      },
      filename: (req: any, file: any, cb: any) => {
        console.log('filename');

          const datetimestamp = Date.now();

          let fileUpload = (file.originalname).normalize('NFD').replace(/[\u0300-\u036f]/g, '');
          if (fs.existsSync(process.env.UPLOADFILES+'/'+file.originalname)) {
            const pos= file.originalname.lastIndexOf('.');
            fileUpload = file.originalname.substr(0,pos) + '-' + datetimestamp + '.' +
                         file.originalname.split('.')[file.originalname.split('.').length - 1];
          }
          cb(null,fileUpload);
          //cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
      }
  });

  private uploadMulter = multer({ storage: this.storage,
                          limits: { fileSize: parseInt(process.env.MAX_FILE_SIZE || '1024', 10) }}).single('fileKey');

  getFile = (req: Request, res: Response) => {
    const pathFile = path.join(__dirname, '../../../' + process.env.UPLOADFILES) + '/' + req.params.file;
    return res.sendFile(pathFile);
     //res.status(200).json({test: true})
  };

  getFileDownload= (req: Request, res: Response) => {
    const pathFile = path.join(__dirname, '../../../' + process.env.UPLOADFILES) + '/' + req.params.file;
    return res.download(pathFile, req.params.file);
  };

  upload = (req: any, res: Response) => {
    console.log('estoy aqui', process.env.UPLOADFILES);
    this.uploadMulter(req, res, (err: any) => {
        console.log('estoy en multer');
        if (err) {
          console.log({err});
          return res.status(400).json({code: 400, message: err});
        } else {
          //return res.json({fileName: req.file.filename });
          return res.json({fileName: req.file.filename });
        }
    });
  };
}

/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import  { NextFunction, Request, Response} from 'express'
import http from 'http-status'
const notFound =(req: Request, res: Response, next: NextFunction) => {

    
     res.status(http.NOT_FOUND).json({
        success: false,
        message: 'api endpoint not found',
        error: ''
    });
  
  }
  export default notFound;
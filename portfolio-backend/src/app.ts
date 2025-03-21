import express, { Application, Request, Response,  } from 'express'
import router from './app/routes'
import globalErrorHandler from './app/middlewares/globalErrorhandler'
import notFound from './app/middlewares/notFound'
import cookieParser from 'cookie-parser'
import cors from 'cors'; 
import httpStatus from 'http-status'


const app: Application = express()
app.use(cors({origin:"https://eid-portfolio.vercel.app/", credentials: true}))
app.use(express.json())
app.use(cookieParser())
app.use('/api/',router )
app.get("/", (req: Request, res: Response) => {

    res.status(httpStatus.OK).json({
      success: true,
      message: "Welcome to My Portfolio Database",
      developerContact: {
        email: "junaeidahmed979@gmail.com",
      },
    });
  });
app.use(notFound)
app.use(globalErrorHandler)

export default app


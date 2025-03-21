
import Express from "express"
import { messageController } from "./m.controller"

const router = Express.Router()
router.post('/',  messageController.createMessage)
router.get('/',  messageController.getAllMessage)
export const messageRoute = router 
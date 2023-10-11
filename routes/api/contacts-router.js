import express from "express";
// import { isEmptyBody } from '../../midllewares/index.js'
import contactsControllers from '../../controllers/contact-controller.js'

const contactsRouter = express.Router()

contactsRouter.get('/', contactsControllers.getAll)

contactsRouter.get('/:contactId', contactsControllers.getAll)

contactsRouter.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

contactsRouter.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

contactsRouter.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

export default contactsRouter;

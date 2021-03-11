import { Router } from 'express'

import upload from './uploadMiddleware.js'

const router = Router()

router.post('/', upload.single('media'), (req, res) => {
  try {
    res.json(req.file)
  } catch (e) {
    console.log(e)
  }
})

export default router
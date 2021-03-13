import { Router } from 'express'

import upload from './uploadMiddleware.js'

const router = Router()

router.post('/', upload.single('media'), (req, res) => {
  try {
    const { title } = req.body
    const { filename: media } = req.file

    res.json({
      title,
      media
    })
  } catch (e) {
    console.log(e)
  }
})

export default router
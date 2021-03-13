import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    const fileNameArr = file.originalname.split('.')
    const ext = fileNameArr[fileNameArr.length - 1]
    cb(null, `${uuidv4()}.${ext}`)
  }
})

const fileFilter = (req, file, cb) => {
  if(file.mimetype.includes('image') || file.mimetype.includes('video')) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const upload = multer({
  storage,
  fileFilter
})

export default upload
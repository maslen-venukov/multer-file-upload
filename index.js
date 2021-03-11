import express from 'express'

import router from './router.js'

const app = express()

app.use(express.json())
app.use('/uploads', express.static('uploads'))

app.use('/', router)

app.listen(5000, () => console.log('Server started'))
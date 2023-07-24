import express from 'express'
import { AppSource } from './util/database'
import { Course } from './model/course'
import { fetchCoursesAndStore } from './data-handler/fetch-store-data'
import { companyRouter } from './routes/company'
import { participantRouter } from './routes/participant'
import { courseRouter } from './routes/course'
import { appRouter } from './routes/application'

const app = express()
app.use(express.json())
app.use(companyRouter)
app.use(participantRouter)
app.use(courseRouter)
app.use(appRouter)

AppSource.initialize()
  .then(async () => {
    await Course.delete({})
    app.listen(3000, () => {
      console.log('Server is running on port 3000')
    })
    console.log('Connected to DB')
    await fetchCoursesAndStore()
    console.log('Successfully stored data!')
  })
  .catch((err) => {
    console.log(err)
  })

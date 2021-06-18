// importing packages
import express from 'express'
import dotenv from 'dotenv'

// importing files
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import postRouter from './routes/post.js'
import userRouter from './routes/user.js'
import connectDB from './config/db.js'

// dot env file initialize
dotenv.config()

// express app initialize
const app = express()

// database connection
connectDB()

// body parser
app.use(express.json())

// routers
app.use('/api/posts', postRouter)
app.use('/api/users', userRouter)

// not found
app.use(notFound)

// error
app.use(errorHandler)

// port
const PORT = process.env.PORT || 5000

// app listening
app.listen(PORT, () =>
    console.log(
        `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
)

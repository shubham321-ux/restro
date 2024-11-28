import app from './app.js'

const conection = async()=>{
    await app.listen(process.env.PORT)
    console.log(`server start at ${process.env.PORT}`)
}
 conection()

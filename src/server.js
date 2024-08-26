import "dotenv/config"
import express, { response }   from "express"
import  cors  from "cors"

// importação das rotas 
import tarefaRouter from './routes/tarefaRouter.js'

const PORT = process.env.PORT
const app = express()


//3 middlewares 
app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use("/tarefas", tarefaRouter)

app.use((request, response)=>{
    response.status(404).json({message:"Rota não encontrada"})
})

app.listen(PORT,()=>{
    console.log(`Servidor on http://localhost:${PORT}`)
})
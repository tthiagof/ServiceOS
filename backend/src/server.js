import "dotenv/config"
import express, { urlencoded } from "express"
import cors from "cors"
import { Client } from "./schemas/User.Schema.js"
import { connectDB } from "./database/database.js"

import authRouter from "./routes/auth.js"
import { authenticateToken } from "./middleware/authMiddleware.js"

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(urlencoded())
app.use(cors())

connectDB()

app.use("/", authRouter)

app.get("/",authenticateToken, async(req, res) => {
    
    try {
        const clients = await Client.find()
        res.status(201).json(clients)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    
})

app.post("/", async(req, res) => {
    try {
    const client = await Client.create(req.body);
    res.status(201).json(Client);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} [✓]`)
})
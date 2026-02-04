import "dotenv/config"
import express from "express"
import jwt from "jsonwebtoken"

const router = express.Router()

router.post("/login", (req, res) => {
    const {username, password} = req.body

    const mockUser = { id: 1, username: 'admin', password: '123' }

    if (username === mockUser.username && password === mockUser.password) {
        const payload = { id: mockUser.id, username: mockUser.username }
        
        const token = jwt.sign(payload, process.env.JWT_SECRET, { 
            expiresIn: '5min' 
        });

        return res.status(201).json({ auth: true, token: token })
    }

    res.status(401).json({ message: 'Login inválido!' })

})

export default router
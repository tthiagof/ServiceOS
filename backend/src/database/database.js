import "dotenv/config"
import mongoose from "mongoose"

const URL = process.env.URL_DB

export const connectDB = async () => {
    try {
        mongoose.connect(URL)
        console.log("Conectado com o mongoDB[ yes ]")
    } catch (error) {
        console.log(`Conectado com o mongoDB[ no ]: ${error}`)
    }
}


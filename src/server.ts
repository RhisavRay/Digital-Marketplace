import express from "express"
import { getPayloadClient } from "./get-payload"

const app = express()

const PORT = Number(process.env.PORT) || 3000
// Says that the port will be 3000 by default in development mode, and a port for production will be given later on

const start = async() => {
    const payload = await getPayloadClient()
}

start()
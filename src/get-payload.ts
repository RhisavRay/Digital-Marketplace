import dotenv from "dotenv"
import { init } from "next/dist/compiled/webpack/webpack"
import path from "path"
import payload from "payload"
import { InitOptions } from "payload/config"

dotenv.config({
    path: path.resolve(__dirname, "../.env")
})

let cached = (global as any).payload

if(!cached)
{
    cached = (global as any).payload = {
        client: null,
        promise: null
    }
}

interface Args
{
    initOptions?: Partial<InitOptions>
}

export const getPayloadClient = async({ initOptions }: Args = {}) => {
    if(!process.env.PAYLOAD_SECRET)
        throw new Error("Missing PAYLOAD_SECRET environment variable")

    if(cached.client)
        return cached.client

    if(!cached.promise)
        cached.promise = payload.init({
            secret: process.env.PAYLOAD_SECRET,
            local: initOptions?.express ? false : true,
            ...(initOptions || {})
        })

    try {
        await cached.client = await cached.promise
    } catch (e: unknown) {
        cached.promise = null
        throw e
    }

    return cached.client
}
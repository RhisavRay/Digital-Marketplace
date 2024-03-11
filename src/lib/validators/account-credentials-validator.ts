import { z } from "zod"

export const AuthCredentialValidator = z.object({
    email: z.string().email(),
    password: z.string()
        .min(8, {
            message: 'Pasword must be atleast 8 characters long'
        })
})

export type TAuthCredentialValidator = z.infer<typeof AuthCredentialValidator>
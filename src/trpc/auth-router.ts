import { AuthCredentialValidator } from "@/lib/validators/account-credentials-validator";
import { publicProcedure, router } from "./trpc";

export const authRouter = router({
    createPayloadUser: publicProcedure.input(AuthCredentialValidator)
})
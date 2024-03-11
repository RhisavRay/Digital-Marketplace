import { publicProcedure, router } from "./trpc";

export const appRouter = router({
    AnyApiRoute: publicProcedure.query(() => {
        return "hello"
    })
})
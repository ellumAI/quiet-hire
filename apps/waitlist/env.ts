import { z } from "zod"
import { createEnv } from "@t3-oss/env-nextjs"

export const env = createEnv({
    server: {
        MONGODB_URI: z.string(),
    },
    experimental__runtimeEnv: process.env
})
import { z } from "zod";

const variables = z.object({
  ENVIRONMENT: z.enum(["local", "development", "preview", "production"]),
  CONVEX_DEPLOYMENT: z.string(),
  NEXT_PUBLIC_CONVEX_URL: z.string(),
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
  CLERK_SECRET_KEY: z.string(),
});

variables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof variables> {}
  }
}

export default variables;

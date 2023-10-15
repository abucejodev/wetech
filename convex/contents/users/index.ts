import { Infer, v } from "convex/values";

const users = v.object({
  name: v.string(),
  email: v.string(),
  tokenIdentifier: v.string(),
});

export default users;

export type User = Infer<typeof users>;

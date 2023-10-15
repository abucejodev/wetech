import { defineSchema, defineTable } from "convex/server";
import users from "./contents/users";

export default defineSchema({
  users: defineTable(users).index("by_token", ["tokenIdentifier"]),
});

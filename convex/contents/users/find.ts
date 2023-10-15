import { query } from "../../_generated/server";

export const single = query({
  args: {},
  handler: async ({ db }) => {
    const user = await db.query("users").collect();
    return user;
  },
});

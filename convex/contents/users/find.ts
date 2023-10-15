import { mutation, query } from "../../_generated/server";

export const single = mutation({
  args: {},
  handler: async ({ db, auth }, {}) => {
    console.log("User");
  },
});

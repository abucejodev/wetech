import { mutation } from "../../_generated/server";

export const single = mutation({
  args: {},
  handler: async ({ db, auth }, {}) => {
    const identity = await auth.getUserIdentity();
    if (!identity) {
      throw new Error("Called storeUser without authentication present");
    }

    const user = await db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier),
      )
      .unique();

    // ? !!!
    // if (user) {
    //   if (user.name !== identity.name) {
    //     await db.patch(user._id, { name: identity.name });
    //   }
    //   return user._id;
    // }

    return await db.insert("users", {
      name: identity.name ?? "--",
      email: identity.email ?? "@",
      tokenIdentifier: identity.tokenIdentifier,
    });
  },
});

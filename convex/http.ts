import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";

const http = httpRouter();

http.route({
  path: "/hello",
  method: "GET",
  handler: httpAction(async () => {
    return new Response("Hello From Wetech", {
      status: 200,
    });
  }),
});

export default http;

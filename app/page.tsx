"use client";

import { api } from "@/convex/_generated/api";
import { Button } from "@nextui-org/react";
import { useConvexAuth, useQuery } from "convex/react";
import { useRouter } from "next/navigation";

const Home: Page = () => {
  const { isAuthenticated } = useConvexAuth();

  const user = useQuery(api.contents.users.find.single);

  console.log({ user });

  const router = useRouter();

  return (
    <div className="grid h-screen items-center">
      {isAuthenticated ? (
        <Button onClick={() => router.push("/portal")} className="mx-auto">
          Portal
        </Button>
      ) : (
        <Button onClick={() => router.push("/auth")} className="mx-auto">
          Sign In
        </Button>
      )}
    </div>
  );
};

export default Home;

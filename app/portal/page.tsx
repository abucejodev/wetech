"use client";

import { SignOutButton, useUser } from "@clerk/nextjs";
import { Button, User } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const Portal: Page = () => {
  const router = useRouter();
  const { user } = useUser();

  return (
    <div className="grid h-screen items-center">
      <div className="mx-auto max-w-xs">
        <User
          name="Hello"
          avatarProps={{
            src: user?.imageUrl,
          }}
        />
        <Button fullWidth onClick={() => router.push("/")}>
          <SignOutButton />
        </Button>
      </div>
    </div>
  );
};

export default Portal;

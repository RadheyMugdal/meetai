"use client";
import { Button } from "@/components/ui/button";
import { authClient, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";

const HomeView = () => {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  if (!session) {
    return <p>Loading...</p>;
  }
  return (
    <div className=" flex  flex-col gap-y-4 p-4">
      <p>Logged in as {session.user.name}</p>
      <Button
        onClick={() => {
          signOut(
            {},
            {
              onSuccess(context) {
                router.push("/sign-in");
              },
            }
          );
        }}
      >
        Sign out
      </Button>
    </div>
  );
};

export default HomeView;

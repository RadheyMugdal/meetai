"use client";
import { Button } from "@/components/ui/button";
import { authClient, signOut } from "@/lib/auth-client";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

const HomeView = () => {
  const { data: session } = authClient.useSession();
  const trpc = useTRPC();
  const { data } = useQuery(trpc.hello.queryOptions({ text: "Radhey" }));
  const router = useRouter();
  if (!session) {
    return <p>Loading...</p>;
  }
  return <div>{data?.greeting}</div>;
};

export default HomeView;

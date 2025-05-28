"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { Input } from "@/components/ui/input";
import { signIn, signOut, signUp, useSession } from "@/lib/auth-client";

const Home = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const { data: session } = useSession();
  const [password, setPassword] = React.useState("");
  const onSignUp = () => {
    signUp.email(
      {
        email,
        name,
        password,
      },
      {
        onError: (ctx) => {
          window.alert(ctx.error.message);
        },
        onSuccess(context) {
          window.alert("success");
        },
        onRequest(context) {},
      }
    );
  };
  const onLogin = () => {
    signIn.email(
      {
        email,
        password,
      },
      {
        onSuccess(context) {
          window.alert("success");
        },
        onError(context) {
          window.alert(context.error.message);
        },
      }
    );
  };

  if (session) {
    return (
      <div className=" flex  flex-col gap-y-4 p-4">
        <p>Logged in as {session.user.name}</p>
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    );
  }

  return (
    <div className=" flex flex-col gap-y-10">
      <div className=" p-4 flex flex-col gap-y-4">
        <Input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={onSignUp}>Create user</Button>
      </div>
      <div className=" p-4 flex flex-col gap-y-4">
        <Input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={onLogin}>Login</Button>
      </div>
    </div>
  );
};

export default Home;

"use client";
import React, { useEffect, useState } from "react";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import {
  Call,
  CallingState,
  StreamCall,
  StreamVideo,
  StreamVideoClient,
} from "@stream-io/video-react-sdk";
import { LoaderIcon } from "lucide-react";
import CallUI from "./call-ui";

interface Props {
  meetingId: string;
  meetingName: string;
  userId: string;
  userName: string;
  userImage: string;
}

const CallConnect = ({
  meetingId,
  meetingName,
  userId,
  userName,
  userImage,
}: Props) => {
  const trpc = useTRPC();
  const { mutateAsync: generateToken } = useMutation(
    trpc.meetings.generateToken.mutationOptions()
  );
  const [client, setClient] = useState<StreamVideoClient>();
  useEffect(() => {
    const client = new StreamVideoClient({
      apiKey: process.env.NEXT_PUBLIC_STREAM_VIDEO_API_KEY!,
      user: {
        id: userId,
        name: userName,
        image: userImage,
      },
      tokenProvider: generateToken,
    });

    setClient(client);
    return () => {
      client.disconnectUser();
      setClient(undefined);
    };
  }, [userId, userName, userImage, generateToken]);

  const [call, setCall] = useState<Call>();
  useEffect(() => {
    if (!client) return;
    const call = client.call("default", meetingId);
    call.camera.disable();
    call.microphone.disable();
    setCall(call);
    return () => {
      if (call.state.callingState !== CallingState.LEFT) {
        call.leave();
        call.endCall();
        setCall(undefined);
      }
    };
  }, [client, meetingId]);

  if (!client || !call) {
    return (
      <div className=" flex h-screen items-center justify-center bg-radial from-sidebar-accent to-sidebar">
        <LoaderIcon className=" size-6 animate-spin text-white" />
      </div>
    );
  }
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <CallUI meetingName={meetingName} />
      </StreamCall>
    </StreamVideo>
  );
};

export default CallConnect;

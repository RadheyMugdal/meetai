"use client";
import ResponsiveDialog from "@/components/responsive-dialog";
import React from "react";
import MeetingForm from "./meeting-form";
import { useRouter } from "next/navigation";

interface NewMeetingDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewMeetingDialog = ({ open, setOpen }: NewMeetingDialogProps) => {
  const router = useRouter();
  return (
    <ResponsiveDialog
      open={open}
      onOpenChange={setOpen}
      title="New Meeting"
      description="Create a new meeting"
    >
      <MeetingForm
        onSuccess={(id) => {
          setOpen(false);
          router.push(`/meetings/${id}`);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </ResponsiveDialog>
  );
};

export default NewMeetingDialog;

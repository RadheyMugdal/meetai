import ResponsiveDialog from "@/components/responsive-dialog";
import React from "react";
import AgentForm from "./agent-form";

interface NewAgentDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewAgentDialog = ({ open, setOpen }: NewAgentDialogProps) => {
  return (
    <ResponsiveDialog
      open={open}
      onOpenChange={setOpen}
      title="New Agent"
      description="Create a new agent"
    >
      <AgentForm
        onSuccess={() => {
          setOpen(false);
        }}
        onError={() => {
          setOpen(false);
        }}
      />
    </ResponsiveDialog>
  );
};

export default NewAgentDialog;

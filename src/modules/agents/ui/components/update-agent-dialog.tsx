import ResponsiveDialog from "@/components/responsive-dialog";
import React from "react";
import AgentForm from "./agent-form";
import { AgentGetOne } from "../../types";

interface UpdateAgentDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  initialValues: AgentGetOne;
}

const UpdateAgentDialog = ({
  open,
  setOpen,
  initialValues,
}: UpdateAgentDialogProps) => {
  return (
    <ResponsiveDialog
      open={open}
      onOpenChange={setOpen}
      title="Update Agent"
      description="Edit the agent details"
    >
      <AgentForm
        onSuccess={() => {
          setOpen(false);
        }}
        onError={() => {
          setOpen(false);
        }}
        initialValues={initialValues}
      />
    </ResponsiveDialog>
  );
};

export default UpdateAgentDialog;

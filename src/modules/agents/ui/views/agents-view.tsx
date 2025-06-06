"use client";
import ErrorState from "@/components/error-state";
import LoadingState from "@/components/loading-state";
import ResponsiveDialog from "@/components/responsive-dialog";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import { DataTable } from "../components/data.table";
import { columns } from "../components/colums";
import EmptyState from "@/components/empty-state";
import { AgentGetOne } from "../../types";

const AgentsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());
  console.log(data);

  return (
    <div className=" flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
      <DataTable data={data as AgentGetOne[]} columns={columns} />
      {data.length === 0 && (
        <EmptyState
          title="Create you first agent"
          description="Create an agent to join your meetings. Each agent will follow your instructions."
        />
      )}
    </div>
  );
};

export default AgentsView;

export const AgentsViewLoading = () => {
  return (
    <LoadingState
      title="Loading Agents"
      description="This may take a few seconds"
    />
  );
};

export const AgentsViewError = () => {
  return (
    <ErrorState
      title="Failed to load agents"
      description="Please try again later"
    />
  );
};

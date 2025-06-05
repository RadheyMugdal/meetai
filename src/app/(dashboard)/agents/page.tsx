import AgentsView, {
  AgentsViewError,
  AgentsViewLoading,
} from "@/modules/agents/ui/views/agents-view";
import ListHeader from "@/modules/agents/ui/components/list-header";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const AgentsPage = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions());
  return (
    <>
      <ListHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ErrorBoundary fallback={<AgentsViewError />}>
          <Suspense fallback={<AgentsViewLoading />}>
            <AgentsView />
          </Suspense>
        </ErrorBoundary>
      </HydrationBoundary>
    </>
  );
};

export default AgentsPage;

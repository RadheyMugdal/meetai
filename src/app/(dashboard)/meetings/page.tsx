import MeetingsListHeader from "@/modules/meetings/ui/components/meetings-list-header";
import MeetingsView, {
  MeetingsViewError,
  MeetingsViewLoading,
} from "@/modules/meetings/ui/views/meeting-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const MeetingsPage = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.meetings.getMany.queryOptions({}));
  return (
    <>
      <MeetingsListHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ErrorBoundary fallback={<MeetingsViewError />}>
          <Suspense fallback={<MeetingsViewLoading />}>
            <MeetingsView />
          </Suspense>
        </ErrorBoundary>
      </HydrationBoundary>
    </>
  );
};

export default MeetingsPage;

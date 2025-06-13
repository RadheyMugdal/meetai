"use client";
import { Button } from "@/components/ui/button";
import { PlusIcon, XCircleIcon } from "lucide-react";
import React from "react";
import NewMeetingDialog from "./new-meetings-dialog";
import MeetingsSearchFilters from "./meetings-search-filter";
import MeetingsStatusFilter from "./status-filter";
import AgentIdFilter from "./agent-id-filter";
import { useMeetingsFilters } from "../../hooks/use-meetings-filter";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const MeetingsListHeader = () => {
  const [filters, setFilters] = useMeetingsFilters();
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const isAnyFilterModified =
    !!filters.status || !!filters.search || !!filters.agentId;
  const onClearFilters = () => {
    setFilters({
      status: null,
      agentId: "",
      search: "",
      page: 1,
    });
  };
  return (
    <>
      <NewMeetingDialog open={dialogOpen} setOpen={setDialogOpen} />
      <div className=" py-4 px-4 md:px-8 flex flex-col gap-y-4">
        <div className=" flex items-center justify-between">
          <h5 className=" font-medium text-xl">My Meetings</h5>
          <Button onClick={() => setDialogOpen(true)}>
            <PlusIcon />
            New Meeting
          </Button>
        </div>
        <ScrollArea>
          <div className=" flex items-center gap-x-2 p-1">
            <MeetingsSearchFilters />
            <MeetingsStatusFilter />
            <AgentIdFilter />
            {isAnyFilterModified && (
              <Button variant={"outline"} onClick={onClearFilters}>
                <XCircleIcon className=" size-4" />
                Clear
              </Button>
            )}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
};

export default MeetingsListHeader;

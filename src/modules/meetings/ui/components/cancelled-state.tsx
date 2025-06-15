import EmptyState from "@/components/empty-state";

const CancelledState = () => {
  return (
    <div className=" bg-white rounded-lg px-4 py-5 flex gap-y-8  flex-col items-center justify-center">
      <EmptyState
        image="/cancelled.svg"
        title="Meeting cancelled"
        description="This meeting was cancelled"
      />
    </div>
  );
};

export default CancelledState;

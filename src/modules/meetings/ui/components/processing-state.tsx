import EmptyState from "@/components/empty-state";

const ProcessingState = () => {
  return (
    <div className=" bg-white rounded-lg px-4 py-5 flex gap-y-8  flex-col items-center justify-center">
      <EmptyState
        image="/processing.svg"
        title="Meeting completed"
        description="This meeting was completed,a summary will appear soon"
      />
    </div>
  );
};

export default ProcessingState;

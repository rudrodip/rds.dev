import LoadSpinner from "@/components/loadspinner";

const loading = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <LoadSpinner />
    </div>
  );
};

export default loading;

import LoadSpinner from "@src/components/loadspinner"

const loading = () => {
  return (
    <div className="w-full min-h-screen flex-center">
      <LoadSpinner />
    </div>
  )
}

export default loading
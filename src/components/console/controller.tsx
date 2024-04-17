export const Controller = () => {
  return (
    <div className="w-full h-full flex items-center">
      <div className="w-full h-full border-[#908683] flex justify-center items-center">
        <div className="w-1/2 aspect-square rounded-full border border-[#908683] flex justify-center items-center">
          <div className="w-10 h-10 bg-zinc-600 rounded-full"></div>
        </div>
      </div>
      <div className="relative w-full h-full flex justify-center items-center">
        <div className="w-32 h-12 flex items-center justify-between">
          <div className="w-14 h-14 rounded-full border border-[#908683] text-zinc-600 flex items-center justify-center">
            <span>K</span>
          </div>
          <div className="w-14 h-14 rounded-full border border-[#908683] text-zinc-600 flex items-center justify-center">
            <span>L</span>
          </div>
        </div>
      </div>
    </div>
  )
}
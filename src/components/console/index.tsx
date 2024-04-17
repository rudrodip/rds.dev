import { Display } from "./display";
import { Controller } from "./controller";

export default function Console() {
  return (
    <div className="relative bg-[#E3DDC5] hidden md:flex flex-col w-[90%] aspect-[1/1.11] border border-[#908683] rounded-[10px] rounded-br-[50px] overflow-hidden">
      <div className="w-full h-[60%] border-b border-[#908683] flex justify-center items-center pt-6 pb-3 px-10">
        <Display />
      </div>
      <div className="w-full h-[40%]">
        <Controller />
      </div>
    </div>
  );
}

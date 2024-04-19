import { Display } from "./display";
import { Controller } from "./controller";

export default function Console() {
  return (
    <div className="relative hidden md:flex flex-col w-[90%] aspect-[1/1.11] border border-[#908683] rounded-[10px] rounded-br-[50px] overflow-hidden">
      <div className="w-full h-[60%] border-b br-console flex-cc pt-6 pb-3 px-10">
        <Display />
      </div>
      <div className="w-full h-[40%]">
        <Controller />
      </div>
    </div>
  );
}

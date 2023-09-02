import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@src/components/ui/tooltip";

type TechIconProps = {
  iconUrl: string;
  tooltip: string;
};

const TechStack = () => {
  return (
    <div className="flex-col justify-start my-5">
      <h1 className="desc mb-4">techs I prefer</h1>
      <TechIcon iconUrl="/assets/images/techlogo/react.svg" tooltip="React" />
      <TechIcon iconUrl="/assets/images/techlogo/nodejs.svg" tooltip="Node.js" />
      <TechIcon iconUrl="/assets/images/techlogo/ts.svg" tooltip="Typescript" />
      <TechIcon iconUrl="/assets/images/techlogo/nextjs-transparent.svg" tooltip="Next js" />
      <TechIcon iconUrl="/assets/images/techlogo/tailwind.svg" tooltip="Tailwind CSS" />
      <TechIcon iconUrl="/assets/images/techlogo/python.svg" tooltip="Python" />
      <TechIcon iconUrl="/assets/images/techlogo/pytorch.svg" tooltip="Pytorch" />
      <TechIcon iconUrl="/assets/images/techlogo/opencv.svg" tooltip="OpenCV" />
      <TechIcon iconUrl="/assets/images/techlogo/mongodb.svg" tooltip="MongoDB" />
      <TechIcon iconUrl="/assets/images/techlogo/mysql.svg" tooltip="MySQL" />
      <TechIcon iconUrl="/assets/images/techlogo/firebase.svg" tooltip="Firebase" />
      <TechIcon iconUrl="/assets/images/techlogo/docker.svg" tooltip="Docker" />
    </div>
  );
};

export default TechStack;

const TechIcon: React.FC<TechIconProps> = ({ iconUrl, tooltip }) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>
          <div className="w-8 h-8 rounded-full mr-3 grayscale hover:grayscale-0 delay-75">
            <Image src={iconUrl} alt={tooltip} width={25} height={25} />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

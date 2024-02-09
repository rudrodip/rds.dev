import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Github,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  LucideIcon,
} from "lucide-react";
import { SocialIconProps } from "@/types";
import { socialIconsData } from "@/config/socials";

const SocialIcons = () => {
  return (
    <div className="flex justify-start items-center space-x-3 flex-wrap">
      {socialIconsData.map((socialIcon, index) => (
        <SocialIcon key={index} {...socialIcon} />
      ))}
    </div>
  );
};

export default SocialIcons;

const SocialIcon: React.FC<SocialIconProps> = ({
  Icon,
  accountName,
  link,
  pfpLink,
}) => {
  return (
    <HoverCard openDelay={50} closeDelay={5}>
      <HoverCardTrigger asChild>
        <div className="flex w-8 h-8 rounded-full items-center">
          <a href={link} target="_blank">
            <Icon
              className="hover:scale-105 transition-all ease-in-out"
              strokeWidth={1.25}
            />
          </a>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="flex justify-between gap-6">
          <Avatar>
            <AvatarImage src={pfpLink} />
            <AvatarFallback>RDS</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <a
              className="text-sm font-semibold underline"
              href={link}
              target="_blank"
            >
              {accountName}
            </a>
            <p className="text-sm break-all">{link}</p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">
                Connect with me
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@src/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@src/components/ui/avatar";
import {
  Github,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  LucideIcon,
} from "lucide-react";

type SocialIconProps = {
  Icon: LucideIcon;
  accountName: string;
  link: string;
  pfpLink?: string;
};

const SocialIcons = () => {
  return (
    <div
      className="flex justify-start items-center space-x-3 flex-wrap"
    >
      <SocialIcon
        Icon={Github}
        accountName="rudrodip"
        link="https://github.com/rudrodip"
        pfpLink="https://avatars.githubusercontent.com/u/77154365"
      />
      <SocialIcon
        Icon={Twitter}
        accountName="@rds_agi"
        link="https://twitter.com/rds_agi"
        pfpLink="https://unavatar.io/twitter/rds_agi"
      />
      <SocialIcon
        Icon={Linkedin}
        accountName="Rudrodip Sarker"
        link="https://www.linkedin.com/in/rudrodip-sarker-964392262"
        pfpLink="https://avatars.githubusercontent.com/u/77154365"
      />
      <SocialIcon
        Icon={Facebook}
        accountName="Rudrodip Sarker"
        link="https://facebook.com/enthusiast.math"
        pfpLink="https://avatars.githubusercontent.com/u/77154365"
      />
      <SocialIcon
        Icon={Instagram}
        accountName="@martian_agi"
        link="https://www.instagram.com/martian_agi"
        pfpLink="https://avatars.githubusercontent.com/u/77154365"
      />
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
    <HoverCard openDelay={20} closeDelay={5}>
      <HoverCardTrigger asChild>
        <div
          className="flex w-8 h-8 rounded-full items-center"
        >
          <a href={link} target="_blank">
            <Icon className="hover:scale-105 transition-all ease-in-out" strokeWidth={1.25} />
          </a>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
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

"use client";

import React from "react";
import { Card } from "@src/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@src/components/ui/avatar";
import { Skeleton } from "@src/components/ui/skeleton";
import { useLanyard } from "react-use-lanyard";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@src/components/ui/tooltip";
import { cn } from "@src/lib/utils";

function DiscordApperance() {
  const { status } = useLanyard({
    userId: "841126921886498817",
    socket: true,
  });

  if (!status) {
    return (
      <span className="ml-4 md:ml-5 w-3 h-3 md:w-6 md:h-6 animate-pulse rounded-full icon-glow"></span>
    );
  }

  const custom_state = status.activities.find(
    (elem) => elem.name == "Custom Status"
  )?.state;
  const coding = status.activities.find((elem) => elem.name == "Code");

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            className={cn(
              "ml-4 md:ml-5 w-3 h-3 md:w-6 md:h-6 animate-pulse rounded-full icon-glow",
              (status.active_on_discord_desktop ||
                status.active_on_discord_mobile ||
                status.active_on_discord_web) &&
                "bg-green-500"
            )}
          ></span>
        </TooltipTrigger>
        <TooltipContent className="">
          <Card className="shine shine-anim text-sm font-mono flex">
            <div className="flex gap-3 p-3 items-start">
              <div>
                <a
                  href="https://discordapp.com/users/841126921886498817"
                  target="_blank"
                >
                  <Avatar>
                    <AvatarImage
                      src={`https://cdn.discordapp.com/avatars/841126921886498817/${status.discord_user.avatar}`}
                    />
                    <AvatarFallback>RDS</AvatarFallback>
                  </Avatar>
                </a>
              </div>
              <div>
                <p>{status.discord_user.username}</p>
                <div className="flex space-x-2">
                  <span>
                    {
                      status.activities.find(
                        (elem) => elem.name == "Custom Status"
                      )?.emoji?.name
                    }
                  </span>
                  <div>
                    {status.listening_to_spotify ? (
                      <div>
                        <h1>
                          listening to{" "}
                          <a
                            className="blue_gradient underline_animation"
                            href={`https://open.spotify.com/track/${status.spotify?.track_id}`}
                            target="_blank"
                          >
                            {status.spotify?.song}
                          </a>
                        </h1>
                      </div>
                    ) : custom_state ? (
                      <h1>{custom_state}</h1>
                    ) : status.activities.length >= 1 ? (
                      <h1>{status.activities[1]?.details}</h1>
                    ) : (
                      "not too much"
                    )}
                  </div>
                </div>
                <div>
                  {coding ? (
                    <div>
                      <p>{coding.state}</p>
                      <p>{coding.details}</p>
                    </div>
                  ) : (
                    "coding 24/7, 366 days a year"
                  )}
                </div>
              </div>
            </div>
          </Card>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default DiscordApperance;

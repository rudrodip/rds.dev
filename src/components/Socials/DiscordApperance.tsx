"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { useLanyard } from "react-use-lanyard";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function DiscordApperance() {
  const { status } = useLanyard({
    userId: "841126921886498817",
    socket: true,
  });

  if (!status) {
    return (
      <span className="ml-2 md:ml-3 w-3 h-3 md:w-5 md:h-5 animate-pulse rounded-full icon-glow-muted cursor-progress"></span>
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
          <Image 
            src="/icon.png"
            alt="rds_agi"
            width={25}
            height={25}
            className="mr-1"
          />
        </TooltipTrigger>
        <TooltipContent className="">
          <Card className="text-sm font-mono flex border-none shadow-none bg-transparent">
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
                      )?.emoji?.name ?? "👀"
                    }
                  </span>
                  <div>
                    {status.listening_to_spotify ? (
                      <div>
                        <h1>
                          listening to{" "}
                          <a
                            className=""
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
                      "wanna chat?"
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

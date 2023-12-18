"use client";

import React from "react";
import { Card } from "@src/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@src/components/ui/avatar";
import { Skeleton } from "@src/components/ui/skeleton";
import { useLanyard } from "react-use-lanyard";

function DiscordApperance() {
  const { status } = useLanyard({
    userId: "841126921886498817",
    socket: true,
  });

  if (!status) {
    return (
      <Card className="h-20 w-2/3 my-4">
        <div className="flex gap-3 p-3 items-start">
          <div>
            <Skeleton className="w-10 h-10 rounded-full" />
          </div>
          <div>
            <Skeleton className="w-40 h-5 mb-2" />
            <Skeleton className="w-5 h-5 rounded-full" />
          </div>
        </div>
      </Card>
    );
  }

  const custom_state = status.activities.find(
    (elem) => elem.name == "Custom Status"
  )?.state;
  const coding = status.activities.find((elem) => elem.name == "Code");

  return (
    <Card className="shine shine-anim text-sm font-mono flex my-2 lg:w-2/3">
      <div className="flex gap-3 p-3 items-start">
        <div>
          <a
            href="https://discordapp.com/users/841126921886498817"
            target="_blank"
          >
            <Avatar>
              {(status.active_on_discord_desktop ||
                status.active_on_discord_mobile ||
                status.active_on_discord_web) && (
                <span className="w-3 h-3 bg-green-500 rounded-full absolute bottom-0 right-0 border border-white"></span>
              )}

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
                status.activities.find((elem) => elem.name == "Custom Status")
                  ?.emoji?.name
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
  );
}

export default DiscordApperance;

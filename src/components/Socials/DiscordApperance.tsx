"use client";

import React, { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@src/components/ui/avatar";
import { DiscordData } from "discord";

function DiscordApperance() {
  const [data, setData] = useState<DiscordData | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const laneyard = await fetch(
          "https://api.lanyard.rest/v1/users/841126921886498817"
        );

        if (laneyard.ok) {
          const response = await laneyard.json();
          setData(response.data);
        } else {
          console.error("Failed to fetch data from Lanyard API");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  if (!data) {
    return "";
  }

  const custom_state = data.activities.find(
    (elem) => elem.name == "Custom Status"
  )?.state;
  return (
    <Card className="text-sm font-mono flex my-2 lg:w-2/3 sweep-hover-animation">
      <a href="https://discordapp.com/users/841126921886498817" target="_blank">
        <div className="flex gap-3 p-3 items-start">
          <div>
            <Avatar>
              {(data.active_on_discord_desktop ||
                data.active_on_discord_mobile ||
                data.active_on_discord_web) && (
                <span className="w-3 h-3 bg-green-500 rounded-full absolute bottom-0 right-0 border border-white"></span>
              )}

              <AvatarImage
                src={`https://cdn.discordapp.com/avatars/841126921886498817/${data.discord_user.avatar}`}
              />
              <AvatarFallback>RDS</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <p>{data.discord_user.username}</p>
            <div className="flex space-x-2">
              <span>
                {
                  data.activities.find((elem) => elem.name == "Custom Status")
                    ?.emoji?.name
                }
              </span>
              {custom_state ? (
                <h1>{custom_state}</h1>
              ) : data.listening_to_spotify ? (
                <h1>
                  listening to{" "}
                  <span className="text-cyan-500">{data.spotify?.song}</span>
                </h1>
              ) : data.activities.length >= 1 ? (
                <h1>{data.activities[1].details}</h1>
              ) : (
                "idling "
              )}
            </div>
            <p>coding 24/7, 366 days a year</p>
          </div>
        </div>
      </a>
    </Card>
  );
}

export default DiscordApperance;

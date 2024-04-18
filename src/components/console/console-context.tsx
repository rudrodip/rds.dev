"use client";

import { createContext, useContext, useState } from "react";

type ConsoleStateType = {
  on: boolean;
  sound: boolean;
  music: boolean;
}



export const ConsoleContext = createContext<ConsoleStateType>({
  on: false,
  sound: true,
  music: true,
});
"use client";

import { createContext, useContext, useState } from "react";

type GameStateType = {
  on: boolean;
  sound: boolean;
  music: boolean;
}

export const ConsoleContext = createContext({})
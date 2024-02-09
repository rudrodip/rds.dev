import captionStyles from "./captions.module.css";
import styles from "./video-layout.module.css";

import { useState } from "react";

import { Captions, Controls, Gesture } from "@vidstack/react";

import * as Buttons from "../_components/buttons";
import * as Menus from "../_components/menus";
import * as Sliders from "../_components/slider";
import { TimeGroup } from "../_components/time-group";
import { Title } from "../_components/title";
import Canvas from "../_components/canvas";

export interface VideoLayoutProps {
  thumbnails?: string;
}

export function VideoLayout({ thumbnails }: VideoLayoutProps) {
  const [drawing, setDrawing] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const handleDraw = (width: number, height: number) => {
    setSize({ width, height });
    setDrawing(!drawing);
  };

  return (
    <>
      {drawing && <Canvas width={size.width} height={size.height} />}
      <Gestures />
      <Captions
        className={`${captionStyles.captions} media-preview:opacity-0 media-controls:bottom-[85px] media-captions:opacity-100 absolute inset-0 bottom-2 z-10 select-none break-words opacity-0 transition-[opacity,bottom] duration-300`}
      />
      <Controls.Root
        className={`${styles.controls} media-controls:opacity-100 absolute inset-0 z-10 flex h-full w-full flex-col bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity`}
        hideDelay={200}
      >
        <div className="flex-1" />
        <Controls.Group className="flex w-full items-center px-2">
          <Sliders.Time thumbnails={thumbnails} />
        </Controls.Group>
        <Controls.Group className="-mt-0.5 flex w-full items-center px-2 pb-2">
          <Buttons.Play tooltipPlacement="top start" />
          <Buttons.Mute tooltipPlacement="top" />
          <Sliders.Volume />
          <TimeGroup />
          <Title />
          <div className="flex-1" />
          <Buttons.Caption tooltipPlacement="top" />
          <Menus.Settings placement="top end" tooltipPlacement="top" />
          <Buttons.PIP tooltipPlacement="top" />
          <Buttons.Fullscreen tooltipPlacement="top end" />
          <Buttons.Draw tooltipPlacement="top end" handleDraw={handleDraw} />
        </Controls.Group>
      </Controls.Root>
    </>
  );
}

function Gestures() {
  return (
    <>
      <Gesture
        className="absolute inset-0 z-0 block h-full w-full"
        event="pointerup"
        action="toggle:paused"
      />
      <Gesture
        className="absolute inset-0 z-0 block h-full w-full"
        event="dblpointerup"
        action="toggle:fullscreen"
      />
      <Gesture
        className="absolute left-0 top-0 z-10 block h-full w-1/5"
        event="dblpointerup"
        action="seek:-10"
      />
      <Gesture
        className="absolute right-0 top-0 z-10 block h-full w-1/5"
        event="dblpointerup"
        action="seek:10"
      />
    </>
  );
}

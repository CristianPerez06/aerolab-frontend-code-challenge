import * as React from "react";
import type { Addon_StoryContext } from "storybook/internal/types";
import { ImageContext as ImageContextValue } from "@storybook/nextjs/dist/image-context";
import { type ImageContext as ImageContextType } from "./ImageContext";

const ImageContext = ImageContextValue as typeof ImageContextType;

export const ImageDecorator = (
  Story: React.FC,
  { parameters }: Addon_StoryContext
): React.ReactNode => {
  if (!parameters.nextjs?.image) {
    return <Story />;
  }

  return (
    <ImageContext.Provider value={parameters.nextjs.image}>
      <Story />
    </ImageContext.Provider>
  );
};

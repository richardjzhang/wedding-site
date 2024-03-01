"use client";

import React, { useState } from "react";
import NextImage from "next/image";

const Image = ({
  backgroundColor = "bg-amber-50",
  src,
  ...props
}: {
  backgroundColor?: string;
  src: string;
  alt: string;
  [key: string]: any;
}) => {
  const [isReady, setIsReady] = useState(false);

  const onLoadCallback = () => {
    setIsReady(true);
  };

  return (
    <NextImage
      className={`${backgroundColor} transition duration-1000 ${
        isReady ? `scale-100 ${backgroundColor} blur-0` : "scale-120 blur-xl"
      }`}
      src={src}
      {...props}
      onLoadingComplete={onLoadCallback}
    />
  );
};

export default Image;

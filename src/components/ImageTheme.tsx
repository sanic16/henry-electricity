"use client";
import useTheme from "@/context/ThemeContext";
import Image from "next/image";
import React from "react";

interface ImageThemeProps {
  images: string[];
}
const ImageTheme: React.FC<ImageThemeProps> = ({ images }) => {
  const { theme } = useTheme();
  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${
        theme === "dark" ? images[0] : images[1]
      }`}
      alt="Servicios eléctricos"
      fill
      className="w-full h-full object-cover"
    />
  );
};

export default ImageTheme;

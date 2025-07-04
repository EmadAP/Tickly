"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const backgroundImages = [
  "/main-baner/baner1.jpg",
  "/main-baner/baner2.jpg",
  "/main-baner/baner3.jpg",
  "/main-baner/baner4.jpg",
  "/main-baner/baner5.jpg",
];

function BannerBg() {
  const [bgImage, setBgImage] = useState(backgroundImages[0]);
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    setBgImage(backgroundImages[randomIndex]);
  }, []);

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-black/30 z-0" />
      <Image
        src={bgImage}
        alt="Background"
        fill
        sizes="100%"
        className="object-cover"
      />
    </div>
  );
}

export default BannerBg;

import React from "react";

export function HeroImage() {
  return (
    <div>
      <img
        className="w-full hidden sm:block"
        src={`${process.env.PUBLIC_URL}/cyber-bg.webp`}
        alt="Cyber background"
        width={829}
        height={600}
      />
    </div>
  );
}

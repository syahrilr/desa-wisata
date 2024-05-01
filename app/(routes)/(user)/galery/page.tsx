import Container from "@/components/container";
import { Separator } from "@/components/ui/separator";
import WIsataCard from "@/components/wisata-card";
import Image from "next/image";
import React from "react";

const GaleryPage = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-2 mt-40">
        <Image src="/logo.png" width={100} height={100} alt="logo" />
        <p className="font-bold text-xl text-green-dark">
          Galery
        </p>
      </div>
      <div className="mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <WIsataCard title="Gunung Bromo" imageUrl="/gunung.jpeg" />
          <WIsataCard title="Pantai Kuta" imageUrl="/pantai.jpeg" />
          <WIsataCard title="Danau Toba" imageUrl="/pantai.jpeg" />
        </div>
      </div>
    </Container>
  );
};

export default GaleryPage;

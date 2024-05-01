import Container from "@/components/container";
import { Separator } from "@/components/ui/separator";
import WIsataCard from "@/components/wisata-card";
import Image from "next/image";

const ObyekWisataPage = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center gap-2 mt-40">
        <Image src="/logo.png" width={100} height={100} alt="logo" />
        <p className="font-bold text-xl text-green-dark">
          Obyek Wisata yang Tersedia
        </p>
      </div>
      <div className="mx-auto">
        <div className="flex flex-col mt-20">
          <p className="font-bold text-xl text-green-dark">Pantai</p>
          <Separator />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <WIsataCard title="Gunung Bromo" imageUrl="/gunung.jpeg"/>
          <WIsataCard title="Pantai Kuta" imageUrl="/pantai.jpeg"/>
          <WIsataCard title="Danau Toba" imageUrl="/pantai.jpeg"/>
        </div>
      </div>
      <div className="mx-auto">
        <div className="flex flex-col mt-40">
          <p className="font-bold text-xl text-green-dark">Gunung</p>
          <Separator />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <WIsataCard title="Gunung Bromo" imageUrl="/gunung.jpeg" />
          <WIsataCard title="Gunung Bromo" imageUrl="/gunung.jpeg" />
          <WIsataCard title="Gunung Bromo" imageUrl="/gunung.jpeg" />
        </div>
      </div>
    </Container>
  );
};

export default ObyekWisataPage;

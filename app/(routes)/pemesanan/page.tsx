import Container from "@/components/container";
import PemesananTiket from "@/components/pemesanan-tiket";
import WIsataCard from "@/components/wisata-card";
import { ShoppingBag } from "lucide-react";

const PemesananPage = () => {
  return (
    <Container>
      <div className="container mx-auto mt-40">
        <div className="flex flex-col items-center justify-center gap-2 mt-20">
          <ShoppingBag className="h-20 w-20" />
          <p className="font-bold text-xl text-green-dark">Pemesanan Tiket</p>
        </div>
        <div className="mt-20">
        <PemesananTiket />
        </div>
      </div>
    </Container>
  );
};

export default PemesananPage;

import Container from "@/components/container";
import Fasilitas from "@/components/fasilitas";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";


const FasilitasWisata = () => {
  return (
    <Container>
      <div className="mt-40 ">
        <div className="flex flex-col items-center justify-center gap-2 mt-20">
          <Image src="/logo.png" width={100} height={100} alt="logo" />
          <p className="font-bold text-xl text-green-dark mb-10">
            Apa saja fasilitas wisata yang tersedia ?
          </p>
        </div>
        <Fasilitas
          nama="Taman Nasional Komodo"
          deskripsi="Taman Nasional Komodo adalah salah satu tempat wisata alam yang paling terkenal di Indonesia. Terletak di Kepulauan Komodo, taman nasional ini terkenal dengan keberadaan komodo, kadal raksasa yang hanya ditemukan di wilayah ini."
          fasilitas={[
            "Area berkemah",
            "Pendakian gunung",
            "Snorkeling dan diving",
            "Pemandangan alam yang menakjubkan",
          ]}
        />
        <Separator className="mt-5 mb-5"/>
        <Fasilitas
          nama="Taman Nasional Komodo"
          deskripsi="Taman Nasional Komodo adalah salah satu tempat wisata alam yang paling terkenal di Indonesia. Terletak di Kepulauan Komodo, taman nasional ini terkenal dengan keberadaan komodo, kadal raksasa yang hanya ditemukan di wilayah ini."
          fasilitas={[
            "Area berkemah",
            "Pendakian gunung",
            "Snorkeling dan diving",
            "Pemandangan alam yang menakjubkan",
          ]}
        />
        <Separator className="mt-5 mb-5"/>
        <Fasilitas
          nama="Taman Nasional Komodo"
          deskripsi="Taman Nasional Komodo adalah salah satu tempat wisata alam yang paling terkenal di Indonesia. Terletak di Kepulauan Komodo, taman nasional ini terkenal dengan keberadaan komodo, kadal raksasa yang hanya ditemukan di wilayah ini."
          fasilitas={[
            "Area berkemah",
            "Pendakian gunung",
            "Snorkeling dan diving",
            "Pemandangan alam yang menakjubkan",
          ]}
        />
        <Separator className="mt-5 mb-5"/>
        <Fasilitas
          nama="Taman Nasional Komodo"
          deskripsi="Taman Nasional Komodo adalah salah satu tempat wisata alam yang paling terkenal di Indonesia. Terletak di Kepulauan Komodo, taman nasional ini terkenal dengan keberadaan komodo, kadal raksasa yang hanya ditemukan di wilayah ini."
          fasilitas={[
            "Area berkemah",
            "Pendakian gunung",
            "Snorkeling dan diving",
            "Pemandangan alam yang menakjubkan",
          ]}
        />
        <Separator className="mt-5 mb-5"/>
        <Fasilitas
          nama="Taman Nasional Komodo"
          deskripsi="Taman Nasional Komodo adalah salah satu tempat wisata alam yang paling terkenal di Indonesia. Terletak di Kepulauan Komodo, taman nasional ini terkenal dengan keberadaan komodo, kadal raksasa yang hanya ditemukan di wilayah ini."
          fasilitas={[
            "Area berkemah",
            "Pendakian gunung",
            "Snorkeling dan diving",
            "Pemandangan alam yang menakjubkan",
          ]}
        />
        <Separator className="mt-5 mb-5"/>
        <Fasilitas
          nama="Taman Nasional Komodo"
          deskripsi="Taman Nasional Komodo adalah salah satu tempat wisata alam yang paling terkenal di Indonesia. Terletak di Kepulauan Komodo, taman nasional ini terkenal dengan keberadaan komodo, kadal raksasa yang hanya ditemukan di wilayah ini."
          fasilitas={[
            "Area berkemah",
            "Pendakian gunung",
            "Snorkeling dan diving",
            "Pemandangan alam yang menakjubkan",
          ]}
        />
        <Separator className="mt-5 mb-5"/>
      </div>
    </Container>
  );
};

export default FasilitasWisata;

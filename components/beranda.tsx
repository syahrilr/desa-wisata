import Image from "next/image";
import Container from "./container";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const listWisata =[
  {
    name: "Wisata 1",
    image: "/wisata1.jpg",
  },
  {
    name: "Wisata 2",
    image: "/wisata1.jpg",
  },
  {
    name: "Wisata 3",
    image: "/wisata1.jpg",
  },
  {
    name: "Wisata 4",
    image: "/wisata1.jpg",
  },
  {
    name: "Wisata 5",
    image: "/wisata1.jpg",
  },
  {
    name: "Wisata 6",
    image: "/wisata1.jpg",
  },
  
]

const Beranda = () => {
  return (
    <Container>
      <div
        className="w-full h-full relative overflow-hidden bg-cover"
        style={{ backgroundImage: `url("/bg.jpg")` }}
      >
        <div className="w-full h-full">
          <div className="flex flex-col h-full container mx-auto items-center font-poppins text-green-dark">
            <div className="flex flex-col h-full items-center justify-between lg:justify-center pt-36 lg:pt-0 font-semibold lg:text-center leading-normal gap-8">
              <div className="hidden lg:flex h-20"></div>
              <Image
                src="/logo.png"
                width={100}
                height={100}
                className="lg:my-0 my-auto"
                alt="logo"
              />
              <div className="flex flex-col gap-8 lg:items-center">
                <p className="lg:text-4xl text-5xl font-bold">
                  Telusuri
                  <br />
                  Inspirasi Wisata
                </p>
                <p className="lg:text-xl text-lg font-normal lg:w-4/5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                  aut pariatur, optio corrupti corporis fuga possimus? Ut
                  corporis necessitatibus ea eligendi non. Impedit odio at a
                  dolor rem, est repudiandae?
                </p>
                <Button variant="default" size="default" className="lg:w-1/5">
                  Telusuri
                </Button>
                <div className="lg:h-2"></div>
              </div>
              <div id="wisata" className="pb-10 lg:pb-0"></div>
            </div>
          </div>
        </div>
      </div>
      <Separator className="mt-10" />
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-4 mt-10">
          <p className="text-3xl font-bold text-green-dark">Wisata Populer</p>
          <p className="text-lg font-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aut
            pariatur, optio corrupti corporis fuga possimus?
          </p>
        </div>
        <Button variant="default" size="default">
          Lihat Semua
        </Button>
      </div>
      <div className="grid grid-cols-4 mt-5">
        {listWisata.map((wisata) => (
          <div className="flex flex-col gap-2" key={wisata.name}>
            <Image
              src={wisata.image}
              width={300}
              height={200}
              alt={wisata.name}
              className="rounded-lg"
            />
            <p className="font-bold text-lg">{wisata.name}</p>
          </div>
        ))}
      </div>
      <p className="text-3xl font-bold text-green-dark mt-10">Dokumentasi</p>
      <Separator />
      <div className="mx-auto mt-10 mb-40">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TEXBgNVt19Q?si=USiQXdv6C9Njln2S"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
};

export default Beranda;

import Container from "@/components/container";
import Image from "next/image";

const AboutPage = () => {
  return (
    <Container>
      <div className="mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-2 mt-20">
            <Image src="/logo.png" width={100} height={100} alt="logo"/>
            <p className="font-bold text-xl text-green-dark">Apa itu Inspirasi Wisata ?</p>
        </div>
        <p className="text-lg mb-4 mt-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam laborum rerum nisi reiciendis aspernatur doloremque odio, accusantium recusandae, eius sapiente quam voluptates repellendus quod deleniti optio, saepe autem magnam nihil?
        </p>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis eveniet molestias nihil quidem labore porro, earum cupiditate minus, officia nisi cum nam voluptatem nostrum doloremque voluptates deleniti doloribus dicta ea?
        </p>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, delectus, commodi autem, nam aliquam debitis eaque natus cumque enim fugit harum soluta eligendi minima unde? Explicabo nemo reiciendis vel commodi.
        </p>
      </div>
    </Container>
  );
};

export default AboutPage;

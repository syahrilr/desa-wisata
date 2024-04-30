import Image from "next/image";

interface WIsataCardProps {
    title: string;
    imageUrl: string;
}

const WIsataCard:React.FC<WIsataCardProps> = ({title, imageUrl}) => {
  return (
    <div
      className="col-span-1 cursor-pointer group mt-20"
    >
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
        >
          <Image
            fill
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={imageUrl}
            alt="wisata"
          />
          <div
            className="
            absolute
            top-3
            right-3
          "
          >
          </div>
        </div>
        <div className="font-semibold text-lg">
          {title}
        </div>
        <div className="font-semibold text-lg">
          Bali, Indonesia
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">Rp 3.000.000</div>
          <div className="font-light">/night</div>
        </div>
      </div>
    </div>
  );
};

export default WIsataCard;

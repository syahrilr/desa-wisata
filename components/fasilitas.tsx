interface FasilitasProps {
    nama: string;
    deskripsi: string;
    fasilitas: string[];
}

const Fasilitas: React.FC<FasilitasProps> = ({
  nama,
  deskripsi,
  fasilitas,
}) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">{nama}</h1>
      <p className="text-lg mb-4">{deskripsi}</p>
      <h2 className="text-xl font-bold mb-2">Fasilitas yang Tersedia:</h2>
      <ul className="list-disc ml-8">
        {fasilitas.map((fasilitas, index) => (
          <li key={index} className="text-base">
            {fasilitas}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fasilitas;
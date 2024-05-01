import { PrismaClient } from "@prisma/client";
import { DashboardColumn } from "./components/columns";
import { PemesananClient } from "./components/client";

const prisma = new PrismaClient()

const DashboardPage = async({params} : {params: {pemesananId: string}}) => {

  const pemesanan = await prisma.pemesanan.findMany({
    where: {
      id: params.pemesananId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  const formattedPemesanan: DashboardColumn[] = pemesanan.map((pemesanan) => ({
    id: pemesanan.id,
    nama_pemesan: pemesanan.nama_pemesan,
    no_hp: (pemesanan.no_hp), // Convert 'no_hp' to number
    durasi: pemesanan.durasi,
    jml_peserta: pemesanan.jml_peserta
  }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <PemesananClient data={formattedPemesanan}/>
      </div>
    </div>
  )
};

export default DashboardPage;

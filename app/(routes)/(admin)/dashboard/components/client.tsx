
import { Heading } from "@/components/ui/heading"
import { DashboardColumn, columns } from "./columns"
import { Separator } from "@/components/ui/separator"
import { DataTable } from "@/components/ui/data-table"

interface PemesananClientProps {
    data: DashboardColumn[]
}

export const PemesananClient: React.FC<PemesananClientProps> = ({data}) => {
    return (
        <>
            <Heading 
                title="Daftar Pemesanan Paket Wisata"
                description="Berikut adalah daftar pemesanan paket wisata yang telah dilakukan oleh pengunjung."
            />
            <Separator />
            <DataTable columns={columns} data={data} searchKey="nama_pemesan"/>
        </>
    )
}
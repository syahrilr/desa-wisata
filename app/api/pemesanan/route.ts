import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(
    request: Request
) {

    try {
        const body = await request.json();
        const {
            nama_pemesan,
            nomor_tlp,
            durasi_perjalanan,
            jumlah_orang,
            penginapan,
            transportasi,
            makanan,
        } = body;
    
    
        const pemesanan = await prisma.pemesanan.create({
            data: {
                nama_pemesan,
                no_hp: nomor_tlp,
                durasi: durasi_perjalanan,
                jml_peserta: jumlah_orang,
                penginapan,
                transportasi,
                makanan,
            }
        });
    
        return NextResponse.json(pemesanan);
        
    } catch (error) {
        return NextResponse.error();
    }

}
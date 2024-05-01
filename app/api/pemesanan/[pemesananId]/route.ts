import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function DELETE(req: Request, { params }: { params: { pemesananId: string } }) {
    try {


        const pemesanan = await prisma.pemesanan.deleteMany({
            where: {
                id: params.pemesananId,
            }
        })

        return NextResponse.json(pemesanan)

    } catch (error) {
        console.log('[PEMESANAN_DELETE]', error);
        return new NextResponse('Internal error', { status: 500 })
    }
}
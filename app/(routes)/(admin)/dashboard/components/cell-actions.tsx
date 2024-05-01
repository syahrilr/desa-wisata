"use client"

import { useState } from "react"
import { DashboardColumn } from "./columns"
import axios from "axios"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Edit, Trash } from "lucide-react"


interface CellActionsProps {
    data: DashboardColumn
}

export const CellActions: React.FC<CellActionsProps> = ({data}) => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const onDelete = async() => {
        try {
            setLoading(true)
            await axios.delete(`/api/pemesanan/${data.id}`)
            router.push('/dashboard')
        } catch (error) {
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-row gap-4">
            <Button variant="outline" onClick={()=>router.push('/pemesanan')} disabled={loading} className="text-black">
                <Edit className="mr-2 h-4 w-4" />
                Ubah
            </Button>
            <Button variant="destructive" onClick={onDelete} disabled={loading} className="text-white">
                <Trash className="mr-2 h-4 w-4" />
                Delete
            </Button>
        </div>
    );
}
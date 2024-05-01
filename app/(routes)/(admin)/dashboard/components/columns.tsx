"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellActions } from "./cell-actions";

export type DashboardColumn = {
  id: string;
  nama_pemesan: string;
  no_hp: string;
  durasi: string;
  jml_peserta: string;
};

export const columns: ColumnDef<DashboardColumn>[] = [
  {
    accessorKey: "nama_pemesan",
    header: "Nama Pemesan",
  },
  {
    accessorKey: "no_hp",
    header: "Nomor Hp",
  },
  {
    accessorKey: "durasi",
    header: "Durasi",
  },
  {
    accessorKey: "jml_peserta",
    header: "Jumlah Peserta",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellActions data={row.original} />,
  },
];

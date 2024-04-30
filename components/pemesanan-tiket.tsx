"use client"

import { useState } from "react";
import { Button } from "./ui/button";

const PemesananTiket: React.FC = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [jumlahTiket, setJumlahTiket] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data pemesanan seperti mengirim ke server
    console.log("Data pemesanan:", { nama, email, jumlahTiket });
    // Reset form setelah submit
    setNama("");
    setEmail("");
    setJumlahTiket(1);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Pemesanan Tiket Wisata</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nama" className="block font-semibold mb-1">
            Nama:
          </label>
          <input
            type="text"
            id="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="input"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            required
          />
        </div>
        <div>
          <label htmlFor="jumlahTiket" className="block font-semibold mb-1">
            Jumlah Tiket:
          </label>
          <input
            type="number"
            id="jumlahTiket"
            value={jumlahTiket}
            onChange={(e) => setJumlahTiket(parseInt(e.target.value))}
            className="input"
            min={1}
            required
          />
        </div>
        <Button type="submit" className="btn bg-blue-500 text-white">
          Pesan Tiket
        </Button>
      </form>
    </div>
  );
};

export default PemesananTiket;

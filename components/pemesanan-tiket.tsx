"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";


import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";


const formSchema = z.object({
  nama_pemesan: z.string().min(2, {
    message: "Nama pemesan harus diisi",
  }),
  nomor_tlp: z.string().min(10, {
    message: "nomor telepon harus diisi",
  }),
  durasi_perjalanan: z.string().min(1, {
    message: "Durasi perjalanan harus diisi",
  }),
  jumlah_orang: z.string().min(1, {
    message: "Jumlah orang harus diisi",
  }),
  penginapan: z.boolean(),
  transportasi: z.boolean(),
  makanan: z.boolean(),
});

export function PemesananTiket() {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama_pemesan: "",
      nomor_tlp: "",
      durasi_perjalanan: "",
      jumlah_orang: "",
      penginapan: false,
      transportasi: false,
      makanan: false,
    }
  })

  

  const hargaPaket = () =>{
    let harga = 0
    if(form.watch('transportasi')) harga += 1000000
    if(form.watch('makanan')) harga += 120000
    if(form.watch('penginapan')) harga += 500000
      if(form.watch('durasi_perjalanan')) harga *= parseInt(form.watch('durasi_perjalanan'))
    if(form.watch('jumlah_orang')) harga *= parseInt(form.watch('jumlah_orang'))
      
      return harga
    }

    const layananPaket = () =>{
      if(form.watch('transportasi') && form.watch('makanan') && form.watch('penginapan')) return 'Transportasi, Makanan, Penginapan'
      else if(form.watch('transportasi') && form.watch('makanan')) return 'Transportasi, Makanan'
      else if(form.watch('transportasi') && form.watch('penginapan')) return 'Transportasi, Penginapan'
      else if(form.watch('makanan') && form.watch('penginapan')) return 'Makanan, Penginapan'
      else if(form.watch('transportasi')) return 'Transportasi'
      else if(form.watch('makanan')) return 'Makanan'
      else if(form.watch('penginapan')) return 'Penginapan'
    }

    const diskon = () => {
      let diskon = 0
      if (hargaPaket() >= 1500000) diskon = 10
      return diskon
    };

  const totalTagihan = () => {
    let total = hargaPaket()
    if (diskon() > 0) total -= (hargaPaket() * diskon()) / 100
    return total
  }


  const onSubmit = async(data: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post('/api/pemesanan', data);
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  return (
    <div className="flex justify-center relative">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="nama_pemesan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama Pemesan</FormLabel>
                <FormControl>
                  <Input placeholder="Masukkan nama pemesan" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nomor_tlp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nomor Telp/Hp</FormLabel>
                <FormControl>
                  <Input placeholder="Masukkan nomor telp/hp" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="durasi_perjalanan"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Durasi Perjalanan</FormLabel>
                <FormControl>
                  <div className="flex flex-row items-center gap-2">
                    <Input
                      placeholder="Masukkan durasi perjalaan yang anda inginkan"
                      {...field}
                      className="max-w-sm"
                    />
                    <span className="font-semibold text-sm">Hari</span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-row items-center gap-4 justify-between">
            <FormField
              control={form.control}
              name="jumlah_orang"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jumlah Peserta</FormLabel>
                  <FormControl>
                    <div className="flex flex-row items-center gap-2">
                      <Input placeholder="Masukkan jumlah peserta" {...field} />
                      <span className="font-semibold text-sm">Orang</span>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col">
            <Label>Diskon</Label>
            <div className="flex flex-row gap-2 items-center">
              <Input
                disabled
                type="number"
                placeholder={diskon().toString()}
                className="mt-4 max-w-sm"
              />
              <span className="font-semibold text-sm justify-center">%</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Pelayanan Paket Perjalanan</Label>
            <div className="flex flex-row gap-20">
              <FormField
                control={form.control}
                name="transportasi"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          {...field}
                          value={field.value ? "true" : "false"}
                          onClick={() => {
                            field.onChange(!field.value);
                          }}
                        />
                        <span className="text-sm">Transportasi</span>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="makanan"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          {...field}
                          value={field.value ? "true" : "false"}
                          onClick={() => {
                            field.onChange(!field.value);
                          }}
                        />
                        <span className="text-sm">Makanan</span>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="penginapan"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          {...field}
                          value={field.value ? "true" : "false"}
                          onClick={() => {
                            field.onChange(!field.value);
                          }}
                        />
                        <span className="text-sm">Penginapan</span>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <Label>Harga Paket Perjalanan</Label>
            <div className="flex flex-row gap-2 items-center">
              <Label>Rp</Label>
              <Input
                disabled
                type="number"
                placeholder={hargaPaket().toString()}
                className="mt-4 max-w-sm font-bold"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <Label>Jumlah Tagihan</Label>
            <div className="flex flex-row gap-2 items-center">
              <Label>Rp</Label>
              <Input
                disabled
                type="number"
                placeholder={totalTagihan().toString()}
                className="mt-4 max-w-sm"
              />
            </div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button type="submit" disabled={!form.formState.isValid}>Submit</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Rangkuman Reservasi Paket Wisata</DialogTitle>
                <DialogDescription>
                  Terima kasih telah melakukan reservasi paket wisata bersama kami. Berikut adalah rangkuman reservasi anda.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Nama
                  </Label>
                  <Input
                    id="name"
                    disabled
                    defaultValue={form.watch('nama_pemesan')}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="jumlah peserta" className="text-right">
                    Jumlah Peserta
                  </Label>
                  <Input
                    id="jumlah peserta"
                    disabled
                    defaultValue={form.watch('jumlah_orang')}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="Waktu Perjalanan" className="text-right">
                    Waktu Perjalanan
                  </Label>
                  <Input
                    id="Waktu Perjalanan"
                    disabled
                    defaultValue={form.watch('durasi_perjalanan')}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="Layanan Paket" className="text-right">
                    Layanan Paket
                  </Label>
                  <Input
                    id="Layanan Paket"
                    disabled
                    defaultValue={layananPaket()?.toString()}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="Harga Paket" className="text-right">
                    Harga Paket
                  </Label>
                  <Input
                    id="Harga Paket"
                    disabled
                    defaultValue={`Rp ${hargaPaket().toString()}`}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="Jumlah Tagihan" className="text-right">
                    Jumlah Tagihan
                  </Label>
                  <Input
                    id="Jumlah Tagihan"
                    disabled
                    defaultValue={`Rp ${totalTagihan().toString()}`}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <div className="flex flex-col">
                  <p className="font-bold">Pesan Lagi</p>
                  <Separator className="mb-3 mt-1"/>
                  <div className="flex flex-row gap-3">
                    <Button variant="default" onClick={() => router.back()}>Ya</Button>
                    <Button variant="outline" onClick={() => router.push('/')}>Tidak</Button>
                  </div>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </form>
      </Form>
    </div>
  );
}

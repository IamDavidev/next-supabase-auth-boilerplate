import Image from 'next/image'
import { Inter } from 'next/font/google'
import {ButttonLogin} from "@/app/components/ButttonLogin";
import {ButtonLogout} from "@/app/components/ButtonLogout";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title : "Next 13 - Supabase [ Boilerplate ]",
    description : "Next 13 Auth with Supabase  { Server Components }"

}

export default function Home() {
  return (
      <main className={"container p-16"}>
        <h1
            className={"text-4xl font-bold text-white"}
        > # Login
        </h1>
          <div className={"flex gap-4 flex-row my-4"}>
            <ButttonLogin />
            <ButtonLogout />
          </div>
      </main>
  )
}

import { Button } from "@/components/ui/button";
import { Nav } from "@/components/ui/nav";
import { SideBar } from "@/components/ui/sidebar";
import { ArrowLeft } from "lucide-react";
import {Success, Fail} from '@/components/ui/success'

export default function MyAccount() {
  return (
    <>
      <main className="flex w-full min-h-screen flex-row bg-[#181d1f]">
        <SideBar />

        <div className="flex w-full flex-col">
          <Nav />
          <section className="mx-auto w-11/12 mt-[92px]">
            <p className="text-[22px] font-medium text-white text-center sm:text-start flex items-center gap-2 px-2">
              <ArrowLeft className="sm:hidden block" />
              Transactions
            </p>
            <div className="h-fit rounded-[6px] mt-6 w-full p-3 sm:border sm:border-[#5B5B5B] ">
                <Button className="mb-4">
                    Sort By
                </Button>
                <div className="w-full h-60 border border-[#5B5B5B] rounded-[6px]">

                </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

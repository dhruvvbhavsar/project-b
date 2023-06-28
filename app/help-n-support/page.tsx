import { HelpIllustration } from "@/components/help";
import { Nav } from "@/components/ui/nav";
import { SideBar } from "@/components/ui/sidebar";
import { ArrowLeft, Mail, PhoneCall } from "lucide-react";

export default function MyAccount() {
  return (
    <>
      <main className="flex relative min-h-screen w-full bg-[#181d1f]">
        <SideBar />
          <section className="mx-auto sm:mt-[92px]">
            <p className="text-[22px] font-medium text-white text-center sm:text-start flex items-center gap-2 px-2">
              <ArrowLeft className="sm:hidden block" />
              Help and Support
            </p>
            <div className="h-fit bg-inherit rounded-[6px] mt-6 p-8 sm:border sm:border-[#5B5B5B] w-full ">
              <div className="flex flex-col items-center px-14">
                <HelpIllustration />
                <p className="text-white text-center text-sm mt-8">
                  We are here to help so please get in
                  <br />
                  touch with us
                </p>
              </div>

              <div className="w-full mt-12">
                <section className="flex items-center">
                  <div className="h-11 w-11 border border-[#2C3133] flex items-center justify-center rounded-[6px]">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <div className="ml-6 text-white">
                    <p className="text-sm">Email us at</p>
                    <p className="text-xs text-[#BA44C5]">
                      brandname@gmail.com
                    </p>
                  </div>
                </section>

                <section className="flex items-center mt-8">
                  <div className="h-11 w-11 border border-[#2C3133] flex items-center justify-center rounded-[6px]">
                    <PhoneCall className="text-white w-6 h-6" />
                  </div>
                  <div className="ml-6 text-white">
                    <p className="text-sm">Call us at</p>
                    <p className="text-xs text-[#BA44C5]">+91 9987078643</p>
                  </div>
                </section>
              </div>
            </div>
          </section>
      </main>
    </>
  );
}

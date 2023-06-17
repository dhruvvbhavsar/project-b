import { Nav } from "@/components/ui/nav";
import { SideBar } from "@/components/ui/sidebar";
import { Socials } from "./socials";
import { Activity } from "./activity";
import { Button } from "@/components/ui/button";

export default async function AddCard() {
  const isClicked: Boolean = true;
  return (
    <>
      <main className="flex h-screen w-full flex-row bg-[#181d1f] overflow-y-scroll">

        <SideBar />

        <div className="flex w-full flex-col">
          <Nav />

          <section className="ml-14 text-white">
            <p className="text-2xl">
              Exciting! Something interesting is going to start...
            </p>
            <div className="mt-8 border border-[#2D3234] w-[818px] flex flex-col  rounded-[6px] mb-[55px] pb-8">
              <section className="flex w-full">
                <article>
                  <div className="ml-8 mt-[36px]">
                    <p className="text-[#F3F3F3] text-sm">Select Platform</p>
                    <Socials />
                  </div>

                  <div className="ml-8 mt-[32px]">
                    <p className="text-[#F3F3F3] text-sm">
                      Paste the URL below
                    </p>
                    <input
                      type="text"
                      className="px-[12px] py-[14px] rounded-[6px] overflow-x-visible h-12 w-[345px] bg-[#24292C] hover:bg-[#202223] mt-4 placeholder:text-[#878787]"
                      placeholder="Copy and paste the text here"
                    />
                  </div>
                </article>

                <article>
                  <div className="ml-8 mt-[36px]">
                    <p className="text-[#F3F3F3] text-sm">
                      Your goal is to achieve?
                    </p>
                    <Activity />
                  </div>

                  <div className="ml-8 mt-[32px]">
                    <p className="text-[#F3F3F3] text-sm">Target</p>
                    <input
                      type="text"
                      className="px-[12px] py-[14px] rounded-[6px] overflow-x-visible h-12 w-[345px] bg-[#24292C] hover:bg-[#202223] mt-4  placeholder:text-[#878787]"
                      placeholder="500 Likes"
                    />
                  </div>
                </article>
              </section>

              {isClicked && (
                <section id="isDone" className="mt-[50px]">
                  <p className="text-lg text-center">
                    Here is your estimate budget
                  </p>
                  <div className="w-[110px] h-[74px] rounded-[6px] flex justify-center items-center mt-5 bg-[#24292C] mx-auto">
                    <p className="text-2xl glow font-medium text-[#BA44C5]">
                      ₹1000
                    </p>
                  </div>
                </section>
              )}
                
              <Button className="mt-11 purple-glow w-[202px] self-center h-12 px-[36px] py-[12px bg-[#BA44C5] hover:bg-[#90049D]">
                {isClicked ? "Create Card" : "Calculate budget"}
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SvgIllustration } from "@/components/svg";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function Reg() {
  async function verify(data: FormData) {
    "use server";

    const num = {
      number: "7715944948",
      otp: data.get("otp")?.toString(),
    };
    const response = await fetch(
      "https://project-b-olive.vercel.app/api/signup/verify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(num),
      }
    );

    const res = await response.json();
    console.log(res);

    if (response.ok) {
      const id = res[0]["data"]["_id"];
      const currentDate = new Date();
      const expirationDate = new Date(
        currentDate.getTime() + 7 * 24 * 60 * 60 * 1000
      );
      "use client";

      cookies().set({
        name: "id",
        value: id,
        path: "/",
        maxAge: expirationDate.getTime() - currentDate.getTime(),
      });
      redirect("/registration");
    }
  }
  return (
    <>
      <main className="flex h-screen w-full flex-row justify-center bg-[#181d1f] sm:justify-around">
        <section className="my-auto hidden h-5/6 w-1/2 flex-col items-center justify-center sm:flex">
          <SvgIllustration />
          <div className="text-center">
            <h1
              className="font-semibold text-[#BA44C5]"
              style={{ fontSize: "32px" }}
            >
              Get likes and followers instantly
            </h1>
            <p
              className="text-white"
              style={{ fontSize: "20px", marginTop: "10px" }}
            >
              Get noticed with #brandname the only app that helps
              <br />
              you gain likes and followers of your drearns.
            </p>
          </div>
        </section>
        <section className="flex my-auto h-5/6 sm:w-2/6 w-full mx-6 flex-col items-center rounded-lg bg-[#2d3234] text-white pb-24">
          <Select>
            <SelectTrigger className="w-3/12/12 text-sm self-end mt-6 border-none focus:border-none focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder="English (UK)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="eng">English (UK)</SelectItem>
              <SelectItem value="hin">Hindi</SelectItem>
              <SelectItem value="fra">French</SelectItem>
            </SelectContent>
          </Select>

          <div className="my-auto w-full flex flex-col  h-full justify-center px-8 space-y-8 pb-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="white"
              className="bi bi-heart-fill self-center"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
            <div className="space-y-1 mx-auto w-full px-6 pt-8">
              <h1 className="text-4xl  text-[#BA44C5]">Verify Details</h1>
              <p className="text-xs">
                OTP sent on{" "}
                <span className="text-blue-700">+91 7715944948</span>
              </p>
            </div>
            <form action={verify} className="grid items-center gap-2 px-6">
              <Label htmlFor="email-2">Enter 4 Digit OTP</Label>
              <Input
                className="placeholder:text-[#e0e0e0]"
                type="number"
                name="otp"
                placeholder="OTP"
              />
              <Button
                className={`bg-[#BA44C5] w-full`}
                variant="default"
                type="submit"
              >
                Verify
              </Button>
              <p className="text-center text-xs">Resend OTP in 15s</p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

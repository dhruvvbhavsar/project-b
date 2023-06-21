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

export default async function Reg() {
  "use server";
  const number = cookies().get("mobile")?.value
  async function name(data: FormData) {
    "use server";
    var number = cookies().get("mobile")?.value;
    const clientName = {
      name: data.get("name")?.toString(),
      number: number?.toString()

    };
    // const id = cookies().get("id")?.value
    // console.log(clientName.name)
    // console.log(id)
    const response = await fetch(
      `https://project-b-olive.vercel.app/api/client/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clientName),
      }
    );

    const res = await response.json();
    console.log(res);

    if (response.ok) {
      const clientName = res[0]["data"]["client"]["name"];
      const userToken = res[0]["data"]["token"];
      const id = res[0]["data"]["client"]["_id"];
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

      cookies().set({
        name: "name",
        value: clientName,
        path: "/",
      });

      cookies().set({
        name: "userToken",
        value: userToken,
        path: "/",
      });

      redirect("/dashboard");
    }
  }
  return (
    <main className="flex h-screen w-full flex-row justify-center bg-[#181d1f] sm:justify-around">
      <section className="my-auto hidden h-5/6 w-1/2 flex-col items-center justify-center md:flex">
        <SvgIllustration />

        <div className="text-center">
          <h1
            className="font-semibold text-[#BA44C5]"
            style={{ fontSize: "32px" }}
          >
            Get likes and followers 
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
          <SelectTrigger className=" w-3/12/12 text-sm self-end mt-6 border-none focus:border-none focus:ring-0 focus:ring-offset-0">
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
          <form action={name} className="space-y-6 mx-auto w-full px-6 pt-8">
            <h1 className="text-4xl  text-[#BA44C5]">Registration</h1>
            <div className="grid items-center gap-2">
              <Label>Name</Label>
              <Input
                className="placeholder:text-[#e0e0e0]"
                type="text"
                name="name"
                placeholder="Enter Your Name"
              />
            </div>
            <Button className="bg-[#BA44C5] w-full" variant="default">
              Save
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
export default function Home() {
  return (
    <>
      <main className="h-screen w-full bg-black text-white flex flex-col justify-center items-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Project-b Screens
        </h1>
        <div>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-gray-300">
            <li>
              <Link href="/registration">/Registration</Link>
            </li>
            <li>
              <Link href="/welcome">/Welcome</Link>
            </li>
            <li>
              <Link href="/verify-otp">/Verify-Otp</Link>
            </li>
            <li>
              <Link href="/dashboard">/Dashboard(Not Responsive)</Link>
            </li>
            <li>
              <Link href="/add-card">/Add-Card</Link>
            </li>
            <li>
              <Link href="/create-card">/Create-Card</Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

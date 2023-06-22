"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const CreateCardButton = () => {
  const router = useRouter()
  function handleClick() {
    router.push("/dashboard/create-card")
  }
  return (
    <Button onClick={handleClick} className="bg-[#ba44c5] hover:bg-[#90049D] h-12 mt-11 purple-glow w-[212px] self-center px-[36px] py-[12px]">
      Create Card
    </Button>
  );
};

export default CreateCardButton;

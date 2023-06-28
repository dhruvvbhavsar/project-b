"use client"
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
export default function AddCardButton() {
    const router = useRouter()
    function handleClick() {
        router.push("/dashboard/add-card")
    }
  return (
    <Button onClick={handleClick} className="bg-[#ba44c5]  hover:bg-[#90049D] h-12 mobile-button">
      <Plus className="mr-3" /> Add New Card
    </Button>
  );
}

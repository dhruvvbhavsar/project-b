"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CreateCardButton = ({ platform, activity,url, target, budget }) => {
  const cardDets = {
    selectedPlatform: platform,
    selectedActivity: activity,
    taskUrl: url,
    target: target,
    budget: budget,
  };

  return (
    <Link className="self-center" href={{
      pathname: "/dashboard/create-card",
      query: {card: JSON.stringify(cardDets)}
    }}>
      <Button disabled={!budget} className="bg-[#ba44c5] hover:bg-[#90049D] h-12 mt-11 purple-glow w-[212px] self-center px-[36px] py-[12px]">
        Create Card
      </Button>
    </Link>
  );
};

export default CreateCardButton;

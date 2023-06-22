"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const CreateCardButton = ({
  setBudget
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const apiUrl = "https://project-b-olive.vercel.app/api/client/get-budget";

  const handleCreateCard = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          platform: selectedPlatform,
          activity: selectedActivity,
          goal: targetValue,
        }),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        setBudget(result[0].data.budget);
      } else {
        console.error("Error calculating budget:", result.message);
      }
    } catch (error) {
      console.error("Error creating card:", error);
    }

    setIsLoading(false);
  };

  return (
    <Button
      onClick={handleCreateCard}
      disabled={isLoading}
      className="bg-[#ba44c5] hover:bg-[#90049D] h-12 mt-11 purple-glow w-[212px] self-center px-[36px] py-[12px]"
    >
      Create Card
    </Button>
  );
};

export default CreateCardButton;

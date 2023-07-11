"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CreateCardButton = ({
  platform,
  activity,
  url,
  target,
  budget,
  file
}) => {
  const formDataForImage = new FormData();
  const cardDets = {
    selectedPlatform: platform,
    selectedActivity: activity,
    taskUrl: url,
    target: target,
    budget: budget,
    // type: "Reel",
    // file: file
  };
  // async function fetchImageUrl() {
  //   formDataForImage.append("taskUrl", cardDets.taskUrl);
  //   formDataForImage.append("image", cardDets.file || "no image uploaded");
  //   formDataForImage.append("activity", cardDets.selectedActivity);
  //   const response = await fetch(
  //     `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/image-url`,
  //     {
  //       method: "POST",
  //       body: formDataForImage,
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //       cache: "no-store",
  //     }
  //   );
  //   const data = await response.json();
  //   console.log(data);
  //   const imageResponse = data[0]["data"];
  //   cardDets.type = imageResponse.type
  //   cardDets.file = imageResponse.urlImage
  // }
  return (
    <Link
      className="self-center"
      href={{
        pathname: "/dashboard/create-card",
        query: { card: JSON.stringify(cardDets) },
      }}
    >
      <Button
        // onClick={fetchImageUrl}
        disabled={!budget}
        className="bg-[#ba44c5] hover:bg-[#90049D] h-12 mt-11 purple-glow w-[212px] self-center px-[36px] py-[12px]"
      >
        Create Card
      </Button>
    </Link>
  );
};

export default CreateCardButton;

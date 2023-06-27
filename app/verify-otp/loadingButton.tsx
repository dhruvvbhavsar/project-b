'use client'
import { Button } from "@/components/ui/button";
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export default function LoadingButton() {
  const {pending} = useFormStatus();
  return (
    <Button disabled={pending}  type="submit" className="bg-[#BA44C5] w-full" variant="default">
      { pending ? 'Loading...' :
      'Verify'}
    </Button>
  );
}

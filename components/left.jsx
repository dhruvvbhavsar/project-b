import Image from 'next/image'
import png from '../public/bro.png'

export const Left = () => {
  return (
    <section className="my-auto hidden h-5/6 w-1/2 flex-col items-center justify-center sm:flex">
      <Image
      src={png}
      height={370}
      alt='illustration'
      />
      <div className="mt-10 text-center">
        <p className="text-2xl font-semibold text-[#BA44C5]">
          Get likes and followers instantly
        </p>
        <p className="pt-4 text-white">
          Get noticed with #brandname the only app that helps
          <br />
          you gain likes and followers of your drearns.
        </p>
      </div>
    </section>
  );
};

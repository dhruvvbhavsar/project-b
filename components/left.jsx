import Image from 'next/image'
import png from '../public/bro.png'

export const Left = () => {
  return (
    <section className="my-auto hidden h-5/6 w-1/2 flex-col items-center justify-center sm:flex">
      <Image className='mx-auto pb-8' src={png} width={360} alt='illustration' />
      <div className="text-center">
        <h1 className="font-semibold text-[#BA44C5]" style={{fontSize: "32px"}}>
          Get likes and followers instantly
        </h1>
        <p className="text-white" style={{fontSize: "20px", marginTop: "10px"}}>
          Get noticed with #brandname the only app that helps
          <br />
          you gain likes and followers of your drearns.
        </p>
      </div>
    </section>
  );
};

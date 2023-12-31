import ThreeD from './components/ThreeD'
import Link from "next/link";

export default function Home() {
  // const Loader = (props) => (
  //   <>
  //     <Ellipsis />
  //   </>
  // );

  return (
    <main className="min-h-[calc(100vh-100px)] flex flex-col items-center text-white mt-[4rem]">
      <div className=" fixed z-[-1] top-0">
        <ThreeD />

      </div>
    
      <div className="mt-20">
        {/* Assuming your-image.png is in the public folder */}
        <img
          // src="/vibewire_white.png"
          // alt="Description of your image"
          // className="w-100 h-48 rounded-full"
        />
      </div>
      <div className="mt-20">
        {/* Assuming your-image.png is in the public folder */}
        <img
          // src="/vibewire_white.png"
          // alt="Description of your image"
          // className="w-100 h-48 rounded-full"
        />
      </div>
      <div className="mt-40">
        {/* Assuming your-image.png is in the public folder */}
        <img
          src="/vibewire_white.png"
          alt="Description of your image"
          className="w-70 h-50 rounded-full"
        />
      </div>
      <div  className="mt-25">
      <Link
              href="/verify"
              className="font-bold bg-[rgba(0,0,0,0)] px-[2.5rem] py-[2rem] rounded-md cursor-pointer hover:bg-[rgba(0,0,0,0)] hover:text-white hover:fill-white border-[1px] transition-all" //bg-white text-[#1B1C1E]
            >
              Start Verifying!
            </Link>
      </div>
      {/* <div className="flex flex-col items-center justify-end h-full">
        <div className="text-[#92a1ff] font-semibold">
          Blockchain Marketplace
        </div>
        <div className="text-[6rem] font-semibold">Verbify</div>
        <div className=""> Safeguarding Art, Unleashing Identity – Your Masterpiece, Your Blockchain </div>
      </div> */}
    </main>
    
  )
}

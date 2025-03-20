import Image from "next/image";

export default function Home() {
  return (
    <div> 
      <Image 
        src="/assets/images/Rebrand_1800-900 cover.png" 
        alt="Dynastical Clients" 
        width={1800} 
        height={900} // Required when not using `fill`
      />
    </div>
  );
}


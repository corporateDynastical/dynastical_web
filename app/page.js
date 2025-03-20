import Image from "next/image";

export default function Home() {
  return (
    <div style={{ maxWidth: "100%", overflow: "hidden" }}> 
      <Image 
        src="/assets/images/Rebrand_1800-900 cover.png" 
        alt="Dynastical Clients" 
        width={1800} 
        height={900} 
        style={{ width: "100%", height: "auto" }} // Ensures responsiveness
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1800px"
        priority // Loads the image faster
      />
    </div>
  );
}

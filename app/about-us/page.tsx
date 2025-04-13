import Image from "next/image";

export const metadata = {
    title: "About us",
  };
  
  export default function AboutUs() {
    return (
      <div>
        <Image
          src="/images/B003923992.jpg"
          alt="hi"
          fill
        />
      </div>
    );
  }
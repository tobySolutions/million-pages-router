import Image from "next/image";
import { Inter } from "next/font/google";
import { block } from "million/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home(){
  return (
    <div>
      <h1>Hello, Million with Pages Router!</h1>
      <OmoOlogo />
      <OmoOlogoBlock/>
    </div>
  );
};

const OmoOlogoBlock = block(() => {
  return <p>OmoOlogo Block</p>;
});

const OmoOlogo = () => {
  return <p style={{ color: "green", fontSize: "30px" }}>OmoOlogo React Component demo</p>;
};




import Image from "next/image";
import ProductGrid from "./components/product";

export default function Home() {
  return (
    <div className=" bg-[#f9f9f9] font-sans  items-center justify-items-center  ">
      <ProductGrid/>
    </div>
  );
}

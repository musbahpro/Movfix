import Image from "next/image";
import notFound from "../../public/images/6324728.png";
import Link from "next/link";
export default function Custom404() {
  return (
    <div className="flex justify-center items-center h-full w-full flex-col py-36">
      <Image src={notFound} alt="notFound" width={600}></Image>
      <Link
        href={"/"}
        className="w-64 rounded-3xl flex justify-center items-center font-black
         h-12  text-gray-900 hover:bg-yellow-700 bg-yellow-400 transition-all">
        Go TO Home Page
      </Link>
    </div>
  );
}

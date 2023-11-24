import Button from "@/Components/Extensions/Button";
import { FaGooglePlay } from "react-icons/fa";
import AllMovies from "@/Components/AllMovies/AllMovies";
import {
  BsBadge4KFill,
  BsBadge8KFill,
  BsCalendarCheckFill,
} from "react-icons/bs";
export default function Home() {
  return (
    <div>
      <div className="Hero">
        <div className="absolute left-[20%] top-1/3 space-y-8">
          <span className=" text-yellow-500 text-xl font-black">Movflx</span>
          <h1 className="lg:text-6xl text-3xl font-black leading-7">
            Unlimited <span className=" text-yellow-500">Movies</span>
            <br />
            TVsShows, & More.
          </h1>
          <h2 className=" flex items-center text-xl">
            <BsBadge8KFill className="text-yellow-500 mx-2 " /> and
            <BsBadge4KFill className="text-yellow-500 mx-2 " /> Romance, Drama
            <BsCalendarCheckFill className="text-yellow-500 mx-2 " /> 2022
          </h2>
          <Button name="GO TO Movies" icon={<FaGooglePlay />} url={"/Movie"} />
        </div>
      </div>
      <div className="pricingBg">
        <div className=" container m-auto pt-12">
          <p className=" text-yellow-500 text-sm">ONLINE STREAMING</p>
          <h1 className=" text-4xl font-black">Upcoming Movies</h1>
        </div>
        <AllMovies />
      </div>
    </div>
  );
}

import AllMovies from "@/Components/AllMovies/AllMovies";
import Topsection from "@/Components/TopSection/Topsection";

export const metadata = {
  title: "Movflx - Movies",
  description: "Unlimited Movies TVsShows, & More.",
};

export default function Movie() {
  return (
    <div className="pricingBg">
      <Topsection name="Our" span="Movie" />
      <AllMovies />
    </div>
  );
}

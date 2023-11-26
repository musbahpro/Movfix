import AllMovies from "@/Components/AllMovies/AllMovies";
import TopSection from '@/Components/TopSection/TopSection'

export const metadata = {
  title: "Movflx - Movies",
  description: "Unlimited Movies TVsShows, & More.",
};

export default function Movie() {
  return (
    <div className="pricingBg">
      <TopSection name="Our" span="Movie" />
      <AllMovies />
    </div>
  );
}

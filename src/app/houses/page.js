import HouseList from "@/components/HouseList";
import Navbar from "@/components/Navbar";
import houses from "@/data/houses";

function Houses() {
  return (
    <>
      <Navbar />
      <h1 className="text-center">
        Explore Hogwarts Houses!
      </h1>
      <HouseList houses={houses} />
    </>
  )
}

export default Houses
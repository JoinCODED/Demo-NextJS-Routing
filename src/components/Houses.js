import houses from "@/data/houses";

import HouseList from "./HouseList";
import Navbar from "./Navbar";

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
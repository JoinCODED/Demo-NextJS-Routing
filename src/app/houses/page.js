import HouseList from "@/components/HouseList";
import houses from "@/data/houses";

function Houses() {
  return (
    <>
      <h1 className="text-center">
        Explore Hogwarts Houses!
      </h1>
      <HouseList houses={houses} />
    </>
  )
}

export default Houses
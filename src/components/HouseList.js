import HouseCard from "./HouseCard";

const HouseList = ({ houses }) => {
  const displayHouses = houses.map((house) => {
    return <HouseCard key={house.name} house={house} />;
  });

  return <div className="flex gap-3 p-3 justify-center">{displayHouses}</div>

};

export default HouseList;

import Image from "next/image";

function HouseCard({ house }) {
  return (
    <div className="flex flex-col justify-center items-center rounded-xl p-3 border border-gray-500 border-solid">
      <Image
        src={house.logo}
        alt={house.name}
        width={320}
        height={320}
        className="w-80"
      />
      <h3>{house.name}</h3>
      <p>{house.description}</p>
    </div>
  );
};

export default HouseCard;

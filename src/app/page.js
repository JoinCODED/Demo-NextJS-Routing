import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen h-screen">
      <Navbar />
      <div className="flex flex-col justify-center h-1/2 items-center">
        <h1 className="">Welcome to the Wizarding World of Harry Potter</h1>
      </div>
    </div>
  );
}

import Navbar from "./ui/navbar";

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar />

      <div className="content-center w-full h-full px-6">
        <h1 className="text-5xl/14 font-medium">
          Graduate from Nanyang Polytechnic <br />
          Passionate about building tech for public good.
          </h1>
      </div>
    </div>
  );
}

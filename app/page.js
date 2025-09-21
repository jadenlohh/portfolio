import Navbar from "./ui/navbar";
import Socials from "./ui/socials";

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar />
      <Socials />

      <div className="content-center w-full h-full px-7">
        <h1 className="text-5xl/14 font-medium">
          Graduate from Nanyang Polytechnic <br />
          Passionate about building tech for public good.
          </h1>
      </div>
    </div>
  );
}

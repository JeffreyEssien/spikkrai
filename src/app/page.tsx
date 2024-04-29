import Body from "./body/page";
import Navbar from "./navbar/page"
import Sidebar from "./sidebar/page"

export default function Home() {
  return (
    <div className="text-black bg-[#F2F2F1] pb-10">
      <Navbar />
      <div className="flex">
      <Sidebar />
      <Body />
      </div>
      <p></p>
    </div>
  );
}

import { useState } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Card from "./components/card";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <Header onToggle={toggleSidebar} />
      <div className="relative flex">
        <Sidebar isOpen={isOpen} />

        <div className="flex flex-col flex-1 px-4 py-2 after:">
          <div className="flex flex-wrap items-center mb-4 space-x-4">
            <button className="px-6 py-2 text-white transition duration-200  rounded-full bg-gray-400 ">
              All
            </button>
            <button className="px-4 py-2 text-white transition duration-200 rounded-full bg-gray-400">
              Music
            </button>
            <button className="px-4 py-2 text-white transition duration-200  rounded-full bg-gray-400">
              Gaming
            </button>
            <button className="px-4 py-2 text-white transition duration-200  rounded-full bg-gray-400">
              News
            </button>
            <button className="px-4 py-2 text-white transition duration-200  rounded-full bg-gray-400">
              Sports
            </button>
            <button className="px-4 py-2 text-white transition duration-200  rounded-full bg-gray-400">
              Tech
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

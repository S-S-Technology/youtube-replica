import { useState } from "react";
import { BsHouseDoor, BsChat, BsPerson, BsBell } from "react-icons/bs";
import dp from "../assets/admin.png";
import thumbnail from "../assets/thumb.jpg";
import YoutubeLogo from "../assets/logo.png";
import { IconMenu2 } from "@tabler/icons-react";

interface Props {
  onToggle: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Header = (props: Props) => {
  const { onToggle } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotiOpen, setNotiOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleNoti = () => {
    setNotiOpen(!isNotiOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 space-x-10 bg-white">
      {/* Hamburger Menu Icon */}
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        <button onClick={onToggle} className="relative">
          <IconMenu2 stroke={1} size={30} />
        </button>
      </div>

      {/* YouTube Logo */}
      <div>
        <img src={YoutubeLogo} alt="YouTube Logo" className="w-36" />
      </div>

      {/* Search Bar */}
      <div className="relative flex-grow mx-4 lg:flex">
        {/* Search Icon in Mobile View */}
        {!isSearchOpen && (
          <button
            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 lg:hidden"
            onClick={toggleSearch}
          ></button>
        )}

        {/* Search Input Field */}
        <input
          type="text"
          placeholder="Search"
          className={`w-full px-3 py-1 text-black bg-white border border-gray-500 outline-none rounded-2xl ${
            isSearchOpen || !isMenuOpen ? "block" : "hidden"
          }`}
        />
      </div>

      {/* Bell Icon */}
      <div>
        <button className="relative mt-2" onClick={toggleNoti}>
          <BsBell className="w-5 h-5 mr-4 text-red-600" />
          {isNotiOpen && (
            <div className="absolute right-0 z-10 mt-2 bg-white border border-gray-200 rounded shadow-lg w-72">
              <div className="p-4">
                <h2 className="mb-4 text-lg font-semibold">Notifications</h2>
                <ul className="divide-y divide-gray-200">
                  {/* Notification items */}
                  <li className="flex items-start py-2 space-x-4">
                    <img
                      src={thumbnail}
                      alt="Thumbnail"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex flex-col flex-grow">
                      <p className="text-sm font-medium">Liked your video</p>
                      <p className="text-sm text-gray-500">
                        Krishna Jod 10 SOlo Kills ? Snehil Op 100K views Posted
                        9 hours ago
                      </p>
                    </div>
                  </li>
                  {/* More notification items */}
                </ul>
              </div>
            </div>
          )}
        </button>
      </div>

      {/* User Avatar */}
      <div className="relative">
        <img
          src={dp}
          alt="User Avatar"
          className="w-20 rounded-full cursor-pointer"
          onClick={toggleMenu}
        />
        {isMenuOpen && (
          <div className="absolute right-0 w-48 bg-white border border-gray-200 rounded shadow-md top-10">
            <ul>
              <li className="flex items-center p-2 text-black">
                <BsPerson className="mr-2" />
                Profile
              </li>
              <li className="flex items-center p-2 text-black">
                <BsChat className="mr-2" />
                Messages
              </li>
              <li className="flex items-center p-2 text-black">
                <BsHouseDoor className="mr-2" />
                Home
              </li>
              {/* Other menu items */}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import { IconHome, IconInbox, IconBell } from "@tabler/icons-react";

interface Props {
  isOpen: boolean;
}

const Sidebar = (props: Props) => {
  const { isOpen } = props;

  return (
    <div
      className={`absolute flex w-full h-full lg:relative lg:w-fit ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white -white w-52 shadow-2xl lg:shadow-none">
        <nav className="mt-4">
          <ul>
            <li className="mt-4">
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-600 hover:text-black"
              >
                <IconHome size={20} strokeWidth={1.5} />
                <span className="ml-2">Dashboard</span>
              </a>
            </li>
            <li className="mt-4">
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-600 hover:text-black"
              >
                <IconInbox size={20} strokeWidth={1.5} />
                <span className="ml-2">Messages</span>
              </a>
            </li>
            <li className="mt-4">
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-600 hover:text-black"
              >
                <IconBell size={20} strokeWidth={1.5} />
                <span className="ml-2">Notifications</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

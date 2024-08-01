import { PhotoLinks } from "../data/PhotoLinks";
import { VideoLinks } from "../data/VideoLinks";
import { Irene, Seulgi, Wendy, Joy, Yeri } from "../data/Members";

const Header = () => {
  const logo = PhotoLinks.find((photo) => photo.name === "logo");
  const CosmicMV = VideoLinks.find((video) => video.name === "CosmicMV");

  return (
    <nav className="bg-pink-200 fixed w-full z-20 top-0 start-0 border-b border-gray-200 h-16">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        <a
          href={CosmicMV?.url}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo?.url} className="h-8" alt="Red Velvet Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Red Velvet Fandom
          </span>
        </a>

        <div
          className="items-center justify-between  flex w-auto "
          id="navbar-sticky"
        >
          <ul className="flex flex-row p-2  font-medium  rounded-lg space-x-2 ">
            <li>
              <a
                href="#"
                className={`block py-2 px-3 text-white hover:border-b-2 hover:border-${Irene?.color} hover:`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 text-white hover:border-b-2 hover:border-${Seulgi?.color} hover:`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 text-white hover:border-b-2 hover:border-${Wendy?.color} hover:`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 text-white hover:border-b-2 hover:border-${Joy?.color} hover:`}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-3 text-white hover:border-b-2 hover:border-${Yeri?.color} hover:`}
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

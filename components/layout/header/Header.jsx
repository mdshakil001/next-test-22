import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { FaNotesMedical, FaHospitalUser } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { RiArticleLine } from "react-icons/ri";
import {
  MdArrowRight,
  MdArrowDropDown,
  MdHealthAndSafety,
} from "react-icons/md";
import { LogoJsonLd } from "next-seo";

const Header = () => {
  const links = [
    {
      id: "1",
      name: "Care at MyHC",
      hasSublinks: true,
      icon: <MdHealthAndSafety size="20px" className="mr-2" color="" />,
    },
    {
      id: "2",
      name: "About Us",
      hasSublinks: true,
      icon: <FaHospitalUser size="20px" className="mr-2" color="" />,
    },
    {
      id: "3",
      name: "Learn More",
      hasSublinks: true,
      icon: <GiOpenBook size="20px" className="mr-2" color="" />,
    },
  ];

  const sublinks = [
    // { parentId: "1", name: "See a Doctor", route: "/see-a-doctor" },
    {
      parentId: "1",
      name: "Health Screening",
      route: "/health-screening",
      icon: <FaNotesMedical size="20px" className="mr-2" color="" />,
    },
    // { parentId: "1", name: "Telemed (Coming Soon)", route: "/telemedicine" },
    {
      parentId: "2",
      name: "Our Story",
      route: "/our-story",
      icon: <BsFillChatTextFill size="20px" className="mr-2" color="" />,
    },
    // { parentId: "2", name: "The Team", route: "/the-team" },
    {
      parentId: "2",
      name: "Contact Us",
      route: "/contact-us",
      icon: <BiSupport size="20px" className="mr-2" color="" />,
    },
    {
      parentId: "3",
      name: "Articles",
      route: "/articles",
      icon: <RiArticleLine size="20px" className="mr-2" color="" />,
    },
    // { parentId: "3", name: "Webinar Series", route: "/webinar-series" },
  ];

  const [navItemSelected, setNavItemSelected] = useState(null);
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuItemOpen, setMenuItemOpen] = useState([]);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  });

  const renderNavItem = (linkId) => {
    return (
      <div className="bg-white border z-50 flex flex-col px-8 py-4 shadow rounded absolute">
        {sublinks
          .filter((sublink) => sublink.parentId === linkId)
          .map((sublink, idx) => (
            <div key={idx} className="py-1.5 hover:text-primary-100">
              <Link href={sublink.route}>{sublink.name}</Link>
            </div>
          ))}
      </div>
    );
  };

  return (
    <>
      {/* Desktop header */}
      <div
        className={`shadow px-10 font-general bg-white hidden md:block sticky top-0 z-50 justify-between items-center transition-all duration-500  ${
          show && "md:-top-20"
        }`}
      >
        {/* <div className=" pb-2 max-w-screen-xl mx-auto"> */}
        {/* <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered"
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div> */}
        {/* </div> */}
        <div className="max-w-screen-xl mx-auto items-center flex">
          <Link href="/">
            <a>
                <Image
                  loading="lazy"
                  src="/assets/images/logo_primary.svg"
                  className="h-16"
                  alt="logo"
                  width={158.4}
                  height={57.6}
                  quality={100}
                />
            </a>

          {/* < LogoJsonLd
            url="https://www.myhealthcare.com/"
            logo="https://www.myhealthcare.com/assets/images/logo_primary.svg"
          /> */}

          </Link>
          <div className="flex items-center justify-end w-full">
            {links.map((link, idx) => (
              <div
                className="md:pr-8 lg:pr-16 font-medium"
                onMouseEnter={() => setNavItemSelected(link.id)}
                onMouseLeave={() => setNavItemSelected(null)}
                href={link.route}
                key={idx}
              >
                <div className="cursor-pointer hover:text-primary-100 my-4">
                  {link.name}
                </div>
                {navItemSelected === link.id &&
                  link.hasSublinks &&
                  renderNavItem(link.id)}
              </div>
            ))}
            <Link href="/contact-us" passHref>
              <button className="flex flex-row items-center justify-center px-5 py-3 bg-blue-400 border-secondary-100 text-heading font-title font-extrabold rounded-lg ml-8 my-4 drop-shadow hover:bg-blue-500 hover:scale-105 transition-all duration-300">
                <BiSupport size="18px" className="mr-2" color="" />
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile header  */}

      {mobileNavbarOpen ? (
        <div className="shadow font-general md:hidden bg-white h-screen w-screen fixed top-0 z-50">
          <div className="flex justify-start pl-10 items-center py-8 flex-wrap">
            <Link href="/">
              <a>
              <Image
                  loading="lazy"
                  src="/assets/images/logo_primary.svg"
                  className="h-16"
                  alt="logo"
                  width={158.4}
                  height={57.6}
                  quality={100}
                />
              </a>
            </Link>
          </div>
          <div className="my-4 mx-8">
            {links.map((link, idx) => (
              <div key={idx}>
                <div
                  className={`flex flex-row items-center justify-between font-title text-white text-md bg-primary-100/80 py-3 px-4 rounded-lg  text-base drop-shadow-md ${
                    !menuItemOpen.includes(link.id) && "my-4"
                  }`}
                  onClick={() => {
                    setMenuItemOpen((prev) => {
                      if (!prev.includes(link.id)) return [...prev, link.id];
                      else return prev.filter((item) => item != link.id);
                    });
                  }}
                >
                  <div className="flex flex-row items-center justify-between">
                    {link.icon}
                    {link.name}
                  </div>
                  {menuItemOpen.includes(link.id) ? (
                    <MdArrowDropDown size="28px" color="#FFF" />
                  ) : (
                    <MdArrowRight size="28px" color="#FFF" />
                  )}
                </div>
                {menuItemOpen.includes(link.id) && (
                  <div className="">
                    {sublinks
                      .filter((sublink) => sublink.parentId === link.id)
                      .map((sublink, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-lg py-4 px-4 hover:underline underline underline-offset-2 decoration-dashed bg-white/30 backdrop-blur-xl my-2 rounded-lg border border-gray-400/40"
                          onClick={() => setMobileNavbarOpen(false)}
                        >
                          <Link href={sublink.route} passHref={true}>
                            <div className="flex items-end text-base">
                              {sublink.icon}
                              {sublink.name}
                            </div>
                          </Link>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div
            className="absolute top-4 right-6 cursor-pointer"
            onClick={() => setMobileNavbarOpen(false)}
          >
            <ImCross size="16px" color="#58595B" />
          </div>
        </div>
      ) : (
        <div
          className={`shadow font-general md:hidden bg-white w-full px-2 py-2 flex justify-between sticky top-0 z-50 items-center transition-all duration-500 ${
            show && "-top-24"
          }`}
        >
          <Link href="/">
            <a>
                <Image
                  loading="lazy"
                  src="/assets/images/logo_primary.svg"
                  className="h-16"
                  alt="logo"
                  width={158.4}
                  height={57.6}
                  quality={100}
                />
            </a>
          </Link>
          <div
            className="p-2 h-12 cursor-pointer"
            onClick={() => setMobileNavbarOpen(true)}
          >
            <AiOutlineMenu size="24px" />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

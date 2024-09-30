import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";

const Navbar = () => {
  // const section1Ref = useRef(null);
  // const section2Ref = useRef(null);
  // const section3Ref = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const navlinks = [
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Faq",
      path: "#faq",
    },
    {
      title: " get quote",
      path: "#getQuote",
    },
  ];
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 space-y-4 shadow"
            >
              {navlinks.map((item) => (
                <Link className="uppercase " href={item.path} key={item.path}>
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex">
            <div className="items-center flex space-x-6">
              {navlinks.map((item) => (
                <Link className="uppercase" href={item.path} key={item.path}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Link href={"/"} className="btn navbar-center btn-ghost text-xl">
          <Image
            alt="logo"
            src="/Logo Hori Light.svg"
            height={140}
            width={240}
          />
        </Link>
        <div className="navbar-end gap-5">
          <div class="flex justify-center mt-6 lg:mt-0 gap-2">
            <Link
              target="_blank"
              href={"https://www.facebook.com/mammothmedia.digital"}
            >
              <CiFacebook className="text-3xl text-secondary" />
            </Link>
            <Link
              target="_blank"
              href={
                "https://www.instagram.com/mammothmedia.digital?fbclid=IwY2xjawFljE9leHRuA2FlbQIxMAABHYJKLfxFL7Y1TQEX62aUjn8-hK_LmDtqUZVDEuCpPcM8A7xVrD-SS5edIw_aem_cLRTRNd934ATTTVjYKywVA"
              }
            >
              <CiInstagram className="text-3xl text-secondary" />
            </Link>
            <Link target="_blank" href={"https://www.youtube.com/@SpangleD"}>
              <CiYoutube className="text-3xl text-secondary" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
